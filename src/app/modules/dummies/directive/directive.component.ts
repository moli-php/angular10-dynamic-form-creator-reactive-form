import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  color: string;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Directive')
  }

}
