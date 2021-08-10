import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationItemComponent } from './location-item/location-item.component';



@NgModule({
    declarations: [
        LocationItemComponent
    ],
    exports: [
        LocationItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LocationsModule { }
