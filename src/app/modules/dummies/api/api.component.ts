import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { DummyService } from '../../../service/dummy.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  awaitData: any;
  observableData: any;
  promiseData: any;
  delayData: any;
  observableLoading: boolean = true;
  awaitLoading: boolean = true;
  promiseLoading: boolean = true;
  delayLoading: boolean = true;

  constructor(private apiService: ApiService, private dummyService: DummyService ) { }

  ngOnInit(): void {
    this.getObservable();
    this.getAwaitSample();
    this.withDelay();
    this.dummyService.getUser();
    this.dummyService.myPromise();
    this.getPromiseSample();
    this.splat(1,'this', 'is', 'a', 'splat');
    this.getObservable2();
  }

  private getObservable() {
    this.apiService.getSample().subscribe(sample => {
      this.observableData = sample;
      this.observableLoading = false;
    })
    console.log('observableData', this.observableData)
  }

  private getObservable2() {
    this.apiService.getSample().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('complete')
      }
    });

    this.apiService.getSample().subscribe(
      (data) => {
        console.log(data)
    },
    (error) => {
      console.log(error)
    },
    () => {
      console.log('complete2')
    }
    );
  }

  private async getAwaitSample() {
    await this.apiService.getAwaitSample().toPromise().then(res => {
      this.awaitData = res
      this.awaitLoading = false;
    });
    console.log('awaitData', this.awaitData)
  }

  private getPromiseSample() {
    this.apiService.getSample().toPromise().then((res) =>{
      this.promiseLoading = false;
      this.promiseData = res;
    })
  }

  // this.splat(1,'this', 'is', 'a', 'splat');
  private splat(req, ...params) {
    console.log(req, params)
  }

  private withDelay() {
    this.apiService.getDelaySample().subscribe(sample => {
      this.delayData = sample;
      console.log('delay', sample);
      this.delayLoading = false;
    }, (err) => {
     this.delayLoading = false;
     console.log(err)
    }
    
    );
  }


}
