import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHomeComponent } from './listing-home/listing-home.component';
import { ListingAllComponent } from './listing-all/listing-all.component';
import { ListingItemComponent } from './listing-item/listing-item.component';
import {CoreModule} from '../core/core.module';



@NgModule({
    declarations: [
        ListingHomeComponent,
        ListingAllComponent,
        ListingItemComponent
    ],
    exports: [
        ListingHomeComponent
    ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ListingModule { }
