import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  awaitData: any;
  observableData: any;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.getSample();
    this.getAwaitSample();
    this.withDelay();
  }

  private getSample() {
    this.apiService.getSample().subscribe(sample => this.observableData = sample)
    console.log('observableData', this.observableData)
  }

  private async getAwaitSample() {
    await this.apiService.getAwaitSample().toPromise().then(res => this.awaitData = res);
    console.log('awaitData', this.awaitData)
  }

  private splat() {
    const NUMS = [1,2,3,4,5,6,{name: 'john'}];
    console.log(...NUMS);
  }

  private withDelay() {
    this.apiService.getDelaySample().subscribe(sample => console.log('delay', sample));
  }



}
