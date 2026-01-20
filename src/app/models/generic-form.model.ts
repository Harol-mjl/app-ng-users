import {GenericInputType} from './generic-form.enums';

export interface GenericFormField {
  formControlName: string
  label: string
  type: GenericInputType
}

export type GenericFormConfig = GenericFormField[]
