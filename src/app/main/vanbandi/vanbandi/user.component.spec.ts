import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandiComponent } from './vanbandi.component';

describe('VanbandiComponent', () => {
  let component: VanbandiComponent;
  let fixture: ComponentFixture<VanbandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
