# Turner & Townsend Frontend Technical Assessment

Angular v13.2., node v17.4, TS v5.3, RxJS v7.5.

## Thoughts

Hello! Thank you for taking the time to review this technical assesment.

I've tried to take the time to provide what you are looking for and to add bonus points too ;)

## Comments

--Architecture--: organised into a modular approach as it would be a larger and more complex app, with main modules -- Cores, Shared, Features (the last one could have its own modules)

- Core Module: for the singleton services, the ones we instanciate only once.

- Shared Module: This is for the dumb components or pipes that don't import or inject services from the other modules and can be shared accross the entire app.

- Features: Here is the place for every independent feature or 'page' of our application. They rely on services from Core Module and components from Shared Module.

Regarding guidelines, best practices and approaches, I try to follow simple markup and HTML5 standards and patterns I see on generic resources like MDN, or specific frameworks/libraries I use in that particular project (MDN, Angular Material examples, NgRx... and so on).

--styles--: Used SCSS, Angular Material (components, classes and directives)

--tests--: I was doing some unit tests with Karma (good to test services, components, pipes...). I would use Cypress for E2E if I have some more time.

--state management--: Ngrx Store to provide reactive state management, one way data flow powered by RxJS Observables.

--Lazy loading--: Faster startup time with lazy loaded feature modules

--Linting: angular-eslint packages in use

## Challenges/successes

As it happens many times in a developer's life, when doing this taks I had moments of struggle and others when I really enjoy it.

e.g. I decided to use the latest angular and node (using nvm), which resulted in issues with packages and took me quite some time to realise the solution was as simple as closing and reopening the terminal!

I was quite keen to use ngrx, but a bit rusty to set it up... it took some time but it worked out well, which makes me happy.

I'm happy with the overall result. Probably I would continue refactoring the architecture, testing ngrx files
