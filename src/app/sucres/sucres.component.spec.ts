import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucresComponent } from './sucres.component';

describe('SucresComponent', () => {
  let component: SucresComponent;
  let fixture: ComponentFixture<SucresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
