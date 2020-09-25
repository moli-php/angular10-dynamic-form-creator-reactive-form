import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap, debounceTime, debounce, distinctUntilChanged, map, concatAll } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search-db',
  templateUrl: './search-db.component.html',
  styleUrls: ['./search-db.component.css']
})
export class SearchDbComponent implements OnInit, OnDestroy {
  // public name: string = '';
  // public title: string = '';
  contentForm: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    title: new FormControl('')
  });
  contentForm2: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    title: new FormControl('')
  });
  contentForm3: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    title: new FormControl('')
  });
  contentObv: any;
  contentData: any;
  loading: boolean = false;

  private contentLookup$: Subject<void> = new Subject();

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.oneWayWork();
    this.otherWayThatWork();
   
  }

  ngOnDestroy() {
    this._unsubscribeContent();
  }
  // can handle empty values
  oneWayWork() {
    this.contentForm.valueChanges.subscribe((val)=>{
     
      if (!val.name.trim() && !val.title.trim()) {
        this.contentData = [];
        return false;
      }
      console.log(val)
      this.contentLookup$.next();
    },(err)=> {
      this.loading = false;
    });
   
    this.contentLookup$.pipe(
      debounceTime(200),
      switchMap(() => {
      this.loading = true;
      return this.apiService.searchContent(this.contentForm.value);
      })
    ).subscribe(res => {
      this.contentData = res;
        this.loading = false;
    }, (err) =>{
      console.log(err)
      this.loading = false;
    });
 
  }

  otherWayThatWork() {
    let handleData = [];
    this.contentForm2.valueChanges.pipe(
      switchMap(values => {
        this.loading = true;
        if(!values.name && !values.title) {
          this.loading = false;
          this.contentData = [];
          return this.contentData;
        }
        return this.apiService.searchContent(values)
        // adding pipe just for a test to filter name and title only
        .pipe(
          /**#1 */
          // map(data => {
          //     let contents = [];
          //     for (let i in data) {
          //       contents.push({name: data[i].name, title: data[i].title});
          //     }
          //     return contents;
          //   })
          /**#2 */
          concatAll(),
          map(({name, title}: any) => ({name:name, title:title})),
          map(data => {
            handleData.push(data);
            return handleData;
          })
        )
      })
    ).subscribe(res =>{
      console.log(res)
      this.contentData = res;
      this.loading = false;
    }, (err) => {
      console.log(err)
      this.loading = false;
    }
    )
  }

// too many conditions and it triggers any keys, even the `shift, alt, etc` key
  onKeyUp(e) {
    // console.log(e.keyCode)
    // console.log(e)
    this.loading = true;
    if (e.keyCode === 13 || e.keyCode === 16 || e.keyCode === 46) {
      return this.loading = false;
    }
    if (!this.contentForm3.value.name.trim() && !this.contentForm3.value.title.trim()) {
      this.contentData = [];
      this._unsubscribeContent();
      return this.loading = false;
    }
    this._unsubscribeContent();
    this.contentObv = this.apiService.searchContent(this.contentForm3.value).subscribe(res => {
      this.contentData = res;
      this.loading = false;
      
    }, err => {
      console.log(err)
      this.loading = true;
    })
  }

  private _unsubscribeContent() {
    if (this.contentObv) {
      this.contentObv.unsubscribe();
    }
  }


  
  

}
