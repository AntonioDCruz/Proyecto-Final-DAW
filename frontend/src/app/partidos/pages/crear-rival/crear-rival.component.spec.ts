import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRivalComponent } from './crear-rival.component';

describe('CrearRivalComponent', () => {
  let component: CrearRivalComponent;
  let fixture: ComponentFixture<CrearRivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
