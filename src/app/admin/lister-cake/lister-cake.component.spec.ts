import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCakeComponent } from './lister-cake.component';

describe('ListerCakeComponent', () => {
  let component: ListerCakeComponent;
  let fixture: ComponentFixture<ListerCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
