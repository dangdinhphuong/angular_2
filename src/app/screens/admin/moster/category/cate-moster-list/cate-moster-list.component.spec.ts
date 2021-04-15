import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateMosterListComponent } from './cate-moster-list.component';

describe('CateMosterListComponent', () => {
  let component: CateMosterListComponent;
  let fixture: ComponentFixture<CateMosterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateMosterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateMosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
