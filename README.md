# Netflix-GPT

- Movie Recommendation App

# SETUP

- Install react app using Vite(latest version "19.1.0")

  - npm install vite@latest

- Install TailwindCSS using vite(latest version "4.1.10")

  - npm install tailwindcss @tailwindcss/vite
  - Configure the Vite plugin

    - Add the @tailwindcss/vite plugin to your Vite configuration

    - import { defineConfig } from 'vite'
      import tailwindcss from '@tailwindcss/vite'
      export default defineConfig(
      plugins:
      tailwindcss(),
      ,
      )

  - Import Tailwind CSS
    - Add an @import to your CSS file that imports Tailwind CSS.
    - @import "tailwindcss";

- Install react router

  - npm install -D react-router-dom

- Install Firebase for authentication and Production

  - If you're already using NPM and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

    - npm install firebase

  - Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

    - create firebase.js file and config apikey,authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId which is provided in the firebase when setup;

  - Now firebase is in setup and startup.
  - use this command to use firebase.
    - npm install -g firebase-tools
    - firebase login
    - firebase init
    - npm run build
    - firebase deploy

- Install Redux/Toolkit
  - Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:
    - npm install @reduxjs/toolkit
    - npm install react-redux

# Features

- Landing Page

  - Language
  - Login Page
  - Get Started

- HomePage(is User !authorised)

  - SignIn / SignUp Page
    - SignInForm / SignUpForm

- Browse

  - NavBars
  - Showcase
  - Trendings
  - MovieSuggestion
    - MovieList \* N

- ReactFlix
  - Search
  - Movie Suggestions
