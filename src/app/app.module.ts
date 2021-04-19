import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatGridTile, MatIconModule, MatInputModule, MatLabel, MatSidenavModule, MatSliderModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { JobComponent } from './components/job/job.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ProjectsComponent,
    SkillsComponent,
    ContributionsComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatChipsModule,
    DragDropModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule
  
  ],
  providers: [
    FormBuilder, 
  
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }
  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
