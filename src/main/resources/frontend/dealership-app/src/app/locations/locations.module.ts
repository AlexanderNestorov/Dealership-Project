import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationItemComponent } from './location-item/location-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';



@NgModule({
    declarations: [
        LocationItemComponent
    ],
    exports: [
        LocationItemComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule
  ]
})
export class LocationsModule { }
