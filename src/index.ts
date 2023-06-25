export class ValidateKit {
  // Validate email address
  static validateEmail(email: string): boolean {
    // Email validation logic
    // Example: Email must be in the format "username@domain.extension"
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number
  static validatePhoneNumber(phoneNumber: string): boolean {
    // Phone number validation logic
    // Example: Phone number must be a 10 to 15 digit number
    const phoneRegex: RegExp = /^\d{10,15}$/; // Allows 10 to 15 digit phone number
    return phoneRegex.test(phoneNumber);
  }

  // Validate URL
  static validateURL(url: string): boolean {
    // URL validation logic
    // Example: URL must be in the format "http(s)://domain.extension" with optional port and path
    const urlRegex: RegExp =
      /^(https?:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63})(:[0-9]{2,5})?(\/.*)?$/i;
    return urlRegex.test(url);
  }

  static validateUsername(username: string): boolean {
    // Username validation logic
    // Example: Username must be alphanumeric and between 3 and 20 characters long
    const usernameRegex: RegExp = /^[a-zA-Z0-9]{3,20}$/;
    return usernameRegex.test(username);
  }

  static validatePassword(password: string): boolean {
    // Password validation logic
    // Example: Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one symbol
    const passwordRegex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordRegex.test(password);
  }

  static validateConfirmPassword(
    password: string,
    confirmPassword: string
  ): boolean {
    // Confirm password validation logic
    return password === confirmPassword;
  }

  static validateDateOfBirth(dateOfBirth: string): boolean {
    // Date of birth validation logic
    // Example: Date of birth must be in the format "YYYY-MM-DD" and represent a valid date
    const dateRegex: RegExp = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(dateOfBirth)) {
      return false;
    }

    const [year, month, day]: string[] = dateOfBirth.split("-");

    const parsedDate: Date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );

    // Check if the parsed date is a valid date
    return !isNaN(parsedDate.getTime());
  }

  static validateCreditCardNumber(creditCardNumber: string): boolean {
    // Credit card number validation logic
    // Example: Credit card number must be a valid Luhn algorithm checksum
    const sanitizedNumber: string = creditCardNumber.replace(/\D/g, "");

    if (!sanitizedNumber.length || sanitizedNumber.length < 12) {
      return false;
    }

    let sum: number = 0;

    let double: boolean = false;

    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit: number = parseInt(sanitizedNumber.charAt(i), 10);

      if (double) {
        digit *= 2;

        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;

      double = !double;
    }

    return sum % 10 === 0;
  }

  static validatePostalCode(postalCode: string): boolean {
    // Postal code validation logic
    // Example: Postal code must be a valid 5-digit or 9-digit US ZIP code
    const postalCodeRegex: RegExp = /^\d{5}(?:[-\s]\d{4})?$/;
    return postalCodeRegex.test(postalCode);
  }

  static validateSocialSecurityNumber(ssn: string): boolean {
    // Social security number validation logic
    // Example: Social security number must be a valid 9-digit number
    const ssnRegex: RegExp = /^\d{9}$/;
    return ssnRegex.test(ssn);
  }

  // Validate custom rule
  static validateCustomRule(
    value: any,
    rule: (value: any) => boolean
  ): boolean {
    // Custom validation logic
    return rule(value);
  }
}
