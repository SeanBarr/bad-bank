# Front End Banking Application
Bad-Bank Front-End Project
 1. Navigation Bar
Includes Create Account, Deposit, Withdraw, All Data, and Home pages
Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.
Styled with Bootstrap
Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.
Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.
2. Home Page
Includes bank title, image, and a welcome message.
Styled as a Bootstrap card.
3. Create Account Page
Includes a Bootstrap card with a form that has:
Name input field
Email address input field
Password input field
Create account button
4. Create Account Page Functionality
Create account page should include the following functionality:
Success message: Upon selecting the create account button the user should see a success message.
Add Another Account Button: Upon selecting the create account button, the user should see an add another account button.
Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
Name validation: The user receives an alert if the name field is left blank.
Email validation: The user receives an alert if this field is blank
Password validation: The user receives an alert if the password is less than 8 characters long.
Disable submit button if nothing is inputted
5. Deposit Page
Includes a Bootstrap card with a form that has:
Deposit input field
Deposit button
Balance information displays above deposit form on the card
6. Deposit Page Functionality
Deposit page should include the following functionality:
Updated Balance: When a user deposits, the balance updates.
Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received.
Not A Number Alert: User receives an alert if they add something that is not a number.
Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
Disable deposit button if nothing is input
7. Withdraw Page
Includes a Bootstrap card with a form that has:
Withdraw input field
Withdraw button
Balance information displays above deposit form on the card
8. Withdraw Page Functionality
Withdraw page should include the following functionality:
Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance.
Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed.
Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
Not A Number Alert: User receives an alert if they add something that is not a number.
Disable deposit button if nothing is input
9. All Data Page Functionality
All Data page includes the following functionality:
Track User Submissions: All user submissions appear on All Data page.
All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.


![BadBank preview picture](https://github.com/SeanBarr/bad-bank/blob/main/assets/preview.png?raw=true)

Git Clone: 
git clone github.com/SeanBarr/bad-bank.git

Getting Started with Create React App:
npm start 
Open http://localhost:3000 to view it in the browser.

Live Demo Link: https://sean-barr-banking-application.s3.amazonaws.com/index.html#/

MIT License: https://opensource.org/licenses/MIT
