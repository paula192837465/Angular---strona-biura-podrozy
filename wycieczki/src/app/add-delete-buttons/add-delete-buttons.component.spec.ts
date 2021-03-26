import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteButtonsComponent } from './add-delete-buttons.component';

describe('AddDeleteButtonsComponent', () => {
  let component: AddDeleteButtonsComponent;
  let fixture: ComponentFixture<AddDeleteButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
