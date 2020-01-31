# Marketio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###  Detailed description explaining approach...

_refer to the files in /planning for a timeline and todo list_

Approach was as follows:

1. Identify the best API for the job by mapping each requirement to the respective api endpoint
2. Look at some examples of products that answer the same Qs (see /planning)
3. Mock the application (on paper)
4. Select appropriate libraries for the requirements and mocks
5. Setup core pieces: API consumption and routing
6. Cleanup with proper ui
7. Test isolated functions, happy path only due to time constraints

### What can be improved in the current implementation...

Lots!

1. Testing negative paths
2. Modularizing code by creating grid and chart helper services
3. Completing the missing requirements (historical pricing chart, sector info, adding favorite stock to list)
4. Adding UI library (e.g. bootstrap) and properly executing ui mock

### Are there any known bugs?

Yes!

1. If you route to a page that does not exist, there is no 404.

###  If you had two weeks to work on this, where would you go with it?

1. Explore the API further. There are a lot of interesting endpoints such as [Largest Trades|https://iexcloud.io/docs/api/#largest-trades].
2. FIX THE UI. As someone who is very heavily invested in design in my current role, I am disappointed I didn't get to spend time on the UI.
3. Implement a simple backend for storing usage stats and showing popular content.
