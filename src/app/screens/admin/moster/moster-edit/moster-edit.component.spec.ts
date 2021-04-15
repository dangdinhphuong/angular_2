import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosterEditComponent } from './moster-edit.component';

describe('MosterEditComponent', () => {
  let component: MosterEditComponent;
  let fixture: ComponentFixture<MosterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
