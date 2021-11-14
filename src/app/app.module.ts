import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { DbsComponent } from './projects/dbs/dbs.component';
import { ChryslerComponent } from './projects/chrysler/chrysler.component';
import { PiquantRestroComponent } from './projects/piquant-restro/piquant-restro.component';
import { SkillsComponent } from './about/skills/skills.component';
import { PersonalInfoComponent } from './about/personal-info/personal-info.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    DbsComponent,
    ChryslerComponent,
    PiquantRestroComponent,
    SkillsComponent,
    PersonalInfoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
