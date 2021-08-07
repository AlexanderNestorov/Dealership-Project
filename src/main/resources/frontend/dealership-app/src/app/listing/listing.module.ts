import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHomeComponent } from './listing-home/listing-home.component';
import { ListingAllComponent } from './listing-all/listing-all.component';
import { ListingItemComponent } from './listing-item/listing-item.component';
import {CoreModule} from '../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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
        CoreModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ListingModule { }
