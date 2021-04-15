import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCliComponent } from './layout-cli.component';

describe('LayoutCliComponent', () => {
  let component: LayoutCliComponent;
  let fixture: ComponentFixture<LayoutCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
