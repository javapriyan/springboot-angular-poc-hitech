import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNumberComponent } from './service-number.component';

describe('ServiceNumberComponent', () => {
  let component: ServiceNumberComponent;
  let fixture: ComponentFixture<ServiceNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
