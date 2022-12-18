import { AbstractControl } from '@angular/forms';

export function lengthValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (
    control.value == undefined ||
    (control.value !== undefined && control.value.length > 25)
  ) {
    return { notValidLength: true };
  }
  return null;
}
