import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosterListComponent } from './moster-list.component';

describe('MosterListComponent', () => {
  let component: MosterListComponent;
  let fixture: ComponentFixture<MosterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
