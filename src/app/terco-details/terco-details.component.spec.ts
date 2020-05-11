import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoDetailsComponent } from './terco-details.component';

describe('TercoDetailsComponent', () => {
  let component: TercoDetailsComponent;
  let fixture: ComponentFixture<TercoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
