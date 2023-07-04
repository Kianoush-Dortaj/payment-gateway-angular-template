import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import { TranslateModule } from '@ngx-translate/core'; */
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  imports: [
    /* TranslateModule.forChild(), */
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ],
 
  exports: [
    MaterialModule,

  ],
 
  declarations: [
    
  ]
})
export class SharedModule { }
