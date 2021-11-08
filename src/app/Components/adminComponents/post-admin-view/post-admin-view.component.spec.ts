import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminViewComponent } from './post-admin-view.component';

describe('PostAdminViewComponent', () => {
  let component: PostAdminViewComponent;
  let fixture: ComponentFixture<PostAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
