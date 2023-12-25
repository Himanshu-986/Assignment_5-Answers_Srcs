import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsCompComponent } from './firts-comp.component';

describe('FirtsCompComponent', () => {
  let component: FirtsCompComponent;
  let fixture: ComponentFixture<FirtsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtsCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirtsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
