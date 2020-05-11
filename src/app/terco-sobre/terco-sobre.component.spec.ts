import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoSobreComponent } from './terco-sobre.component';

describe('TercoSobreComponent', () => {
  let component: TercoSobreComponent;
  let fixture: ComponentFixture<TercoSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercoSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
