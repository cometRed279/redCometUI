import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubDomainComponent } from './create-sub-domain.component';

describe('CreateSubDomainComponent', () => {
  let component: CreateSubDomainComponent;
  let fixture: ComponentFixture<CreateSubDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
