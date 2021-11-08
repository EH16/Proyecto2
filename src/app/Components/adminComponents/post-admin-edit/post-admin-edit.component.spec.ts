import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminEditComponent } from './post-admin-edit.component';

describe('PostAdminEditComponent', () => {
  let component: PostAdminEditComponent;
  let fixture: ComponentFixture<PostAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
