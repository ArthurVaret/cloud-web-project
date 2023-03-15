# Front

School workshop to implement a front end to use a given back-end made by our teacher, ![source](https://github.com/strawhattom/secure-web-dev-backend)

## Docker version

A docker-compose with environment is ![available](https://github.com/strawhattom/docker-secure-web-dev/)

## Dependencies

```bash
npm install
```

## Configuration

```bash
npm run check
```

And in `.svelte-kit/tsconfig.json` add if not already :

```json
{
  "compilerOptions": {
    "paths": {
      "$lib": [
        "../src/lib"
      ],
      "$lib/*": [
        "../src/lib/*"
      ]
    },
  // ...
}
```

## Developing (from svelte init)

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev -- --open
```

## User Stories (:white_check_mark: : implemented features)

-   :white_check_mark: US1 : As a random visitor, I want to be able to register an account or log-in, so I can
    access all features
-   :white_check_mark: US2: As a random visitor, I want to be redirected to the login/register page when I click on
    “location" tab, so that I know I must log-in to see its content
-   :white_check_mark: US3: As a logged-in user, I want to see locations and be able to click on one location to
    open a modal containing details, so that the website is useful
-   :white_check_mark: US4: As an “admin" user, I want to see a “Add Location” button in the location page, so
    that I can create a new location
-   :white_check_mark: US5: As an “admin" user, I want to see a button to edit locations in the array of locations,
    so that I can edit existing locations
-   :white_check_mark: US6: As an “admin" user, I want to see a button to delete locations in the array of
    locations so that I can delete existing locations

### Additional user stories

-   :white_check_mark: AUS1 : As a logged-in user, I want to be redirected to locations page if i want to access to admin features like `/locations/[id]/edit` or `/locations/add`
