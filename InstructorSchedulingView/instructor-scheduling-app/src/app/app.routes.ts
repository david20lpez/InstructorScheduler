import { Routes } from '@angular/router';
import { InstructorListComponent } from './instructor/instructor-list/instructor-list.component';
import { InstructorCreateComponent } from './instructor/instructor-create/instructor-create.component';
import { InstructorUpdateComponent } from './instructor/instructor-update/instructor-update.component';
import { InstructorDetailComponent } from './instructor/instructor-detail/instructor-detail.component';
import { TrainerEventListComponent } from './event/event-list/event-list.component';
import { TrainerEventDetailComponent } from './event/event-detail/event-detail.component';
import { TrainerEventUpdateComponent } from './event/event-update/event-update.component';
import { TrainerEventCreateComponent } from './event/event-create/event-create.component';
import { AdministrationComponent } from './administration/administration.component';

export const routes: Routes = [
    { path: '', redirectTo: '/instructors', pathMatch: 'full' },
    { path: 'instructors', component: InstructorListComponent },
    { path: 'instructors/create', component: InstructorCreateComponent },
    { path: 'instructors/update/:id', component: InstructorUpdateComponent },
    { path: 'instructors/:id', component: InstructorDetailComponent},
    { path: 'events', component: TrainerEventListComponent },
    { path: 'events/:id', component: TrainerEventDetailComponent },
    { path: 'eventss/create', component: TrainerEventCreateComponent },
    { path: 'events/update/:id', component: TrainerEventUpdateComponent},
    { path: 'administration', component: AdministrationComponent }
];
