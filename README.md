# Random Password Creator

This small application should create a random password after generating a series of prompts for the user.


## Technical Details

These are some notes/concerns on the current functionality.

### User Story

> As an employee with access to sensitive data, I want to randomly
> generate a password that meets certain criteria so that I can create
> a strong password that provides greater security.

### Methods

The function that generates the passwords pulls a random character at position x in a list of strings, which are added to an array - the array houses the various levels of complexity that the user selects via the series of prompts.

### Concerns / Future Improvements

None of the passwords are particularly readable. A better solution might be to check against a dictionary and substring replacements per the desired complexity of the user.


