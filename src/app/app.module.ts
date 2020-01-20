import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TabComponent } from './tab/tab.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { MetadataComponent } from './metadata/metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TabComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    MetadataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
