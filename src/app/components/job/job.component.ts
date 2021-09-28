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
      {name : "Developed RESTFULL Web Services and back-end APIs for banking applications ", stacks : [
        {name : "Java 8"},
        {name: 'Spring boot'},
        {name: 'Spring MVC'},
        {name: 'Spring Data'},
        {name: 'Maven'},
        {name: 'Git'},
        {name: 'JWT'},
        {name: 'Oracle'}
      ]},
      {name : "Designed and developed front-end applications", stacks : [
        
        {name: 'Angular 8'},
        {name: 'Javascript'},
        {name: 'NPM'},
        {name: 'SCSS'},
        {name : "PrimeNG"},
        {name : "HTML"},
        {name: 'JWT'},
        {name : "Git"}
      ]},
     
      {name : "Developed Java batches for massive data processing", stacks : [
        {name : "Java 8"},
        {name : "Git"}
      ]}
    ]},

    {title : "Full Stack Software Engineer", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "Developed RESTFULL Web Services and back-end APIs.", stacks : [
        {name : "Java 8"},
        {name: 'Spring Boot'},
        {name: 'Spring MVC'},
        {name: 'Spring Data'},
        {name: 'JPA'},
        {name: 'SQL Server'},
        {name: 'Maven'},
        {name: 'JWT'},
        {name: 'Git'},
        {name: 'JSON'},
      ]},


      {name : "Developed web applications from scratch.", stacks : [
        {name : "Java 8"},
        {name: 'Spring Boot'},
        {name: 'Spring MVC'},
        {name: 'Spring Data'},
        {name: 'JPA'},
        {name: 'Jasper Reports'},
        {name: 'MySQL'},
        {name: 'Maven'},
        {name: 'Git'},
        {name: 'JSP'},
        {name: 'Bootstrap'},
        {name: 'jQuery'},
      ]},
      {name : "Maintained existing applications to correct bugs, improuve performance and add new features.", stacks : [
        {name: "Java 8"},
        {name: 'Spring'},
        {name: 'Struts 2'},
        {name: 'Hibernate'},
        {name: 'JPA'},
        {name: 'MySQL'},
        {name: 'JSP'},
        {name: 'Bootstrap 4'},
        {name: 'jQuery'},
        {name: 'Javascript'},
        {name: 'Git'},
      ]}
    ]},


    {title : "Full Stack Software Engineer Intern", company : "SafeDemat", date : "Feb 2019 - Jul 2020", missions : [
      {name : "Developed Front-end and migrated an existing application from Struts 2 to Angular 2+ ", stacks : [
        {name : "Angular 4"},
        {name : "Boostrap 4"},
        {name : "SCSS"},
        {name : "NPM"},
        {name : "Git"},
      ]}
      ,
      {name : "Developed Backend REST API ", stacks : [
        {name : "Java 8"},
        {name : "Spring"},
        {name : "JAX-RS"},
        {name : "Jersey 2"},
        {name : "Jackson"},
        {name : "JSON"},
        {name : "Hibernate"},
        {name : "JPA"},
        {name : "MySQL"},
        {name : "JWT"},
      ]},
      
    ]},
    
    {title : "Summer Intern", company : "SafeDemat", date : "Jul 2018 - Aug 2018", missions : [
      {name : "Designed, created and implemented solution for migrating JAVA web applications based on Struts2 to Spring boot.", stacks : [
        {name : "Java 8"},
        {name: 'Spring'},
        {name: 'JAX-RS'},
        {name: 'Jersey 2'},
        {name: 'Struts 2'},
        {name: 'JSON'},
      ]},

      {name : "Created installable MS Windows service for automatic syncronization between client and remote server applications.", stacks : [
        {name : "Java 8"},
        {name: 'Spring boot'},
        {name: 'Inno Setup'},
        {name: 'Pascal'}

      ]}

    ]}
  ];

  drop(event){
    
  }
}
