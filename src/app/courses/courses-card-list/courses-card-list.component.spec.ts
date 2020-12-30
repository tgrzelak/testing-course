import { CoursesCardListComponent } from './courses-card-list.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CoursesModule } from './../courses.module';

describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent,
      fixture: ComponentFixture<CoursesCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create the component', () => {

    expect(component).toBeTruthy();

  });


  it('should display the course list', () => {

    pending();

  });


  it('should display the first course', () => {

      pending();

  });


});


