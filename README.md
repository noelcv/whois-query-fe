# WhoisQueryFe

## State Management

To make the app truly reactive and ready to scale, we opted to manage state with NgRx and recreate Redux Patterns.

---- STORE
|___ state
|___ actions
|___ reducers
|___ effects
|___ selectors







## Security

### Client-side input sanitization

Combined with a server-side validation strategy with client-side filtering to provide imediate feedback to the client

#### Credential and Personally Identifiable Information (PII)
To prevent caching of user inputs we set the assignable attributes
to override default configuration.
```
    <input formControlName="sldInput" class="w-3/4 h-20 text-xl p-10" type="text" placeholder="Enter a domain name" type="text" min-length="1" maxlength="63" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off">>
```




## Deployment

Backend - Heroku
Front-End - Vercel - https://vercel.com/guides/deploying-angular-with-vercel


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
