import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KertTermListaKomopnens } from './KertTerm-Lista.komponens';

describe('KertTermListaKomopnens', () => {
  let component: KertTermListaKomopnens;
  let fixture: ComponentFixture<KertTermListaKomopnens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KertTermListaKomopnens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KertTermListaKomopnens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
