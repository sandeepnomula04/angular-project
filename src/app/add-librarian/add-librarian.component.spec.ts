import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibrarianComponent } from './add-librarian.component';

describe('AddLibrarianComponent', () => {
  let component: AddLibrarianComponent;
  let fixture: ComponentFixture<AddLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLibrarianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
