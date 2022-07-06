import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlUserComponent } from './listl-user.component';

describe('ListlUserComponent', () => {
  let component: ListlUserComponent;
  let fixture: ComponentFixture<ListlUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
