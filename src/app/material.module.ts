import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
    imports: [
        MatIconModule ,
        MatButtonModule ,
         MatFormFieldModule ,
          MatInputModule,
          MatDatepickerModule,
          MatNativeDateModule
        ] ,

    providers: [MatIconModule,
         MatButtonModule ,
          MatFormFieldModule ,
           MatInputModule,
           MatDatepickerModule,
           MatNativeDateModule
        ] // and the exports
})
export class MaterialModule { }
