import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoreComponent } from './list-more.component';

describe('ListMoreComponent', () => {
  let component: ListMoreComponent;
  let fixture: ComponentFixture<ListMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
