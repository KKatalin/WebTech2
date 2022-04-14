import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KertTermSzerkKomponens } from './KertTerm-Szerk.komponens';

describe('KertTermSzerkKomponens', () => {
  let component: KertTermSzerkKomponens;
  let fixture: ComponentFixture<KertTermSzerkKomponens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KertTermSzerkKomponens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KertTermSzerkKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
