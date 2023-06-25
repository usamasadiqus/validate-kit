# ValidateKit

ValidateKit is a utility class that provides various validation functions for common data types. These functions can be used to validate inputs such as email addresses, phone numbers, URLs, usernames, passwords, dates of birth, credit card numbers, postal codes, social security numbers, and even custom rules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)

## Installation

To install the ValidateKit package, you can use npm. Open your terminal and run the following command:

```shell
npm install validate-kit
```

This command will install the validate-kit package and its dependencies into your project.

After installation, you can import and use the ValidateKit class in your JavaScript code as described in the Usage section.

Note: Make sure you have npm (Node Package Manager) installed on your machine before running the installation command.

## Usage

To use the validation functions provided by ValidateKit, you can call them directly on the class. Here's an example of how to validate an email address:

```shell
import { ValidateKit } from 'validate-kit';

const email = 'example@example.com';
const isValidEmail = ValidateKit.validateEmail(email);

console.log(isValidEmail); // Output: true
```

Feel free to replace `email` with your desired email address.

## Functions

You can import the specific validation function you need or import the entire `ValidateKit` class to access all the validation functions.

### validateEmail(email: string): boolean

This function validates whether the given email address is in a valid format. It checks if the email matches the pattern `username@domain.extension`.

<br>
<br>

### validatePhoneNumber(phoneNumber: string): boolean

This function validates whether the given phone number is in a valid format. It checks if the phone number consists of 10 to 15 digits.

<br>
<br>

### validateURL(url: string): boolean

This function validates whether the given URL is in a valid format. It checks if the URL matches the pattern `http(s)://domain.extension` with an optional port and path.

<br>
<br>

### validateUsername(username: string): boolean

This function validates whether the given username is in a valid format. It checks if the username consists of alphanumeric characters and is between 3 and 20 characters long.

<br>
<br>

### validatePassword(password: string): boolean

This function validates whether the given password meets the required criteria. It checks if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one digit, and one symbol.

<br>
<br>

### validateConfirmPassword(password: string, confirmPassword: string): boolean

This function validates whether the given password and confirm password values match.

<br>
<br>

### validateDateOfBirth(dateOfBirth: string): boolean

This function validates whether the given date of birth is in a valid format and represents a valid date. It checks if the date of birth matches the pattern `YYYY-MM-DD` and if it corresponds to a real date.

<br>
<br>

### validateCreditCardNumber(creditCardNumber: string): boolean

This function validates whether the given credit card number is a valid number according to the Luhn algorithm checksum.

<br>
<br>

### validatePostalCode(postalCode: string): boolean

This function validates whether the given postal code is in a valid format. It checks if the postal code matches the pattern of a 5-digit or 9-digit US ZIP code.

<br>
<br>

### validateSocialSecurityNumber(ssn: string): boolean

This function validates whether the given social security number is in a valid format. It checks if the social security number consists of 9 digits.

<br>
<br>

### validateCustomRule(value: any, rule: (value: any) => boolean): boolean

This function allows you to define and validate custom rules. It takes a value and a rule function as parameters. The rule function should return `true` if the value is valid according to your custom rule, or `false` otherwise.

<br>
<br>

## License

This project is licensed under the **MIT License**.

Feel free to contribute to this project by opening issues or submitting pull requests.

If you encounter any issues or have any questions, please feel free to reach out.

Enjoy using ValidateKit for your validation needs!
