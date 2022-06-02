import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRivalesComponent } from './listado-rivales.component';

describe('ListadoRivalesComponent', () => {
  let component: ListadoRivalesComponent;
  let fixture: ComponentFixture<ListadoRivalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRivalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRivalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
