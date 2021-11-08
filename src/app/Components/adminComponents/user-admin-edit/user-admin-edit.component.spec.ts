import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminEditComponent } from './user-admin-edit.component';

describe('UserAdminEditComponent', () => {
  let component: UserAdminEditComponent;
  let fixture: ComponentFixture<UserAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
