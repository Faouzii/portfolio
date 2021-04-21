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
    {title : "Full Stack Software Engineer", company : "EURAFRIC Information", date : "Nov 2020 - Current" , missions : [
      {name : "mission 1 name", stacks : [
        {name : "JAVA"},
        {name: 'Angular 8'},
        {name: 'Javascript'},
        {name: 'SCSS'},
      ]},
      {name : "mission 1 name", stacks : [
        {name : "JAVA"},
        {name: 'Angular 8'},
        {name: 'Javascript'},
        {name: 'SCSS'},
      ]}
    ]},

    {title : "Full Stack Software Engineer", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "mission 2 name", stacks : [
        {name : "JAVA"},
        {name: 'PrimeNg'},
        {name: 'Angular Material'},
      ]}
    ]},

    {title : "Full Stack Software Engineer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "mission 2 name", stacks : [
        {name : "JAVA"},
        {name: 'PrimeNg'},
        {name: 'Angular Material'},
      ]}
    ]},
    
    {title : "Summer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
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

  drop(event){
    
  }
}
