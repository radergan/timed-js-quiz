# Timed Javascript Quiz

This small application should present the user with a quiz about Javascript. It stores scores locally using localstorage. The score
is derived from the amount of time it takes the user to complete the quiz.

## User Story

> As a coding boot camp student, I want to take a timed quiz on JavaScript fundamentals 
> that stores high scores so that I can gauge my progress compared to my peers.

## Technical Details

These are some notes/concerns on the current functionality.

### Known Bugs

* No penalty is incurred for missing a question; this was in the original acceptance criteria but is lacking from the program's current
logic.
* The clear scores button clears scores in local storage, but does not immediately reflect on the page; to the user, it appears the button
has no functionality, even though it is silently flushing their local saved scores.

