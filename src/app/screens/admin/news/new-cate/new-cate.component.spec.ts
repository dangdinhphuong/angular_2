import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCateComponent } from './new-cate.component';

describe('NewCateComponent', () => {
  let component: NewCateComponent;
  let fixture: ComponentFixture<NewCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
