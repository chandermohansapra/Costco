import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHouseLocationComponent } from './ware-house-location.component';

describe('WareHouseLocationComponent', () => {
  let component: WareHouseLocationComponent;
  let fixture: ComponentFixture<WareHouseLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHouseLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHouseLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
