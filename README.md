- ReactFlix
    - Movie Recommendation App 

    - SETUP
        - Install react app using Vite(latest version "19.1.0")
            - npm install vite@latest 
        - Install TailwindCSS using vite(laest version "4.1.10")
            - npm install tailwindcss @tailwindcss/vite
        - Configure the Vite plugin
            - Add the @tailwindcss/vite plugin to your Vite configuration
            - import { defineConfig } from 'vite'
              import tailwindcss from '@tailwindcss/vite'
              export default defineConfig({
              plugins: [
              tailwindcss(),
              ],
            })
        - Import Tailwind CSS
            - Add an @import to your CSS file that imports Tailwind CSS.
            - @import "tailwindcss";


    - Features








