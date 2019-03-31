import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MultiSelectComponent } from './component/multi-select/multi-select.component';
import { MultiSelectDropDownComponent } from './component/multi-select-dropdown/multi-select-dropdown.component';
import { SimpleComponent } from './component/simple/simple.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [
    MultiSelectComponent,
    MultiSelectDropDownComponent,
    SimpleComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: MultiSelectComponent },
      { path: 'multi-select', component: MultiSelectComponent },
      { path: 'multi-select-dropdown', component: MultiSelectDropDownComponent },
      { path: 'simple', component: SimpleComponent },
      { path: '**', redirectTo: 'MultiSelectComponent' }
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TreeviewModule.forRoot(),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }