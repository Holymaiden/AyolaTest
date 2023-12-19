# React Native OTP Authentication App

## Introduction

This repository contains a simple React Native app designed for user authentication using a one-time password (OTP). The test instructions are outlined in this document. I focused on showcasing my coding skills without relying on external packages like react-native-otp-input.

## Implementation Details

### Registration Page

Create a page for user registration with the following details:

- Username and password input fields.
- Validation criteria for the password:
  1. Must contain at least 8 characters.
  2. Must contain at least one lowercase letter.
  3. Must contain at least one uppercase letter.
  4. Must contain at least one symbol.
  5. Email validation.

After the user submits the registration data, redirect them to the OTP page.

### OTP Page

Create a page where users can input a 6-digit OTP:

1. Assume the correct OTP is `111111`.
2. Implement a 30-second countdown before the "resend" button becomes clickable.
3. The "resend" button should refresh the timer.
4. The focus should automatically move to the right as the user inputs the number and move to the left when the user uses the backspace key.
5. Upon submitting the correct OTP, store the username/password locally and redirect the user to the login page.

### Login Page

If a user successfully logs in with the registered username and password, they should be directed to a "Welcome" page with a logout button.

## Installation

1. Clone this repository.

   ```bash
   git clone https://github.com/your-username/react-native-otp-auth.git
   ```

2. Install dependencies.
   ```bash
   cd react-native-otp-auth
   npm install
   ```
3. Run the app on an emulator or device.
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## Additional Notes

- I've adhered to React Native best practices and coding standards throughout the implementation.
- I've included clear and concise comments in the code to enhance readability.
- If there are any specific features or improvements you'd like me to consider, please let me know.

Thank you for the opportunity to showcase my skills. If you have any questions or feedback, I'm eager to discuss them further.
