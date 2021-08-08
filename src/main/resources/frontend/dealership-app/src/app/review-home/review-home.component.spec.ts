import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHomeComponent } from './review-home.component';
import {FormsModule} from '@angular/forms';

describe('ReviewHomeComponent', () => {
  let component: ReviewHomeComponent;
  let fixture: ComponentFixture<ReviewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewHomeComponent ],
      imports: [
        ReviewHomeComponent,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
