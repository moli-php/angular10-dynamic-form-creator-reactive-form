import { Component, OnInit, OnDestroy, Self, SkipSelf } from '@angular/core';
import { DummyService } from '../../service/dummy.service';
import { BrowserStorageService, BROWSER_STORAGE } from 'src/app/service/browser-storage.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Child1Component } from '../parent-child/child1/child1.component';

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
  @SkipSelf() private localStorageService: BrowserStorageService,
  private titleService: Title, private router: Router,
  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.loopLimit(-1);
    this.sessionStorageService.set('session', 'session storage')
    this.localStorageService.set('local', 'local storage')
    console.log(this.sessionStorageService.get('session'))
    console.log(this.localStorageService.get('local'))

    // dynamic page title
    const title = this.titleService.getTitle();
    console.log(title);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        let a = this.activatedRoute.children;
        console.log(a)
        // console.log(child)
        // console.log(child.snapshot.data['title'])
        // if (child.snapshot.data['title']) {
        //   return child.snapshot.data['title'];
        // }
        return title;
      })
    ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl)
    });

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
