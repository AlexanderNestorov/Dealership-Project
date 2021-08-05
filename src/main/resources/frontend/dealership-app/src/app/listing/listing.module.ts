import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHomeComponent } from './listing-home/listing-home.component';



@NgModule({
    declarations: [
        ListingHomeComponent
    ],
    exports: [
        ListingHomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ListingModule { }
