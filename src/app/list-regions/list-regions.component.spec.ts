import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegionsComponent } from './list-regions.component';

describe('ListRegionsComponent', () => {
  let component: ListRegionsComponent;
  let fixture: ComponentFixture<ListRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRegionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
