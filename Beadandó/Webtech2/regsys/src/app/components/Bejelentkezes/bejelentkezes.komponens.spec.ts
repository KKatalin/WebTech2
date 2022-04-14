import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BejelentkezesKomponens } from './bejelentkezes.komponens';

describe('BejelentkezesKomponens', () => {
  let component: BejelentkezesKomponens;
  let fixture: ComponentFixture<BejelentkezesKomponens>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BejelentkezesKomponens ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BejelentkezesKomponens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
