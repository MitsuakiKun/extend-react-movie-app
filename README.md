# Assignment 1 - ReactJS app.

Name: Mitsuaki Okabe


## Overview.

I have created a multilingual site to make it easier for many people to use the site. Since I am Japanese, I have made the site Japanese compatible first, but since the [string.js](./src/strings.js) database, so you can easily change to more languages by registering language information.
I also created a login function using Firebase Authentication so that only google accounts with @mail.wit.ie can login to the site.
Furthermore, I have created a more user-friendly site with more information on the detail pages.

### Features.

+ Language support for Japanese
+ Authentication with WIT Google Account (Using by Firebase Authentication)
+ Sort Movie list on homepage
    - Rating sort (Asc and Desc)
    - Publication Date Sort (Asc and Desc)
+ Adding information on the Movie detail page 
    - Production Company
        - Migrate to company Google search when you click the chip.
    - Similar Movie List

---
## Setup requirements.
+ You need to login with WIT Google Account when you access all pages.

---
## API endpoints.
+ Language set - &language=ja-JA or &languages=en-US
+ Similar movies - movie/:id/similar

---
## Routing.
+ /login - access login page.

---
## Independent learning (If relevant).
### Sources
+ [Firebase Authentication with Google Account](https://firebase.google.com/docs/auth/web/google-signin)

+ [Access Control with Firebase Auth](https://ralacode.com/blog/post/react-firebase-authentication/) ←It is written in Japanese...

### Using Files
+ Login function
    - [LoginPage.js](./src/pages/LoginPage.js)
+ Access Control
    - [HomePage.js](./src/pages/HomePage.js)
    - [favoriteMovies.js](./src/pages/favoriteMoviesPage.js)
    - [upcomingMovies.js](./src/pages/upcomingMoviesPage.js)
