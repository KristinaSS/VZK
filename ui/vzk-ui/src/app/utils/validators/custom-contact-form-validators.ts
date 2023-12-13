import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function firstLetterUppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value as string;

    if (value && value.length >= 3) {
      const firstLetter = value.charAt(0);
      if (firstLetter !== firstLetter.toUpperCase()) {
        return { firstLetterUppercase: true };
      }
    }
    return null;
  };
}

// Custom URL validator function
export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      // If the control value is empty, consider it valid
      return null;
    }

    // Regular expression for a simple URL validation
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    // Check if the control value matches the URL pattern
    const isValid = urlPattern.test(control.value);

    // If the value is valid, return null; otherwise, return a validation error
    return isValid ? null : {invalidUrl: true};
  };
}

export function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      // If the control has no value, consider it valid (you can adjust this according to your needs)
      return null;
    }

    const birthDate = new Date(control.value);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      // Subtract 1 from age if the birthdate hasn't occurred yet this year
      return age - 1 < minAge ? { 'minAge': true } : null;
    }

    return age < minAge ? { 'minAge': true } : null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,45}$/;

    if (!control.value) {
      return null; // If the control is empty, don't perform validation
    }

    return passwordRegex.test(control.value) ? null : { invalidPassword: true };
  };
}
