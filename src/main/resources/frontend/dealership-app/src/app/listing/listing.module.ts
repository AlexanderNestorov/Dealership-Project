import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHomeComponent } from './listing-home/listing-home.component';
import { ListingAllComponent } from './listing-all/listing-all.component';
import { ListingItemComponent } from './listing-item/listing-item.component';
import {CoreModule} from '../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [
        ListingHomeComponent,
        ListingAllComponent,
        ListingItemComponent,
        ListingDetailsComponent
    ],
    exports: [
        ListingHomeComponent,
        ListingItemComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ]
})
export class ListingModule { }
