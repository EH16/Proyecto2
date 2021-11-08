import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminPostComponent } from './user-admin-post.component';

describe('UserAdminPostComponent', () => {
  let component: UserAdminPostComponent;
  let fixture: ComponentFixture<UserAdminPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
