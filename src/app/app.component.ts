import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor( private titleService: Title, private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

       // dynamic page title (not working)
   const title = this.titleService.getTitle();
   console.log(title);
   this.router.events.pipe(
     filter(event => event instanceof NavigationEnd),
     map(() => {
       const child = this.activatedRoute.firstChild;
       let a = this.activatedRoute;
       console.log(a.children)
       console.log(a.data)
       console.log(a.parent)
       console.log(child)
       console.log(child.snapshot.data['title'])
       if (child.snapshot.data['title']) {
         return child.snapshot.data['title'];
       }
       return title;
     })
   ).subscribe((ttl: string) => {
     console.log(ttl)
       this.titleService.setTitle(ttl)
   });

  }



}
