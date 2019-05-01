import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientpocComponent } from './create-clientpoc.component';

describe('CreateClientpocComponent', () => {
  let component: CreateClientpocComponent;
  let fixture: ComponentFixture<CreateClientpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClientpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClientpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
