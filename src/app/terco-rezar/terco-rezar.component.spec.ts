import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoRezarComponent } from './terco-rezar.component';

describe('TercoRezarComponent', () => {
  let component: TercoRezarComponent;
  let fixture: ComponentFixture<TercoRezarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercoRezarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoRezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
