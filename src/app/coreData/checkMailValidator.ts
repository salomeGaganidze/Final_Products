import { AbstractControl } from '@angular/forms';
import { CheckMail } from './checkFuncs';

export function mailValid(control: AbstractControl): {
  [key: string]: boolean;
} {
  if (
    control.value !== undefined &&
    control.value !== null &&
    CheckMail(control.value) == true
  )
    return { mailValid: false };
  else return { mailValid: true };
}
