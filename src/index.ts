export class ValidateKit {
  // validation.js

  // Validate email address
  static validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number
  static validatePhoneNumber(phoneNumber: string): boolean {
    const phoneRegex: RegExp = /^\d{10,15}$/; // Allows 10 to 15 digit phone number
    return phoneRegex.test(phoneNumber);
  }

  // Validate URL
  static validateURL(url: string): boolean {
    const urlRegex: RegExp =
      /^(https?:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,63})(:[0-9]{2,5})?(\/.*)?$/i;
    return urlRegex.test(url);
  }
}
