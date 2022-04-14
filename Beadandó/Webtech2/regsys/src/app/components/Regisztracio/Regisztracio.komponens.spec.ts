import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisztracioKomponens } from './Regisztracio.komponens';

describe('RegisztracioKomponens', () => {
  let component: RegisztracioKomponens;
  let fixture: ComponentFixture<RegisztracioKomponens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisztracioKomponens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisztracioKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
