import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

import {GenericFormComponent} from '../../../components/generic-form/generic-form.component'
import {GenericFormConfig} from '../../../models/generic-form.model';
import {GenericInputType} from '../../../models/generic-form.enums';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GenericFormComponent],
  templateUrl: './users-form.html',
  styleUrls: ['./users-form.sass'],
})
export class UsersFormComponent {
  public formGroup: FormGroup

  public formConfig: GenericFormConfig = [
    {
      formControlName: 'userName',
      label: 'UserName',
      type: GenericInputType.INPUT,
    },
    {
      formControlName: 'userEmail',
      label: 'UserEmail',
      type: GenericInputType.INPUT,
    },
    {
      formControlName: 'userPassword',
      label: 'UserPassword',
      type: GenericInputType.INPUT,
    }
  ]
  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', Validators.required, Validators.email],
      userPassword: ['', Validators.required],
    })
  }
  public submitUserForm(): void {
    console.log(this.formGroup.getRawValue())
  }
}
