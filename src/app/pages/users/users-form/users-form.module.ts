import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UsersFormComponent } from './users-form'
import {GenericFormComponent} from '../../../components/generic-form/generic-form.component';

@NgModule({
  imports: [
    CommonModule,
    UsersFormComponent,
    GenericFormComponent,
  ],
  exports: [
    UsersFormComponent,
  ],
})
export class UsersFormModule {}
