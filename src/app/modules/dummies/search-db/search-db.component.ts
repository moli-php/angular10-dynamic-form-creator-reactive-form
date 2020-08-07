import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search-db',
  templateUrl: './search-db.component.html',
  styleUrls: ['./search-db.component.css']
})
export class SearchDbComponent implements OnInit, OnDestroy {
  public name: string = '';
  public title: string = '';
  contentName = new FormControl('');
  contentTitle = new FormControl('');
  contentForm: FormGroup = this.formBuilder.group({
    name: this.contentName,
    title: this.contentTitle
  });
  name2 = new FormControl('');
  title2 = new FormControl('');
  contentForm2: FormGroup = this.formBuilder.group({
    name: this.name2,
    title: this.title2
  });
  name3 = new FormControl('');
  title3 = new FormControl('');
  contentForm3: FormGroup = this.formBuilder.group({
    name: this.name3,
    title: this.title3
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
    if (this.contentObv) {
      this.contentObv.unsubscribe();
    }
  }
  // can handle empty values
  oneWayWork() {
    this.contentForm.valueChanges.subscribe((val)=>{
      if (!val.name.trim() && !val.title.trim()) {
        this.contentData = [];
        return false;
      }
      this.contentLookup$.next();
    });
   
    this.contentLookup$.pipe(
      switchMap(() => {
      this.loading = true;
      return this.apiService.searchContent(this.contentForm.value);
      })
    ).subscribe(res => {
      this.contentData = res;
        this.loading = false;
    }, (err) =>{
      console.log(err)
    });
 
  }
  // can't handle empty values
  otherWayThatWork() {
    this.contentForm2.valueChanges.pipe(
      switchMap(values => {
        this.loading = true;
        return this.apiService.searchContent(values)
      })
    ).subscribe(res =>{
      console.log(res)
      this.contentData = res;
      this.loading = false;
    }, (err) => console.log(err))
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
      return this.loading = false;
    }
    if (this.contentObv) {
      this.contentObv.unsubscribe();
    }
    this.contentObv = this.apiService.searchContent(this.contentForm3.value).subscribe(res => {
      this.contentData = res;
      this.loading = false;
    }, err => {
      console.log(err)
      this.loading = true;
    })
  }


  
  

}
