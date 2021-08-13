import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /^[a-zA-Z0-9\.-]{4,}@(gmail|abv|yahoo|outlook|mail|email)\.(bg|com)$/.test(control.value) ? null : {
    invalidEmail: true
  };
}

export function rePasswordValidator(getTargetControl: AbstractControl): ValidatorFn {
  // tslint:disable-next-line:no-shadowed-variable
  return function rePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const areTheSame = getTargetControl.value === control.value;
    return areTheSame ? null : {rePasswordValidator: true};
  };
}

export function drivetrainValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /(AWD|RWD|FWD)$/.test(control.value) ? null : {
    invalidDrivetrain: true
  };
}

export function transmissionValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /(Automatic|Manual)$/.test(control.value) ? null : {
    invalidTransmission: true
  };
}

export function fuelTypeValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /(Petrol|Diesel|Hybrid)$/.test(control.value) ? null : {
    invalidFuelType: true
  };
}

export function carTypeValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  return /(SUV|Sedan|Hatchback|Coupe|Truck|Smart)$/.test(control.value) ? null : {
    invalidType: true
  };
}
