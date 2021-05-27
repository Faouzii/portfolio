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


    {title : "Full Stack Software Engineer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
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
    
    {title : "Summer Intern", company : "SafeDemat", date : "Sep 2019 - Oct 2020", missions : [
      {name : "Designed, created and implemented solution for migrating JAVA web applications based on Struts2 to Spring boot.", stacks : [
        {name : "Java 8"},
        {name: 'Spring'},
        {name: 'JAX-RS'},
        {name: 'Jersey 2'},
        {name: 'Struts 2'},
        {name: 'JSON'},
      ]},

      {name : "Designed, created and implemented solution for migrating JAVA web applications based on Struts2 to Spring boot.", stacks : [
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

/*
  des RESTful Web Services*
  Oracle

  massives*

  SZ REST
  Java 8, Spring (Boot, MVC, Data), JPA, SQL Server, Maven, Git, JWT, JSON

  App signature
  Java 8, Spring (Boot, MVC, Data), JPA, Jasper Report, MySQL, Maven, Git, JSP, Bootstrap, jQuery

  maintain
  Java 8, Spring, Struts 2, Hibernate, JPA, MySQL, JSP, Bootstrap 4, jQuery, JavaScript, Git

  migration
  Angular 4, Bootstrap 4, SCSS, NPM, Git

  Java 8, Spring, JAX-RS, Jersey 2, Jackson, JSON, Hibernate, JPA, MySQL, JWT

  stage app
  Java 8, Spring boot, Innp Setup, Pascal


  Ana w l'coloc est une application 100% Maroccain, 100% gratuite et sans pubs, qui permet de suivre et gérer les dépenses partagées entre les colocataires, les amis, la famille.. dans le but de faciliter la vie quotidienne.

  Application de developement personelles base sur le principe Task - Reward, qui vous motive a attiendre vos objectives.
  Apres avoir definir votre Reward, et pour chaque tache realise vous gagner des point pour unlocker.

  Contribution Angular : ngx-timeago-pipe-fr
  Une contribution open-source à la communauté Angular qui permet de formater les dates sous format timeago en français : Il y a 3 heures..
  Le package est disponible sur NPM (npm install ngx-timeago-pipe-fr)


  */