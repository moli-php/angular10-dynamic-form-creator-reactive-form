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
  observableLoading: string = 'loading observable...';
  awaitLoading: string = 'loading asycn await...';
  promiseLoading: string = 'loading promise...';


  constructor(private apiService: ApiService, private dummyService: DummyService ) { }

  ngOnInit(): void {
    this.getObservable();
    this.getAwaitSample();
    this.withDelay();
    this.dummyService.getUser();
    this.dummyService.myPromise();
    this.getPromiseSample();
    this.splat(1,'this', 'is', 'a', 'splat');
  }

  private getObservable() {
    this.apiService.getSample().subscribe(sample => {
      this.observableData = sample;
      this.observableLoading = '';
    })
    console.log('observableData', this.observableData)
  }

  private async getAwaitSample() {
    await this.apiService.getAwaitSample().toPromise().then(res => {
      this.awaitData = res
      this.awaitLoading = '';
    });
    console.log('awaitData', this.awaitData)
  }

  private getPromiseSample() {
    this.apiService.getSample().toPromise().then((res) =>{
      this.promiseLoading = '';
      this.promiseData = res;
    })
  }

  private splat(req, ...params) {
    console.log(req, params)
  }

  private withDelay() {
    this.apiService.getDelaySample().subscribe(sample => console.log('delay', sample));
  }





}
