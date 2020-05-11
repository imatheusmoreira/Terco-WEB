import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoHomeComponent } from './terco-home.component';

describe('TercoHomeComponent', () => {
  let component: TercoHomeComponent;
  let fixture: ComponentFixture<TercoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
