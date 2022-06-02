import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUserComponent } from './ver-user.component';

describe('VerUserComponent', () => {
  let component: VerUserComponent;
  let fixture: ComponentFixture<VerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
