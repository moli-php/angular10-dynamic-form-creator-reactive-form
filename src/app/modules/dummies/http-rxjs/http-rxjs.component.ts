import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, of, fromEvent, Observable, forkJoin } from 'rxjs';
import {catchError, last, mergeAll, take, switchMap, debounceTime, 
  distinctUntilChanged, map, throttleTime, scan, filter, concatAll, 
  concatMap, flatMap, distinct, concat, takeUntil, toArray, exhaust, delay, debounce  } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-http-rxjs',
  templateUrl: './http-rxjs.component.html',
  styleUrls: ['./http-rxjs.component.css']
})
export class HttpRxjsComponent implements OnInit, OnDestroy {
  contents: any;
  loading: boolean = false;
  contentService: any;

 

  constructor(private apiService: ApiService) { }

  ngOnDestroy() {
    if (this.contentService) {
      this.contentService.unsubscribe();
    }
    
  }

  ngOnInit(): void {

    // fromEvent(document, 'click')
    // .pipe(
    //   throttleTime(1000),
    //   scan(count => count + 1, 0)
    // )
    // .subscribe(count => console.log(`Clicked ${count} times`));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe(x => console.log(x));


//     const source = interval(1000);
// const clicks = fromEvent(document, 'click');
// const result = source.pipe(takeUntil(clicks));
// result.subscribe(x => console.log(x));
// this.apiService.showAccount(1).subscribe(data => console.log(data));

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(debounceTime(1000));
// result.subscribe(x => console.log(x));

const a = of(1, 2, 3, 4, 5).pipe(
  map(n => {
     if (n === 4) {
       throw 'four!';
    }
   return n;
  }),
  catchError(err => err),
);
a.subscribe(data => console.log(data))


  }
  

  onChange(evt) {
    const value = evt.target.value
    const id = evt.target.id;
    const searchTerm = {name: value};
    this.loading = true;

    let getContents = [];
    this.contentService = this.apiService.searchContent(searchTerm)
    .pipe(
      /**1 filter only even number id's and show only id, name and title*/
      // concatAll(),
      // filter((data: any) => data.id % 2 === 0),
      // map(({id, name, title}) => {
      //   getContents.push({id:id, name:name, title:title})
      //   return getContents;
      // })

      /**2 filter no duplicate country and account_id, show only account_id, country, is_action, is_survey, name*/
      // concatAll(),
      // distinct((b: any) => b.country && b.account_id),
      // map(({account_id, country, is_action, is_survey, name}) => {
      //   getContents.push( {account_id:account_id, name:name, country:country, is_action:is_action, is_survey:is_survey});
      //   return getContents;
      // }),

      /**3 filter no duplicate on country & account_id, no zero (0) account_id, concat with account table on selected fields*/
      concatAll(),
      distinct((b: any) => b.country && b.account_id),
      filter((data: any) => data.account_id !== 0),
      distinctUntilChanged(),
      // map(({id, account_id, name, title,country}) => {
      //   let content = {id:id, name:name, title:title, country:country, account: null};
      //     this.apiService.showAccount(account_id).pipe(
      //       map(({id, name, campaign_supplier_id_legacy, list_size, country, industry}: any) => 
      //         ({id:id,name:name,suplier_id:campaign_supplier_id_legacy,list_size:list_size,country:country,industry:industry})),
      //         // distinctUntilChanged()

      //       ).subscribe(data => {
      //         content.account = data
      //         getContents.push(content);
      //       })
         
      //     return getContents;
      // }),
      // map(({id, account_id, name, title, country}) => {
      //    getContents.push({id:id, account_id:account_id, name:name, title:title, country:country, account: null});
      //    return getContents;
      // }),

      map(({id, account_id, name, title, country}) => ({id:id, account_id:account_id, name:name, title:title, country:country, account: null})),
      distinctUntilChanged(),
      map((data) => {
        this.apiService.showAccount(data.account_id)
        .pipe(
          map(({id, name, campaign_supplier_id_legacy, list_size, country, industry}: any) => ({
            id:id, name:name, supplier_id:campaign_supplier_id_legacy, list_size:list_size, country:country, industry:industry
          })),
          catchError(err => err)
        )
        .subscribe(accountData => {
          data.account = accountData
          getContents.push(data);
        });
        return getContents;
      })
    )
    .subscribe({
      next: (data) => {
        this.contents = data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
      complete: () => {
        console.log(this.contents);
        console.log('high-order observable complete')
        this.loading = false;
      }
    })





  }

}
