import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { Stack } from 'src/app/models/stack';

@Component({
  selector: 'jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor() { }

  @Input() job : Job;

  ngOnInit() {
  }

  jobs : Job [] = [
    {title : "Loeerep", company : "Dsdsdsd", missions : [
      {name : "mission 1 name", stacks : [
        {name : "JAVA"},
        {name: 'Angular 8'},
        {name: 'Javascript'},
        {name: 'SCSS'},
      ]}
    ]},
    {title : "Lossseerep", company : "Dsdsdsd", missions : [
      {name : "mission 2 name", stacks : [
        {name : "JAVA"},
        {name: 'PrimeNg'},
        {name: 'Angular Material'},
      ]}
    ]}
  ];

  vegetables: Stack[] = [
    {name: 'JAVA 8'},
    {name: 'Angular 8'},
    {name: 'Javascript'},
    {name: 'SCSS'},
    {name: 'Angular Material'},
    {name: 'PrimeNg'},
  ];
}
