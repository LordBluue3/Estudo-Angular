import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCurseComponent } from './detail-curse.component';

describe('DetailCurseComponent', () => {
  let component: DetailCurseComponent;
  let fixture: ComponentFixture<DetailCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCurseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
