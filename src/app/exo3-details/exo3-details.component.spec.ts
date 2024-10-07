import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3DetailsComponent } from './exo3-details.component';

describe('Exo3DetailsComponent', () => {
  let component: Exo3DetailsComponent;
  let fixture: ComponentFixture<Exo3DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo3DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
