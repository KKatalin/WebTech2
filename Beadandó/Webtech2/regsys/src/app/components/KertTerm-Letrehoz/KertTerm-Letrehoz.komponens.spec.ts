import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KertTermLetrehozKomponens } from './KertTerm-Letrehoz.komponens';

describe('KertTermLetrehozKomponens', () => {
  let component: KertTermLetrehozKomponens;
  let fixture: ComponentFixture<KertTermLetrehozKomponens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KertTermLetrehozKomponens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KertTermLetrehozKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
