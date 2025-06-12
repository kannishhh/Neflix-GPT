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
        - MovieList * N

- ReactFlix
    - Search
    - Movie Suggestions









