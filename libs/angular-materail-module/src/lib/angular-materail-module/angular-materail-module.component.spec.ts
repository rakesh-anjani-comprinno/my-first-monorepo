import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterailModuleComponent } from './angular-materail-module.component';

describe('AngularMaterailModuleComponent', () => {
  let component: AngularMaterailModuleComponent;
  let fixture: ComponentFixture<AngularMaterailModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterailModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularMaterailModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
