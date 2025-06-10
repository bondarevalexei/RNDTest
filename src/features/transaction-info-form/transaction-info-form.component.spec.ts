import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInfoFormComponent } from './transaction-info-form.component';

describe('TransactionInfoFormComponent', () => {
  let component: TransactionInfoFormComponent;
  let fixture: ComponentFixture<TransactionInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
