import { Component, OnInit, OnDestroy, Self, SkipSelf } from '@angular/core';
import { DummyService } from '../../service/dummy.service';
import { BrowserStorageService, BROWSER_STORAGE } from 'src/app/service/browser-storage.service';

@Component({
  selector: 'app-dummies',
  templateUrl: './dummies.component.html',
  styleUrls: ['./dummies.component.css'],
  providers: [
    BrowserStorageService,
    { provide: BROWSER_STORAGE, useFactory: () => sessionStorage }
  ]
})
export class DummiesComponent implements OnInit, OnDestroy {
  timer: any;


  constructor(
  @Self() private sessionStorageService: BrowserStorageService,
  @SkipSelf() private localStorageService: BrowserStorageService
  ) { }

  ngOnInit(): void {
    // this.loopLimit(-1);
    this.sessionStorageService.set('session', 'session starage')
    this.localStorageService.set('local', 'local storage')
    console.log(this.sessionStorageService.get('session'))
  }

  ngOnDestroy(): void  {
    // clearInterval(this.timer);
    if (this.sessionStorageService.get('session')) {
      this.sessionStorageService.removeItem('session');
    }
    if (this.localStorageService.get('local')) {
      this.localStorageService.removeItem('local');
    }
  }

  loopLimit(numberStart: number) {
    this.timer = window.setInterval(() => {
      numberStart = (numberStart + 1) % 10;
      console.log(numberStart);
    },1000);
  }

}
