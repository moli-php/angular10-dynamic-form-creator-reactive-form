import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { ApiResolverService } from './api-resolver.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-resolver',
  templateUrl: './route-resolver.component.html',
  styleUrls: ['./route-resolver.component.css']
})
export class RouteResolverComponent implements OnInit {
  contents: any = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(res => {
      console.log(res);
      this.contents = res.data.contents;
    })
  }

}
