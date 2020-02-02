import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseSectionsComponent } from './ware-house-sections.component';

describe('WareHouseSectionsComponent', () => {
  let component: WareHouseSectionsComponent;
  let fixture: ComponentFixture<WareHouseSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
