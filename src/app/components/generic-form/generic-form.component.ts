import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import {FormGroup, ReactiveFormsModule} from '@angular/forms'
import { GenericFormConfig } from '../../models/generic-form.model'

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './generic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GenericFormComponent {
  @Input({ required: true }) public formGroup!: FormGroup
  @Input({ required: true }) public config!: GenericFormConfig
  public trackByFormControlName(index: number, field:{ formControlName: string }): string {
    return field.formControlName
  };
}
