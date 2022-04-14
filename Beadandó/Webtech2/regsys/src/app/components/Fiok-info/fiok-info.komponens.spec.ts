import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiokInfoKomponens } from './fiok-info.komponens';

describe('FiokInfoKomponens', () => {
  let component: FiokInfoKomponens;
  let fixture: ComponentFixture<FiokInfoKomponens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiokInfoKomponens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiokInfoKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
