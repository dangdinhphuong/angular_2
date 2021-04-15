import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosterAddComponent } from './moster-add.component';

describe('MosterAddComponent', () => {
  let component: MosterAddComponent;
  let fixture: ComponentFixture<MosterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
