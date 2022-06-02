import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFinanzaComponent } from './crear-finanza.component';

describe('CrearFinanzaComponent', () => {
  let component: CrearFinanzaComponent;
  let fixture: ComponentFixture<CrearFinanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFinanzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFinanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
