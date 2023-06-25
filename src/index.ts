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
}
