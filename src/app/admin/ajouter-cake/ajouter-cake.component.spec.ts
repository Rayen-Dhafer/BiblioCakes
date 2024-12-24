import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCakeComponent } from './ajouter-cake.component';

describe('AjouterCakeComponent', () => {
  let component: AjouterCakeComponent;
  let fixture: ComponentFixture<AjouterCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
