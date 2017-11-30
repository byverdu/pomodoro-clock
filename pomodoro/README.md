# Pomodoro Clock

## User Stories to fullfil

1. Decide on the task to be done.
1. Set the pomodoro timer (traditionally to 25 minutes).
1. Work on the task.
1. End work when the timer rings and put a checkmark on a piece of paper.
1. If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.
1. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.

## Involved Components

### `<Timer />`

We need a timer component that will be used in 3 scenarios, the pomodoro timer itself and keep track for the 2 different breaks.

### `<Button />`

Potentially to start and stop the timer and reset the checkmarks.

### `<ListTask />`

A list of tasks that is going to be completed during the day.

### `<Task />`

Singular task that needs to be completed.

### `<CheckMark />`

Will be used either to keep track for the pomodoros used and tasks completed.

### `<Count />`

To keep track how many iterions we have done

## Involved Containers

1. The app itself
1. Buttons
1. Timers
1. List tasks
1. List checkboxes
1. Counter
