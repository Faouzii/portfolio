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
    {title : "Full Stack Software Engineer", company : "EURAFRIC Information - Bank of africa", date : "Nov 2020 - Current" , missions : [
      {name : "Etudes et développement des RESTful Web Service et des back-end APIs (Secteur Bancaire) ", stacks : [
        {name : "JAVA 8"},
        {name: 'Spring (core, boot, MVC, Data)'},
        {name: 'Maven'},
        {name: 'Git'},
        {name: 'JWT'},
        {name: 'SQL Server'}
      ]},
      {name : "Conception et développement de la partie front-end", stacks : [
        
        {name: 'Angular 8'},
        {name: 'Javascript'},
        {name: 'NPM'},
        {name: 'SCSS'},
        {name : "PrimeNG"},
        {name : "HTML"},
        {name: 'JWT'},
        {name : "Git"}
      ]},
     
      {name : "Développement des batches JAVA pour traitement des données massive ", stacks : [
        {name : "JAVA 8"},
        {name : "Git"}
      ]}
    ]},

    {title : "Full Stack Software Engineer", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "Developed RESTFULL Web Services and back-end APIs.", stacks : [
        {name : "JAVA 8"},
        {name: 'Spring boot'},
        {name: 'Maven'},
        {name: 'JWT'},
        {name: 'MS SQL Server'},
      ]},

      {name : "Developed web applications from scratch.", stacks : [
        {name : "JAVA 8"},
        {name: 'Spring'},
        {name: 'Jasper Reports'},
        {name: 'MySQL'},
        {name: 'JSP'},
        {name: 'Bootstrap'},
        {name: 'jQuery'},
      ]},
      {name : "Maintained existing applications to correct bugs, improuve performance and add new features.", stacks : [
        {name: "JAVA 8"},
        {name: 'Spring'},
        {name: 'Struts 2'},
        {name: 'MySQL'},
        {name: 'Bootstrap'},
        {name: 'jQuery'},
      ]}
    ]},

    {title : "Full Stack Software Engineer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "Developed Backend REST API ", stacks : [
        {name : "JAVA"},
      ]},
      {name : "Developed Front-end and migrated an existing application from Struts 2 to Angular 2+ ", stacks : [
        {name : "Angular"},
      ]}
    ]},
    
    {title : "Summer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "Designed, created and implemented solution for migrating JAVA web applications based on Struts2 to Spring boot.", stacks : [
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


//Etudes et développement des RESTful Web Service et des back-end APIs
//Conception et développement from scratch des applications web Java (Signature éléctornique) 