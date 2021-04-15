import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboarchComponent } from './dasboarch.component';

describe('DasboarchComponent', () => {
  let component: DasboarchComponent;
  let fixture: ComponentFixture<DasboarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
