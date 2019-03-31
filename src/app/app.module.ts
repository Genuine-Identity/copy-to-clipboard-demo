import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormArray, FormGroup, FormControl, Validators, } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SkillService } from './skill.service';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TreeviewModule.forRoot(),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    SkillService
  ]
})
export class AppModule { }