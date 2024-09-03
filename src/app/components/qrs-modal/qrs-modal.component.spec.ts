import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrsModalComponent } from './qrs-modal.component';

describe('QrsModalComponent', () => {
  let component: QrsModalComponent;
  let fixture: ComponentFixture<QrsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
