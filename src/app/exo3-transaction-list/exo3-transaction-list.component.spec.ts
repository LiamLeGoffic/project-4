import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3TransactionListComponent } from './exo3-transaction-list.component';

describe('Exo3TransactionListComponent', () => {
  let component: Exo3TransactionListComponent;
  let fixture: ComponentFixture<Exo3TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo3TransactionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo3TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
