import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeLogHomeComponent } from './home/TimeLog-home.component';
import { TimeLogNewComponent } from './new/TimeLog-new.component';
import { TimeLogDetailComponent } from './detail/TimeLog-detail.component';

const routes: Routes = [
  {path: '', component: TimeLogHomeComponent},
  { path: 'new', component: TimeLogNewComponent },
  { path: ':id', component: TimeLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TimeLog-detail-permissions'
      }
    }
  }
];

export const TIMELOG_MODULE_DECLARATIONS = [
    TimeLogHomeComponent,
    TimeLogNewComponent,
    TimeLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeLogRoutingModule { }