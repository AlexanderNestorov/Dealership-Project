import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewItemComponent } from './review-item/review-item.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ReviewItemComponent
  ],
  exports: [
    ReviewItemComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ReviewsModule { }
