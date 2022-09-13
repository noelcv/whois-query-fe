# WhoisQueryFe

## TODOS:
- JWT
- Same-site policy
- Headers at Get Request
- Enforce client-side validation and feedback
- ErrorBoundary
- Test suite
- Deployment
- Finish displaying logic for displaying parsed favorites
- removeFromWatchList action logic

## State Management

To make the app truly reactive and ready to be manageable at scale, we opted to manage state with NgRx and recreate Redux Patterns to establish a single source of truth to manage the interactions on the client-side.

---- STORE
|___ state
|___ actions
|___ reducers
|___ effects
|___ selectors


## Modularity and Composibility 
We procured to keep the code modular, the functions pure and keep side effects to the bare minimum. Example given, instead of chaining multiple actions within an effect,
we opted to draft highly targeted actions collections (Domain (API actions), UI (User Interface and User Experience) and WatchList (for additional Ui filtering and scope management)). Each of the actions within this collection has a tight scope of execution, actionable and dispatchable from the UI.

## Tailwind
For styling our UI, we opted for TailwindCSS, not only for allowing for fast prototyping, but also for the optimized CSS builds, which are significantly smaller than regular CSS.

## Security

### Client-side input sanitization

Combined with a server-side validation strategy with client-side filtering to provide imediate feedback to the client

#### Credential and Personally Identifiable Information (PII)

Although we are not dealing with highly sensitive information (such as passwords, credit card details, etc), we procured to prevent browser caching of user inputs we set with assignable attributes to override default configuration.
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
