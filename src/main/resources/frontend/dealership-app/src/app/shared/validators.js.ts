import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function rePasswordValidator(getTargetControl: AbstractControl): ValidatorFn {
  // tslint:disable-next-line:no-shadowed-variable
  return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const areTheSame = getTargetControl.value === control.value;
    return areTheSame ? null : {rePasswordValidator: true};
  };
}
