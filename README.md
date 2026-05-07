# 🍿 Netflix-GPT

> A modern, AI-powered movie recommendation platform inspired by Netflix, combining the vast TMDB movie database with the intelligence of Google's Gemini AI.

## 🎥 Demo Video

<video src="https://github.com/kannishhh/Neflix-GPT/raw/main/screenshot/netflix_gpt.mp4" controls="controls" width="100%">
  Your browser does not support the video tag.
</video>

## Features

- **Authentication**: Secure user sign-in and sign-up powered by Firebase Authentication.
- **Cinematic Browse Hub**: Explore trending, top-rated, action, comedy, and more through real-time TMDB API integration.
- **AI-Powered Recommendations (Gemini AI)**:
  - **Smart Search**: Enter a natural language prompt (e.g., "movies like Inception but scarier") and get 5 exact recommendations.
  - **Mood Matcher**: Tell the AI how you feel, and it will recommend the perfect, highly-rated hidden gem with a tailored explanation.
  - **Weekend Binge**: Request a vibe, and get a customized 4-movie/show binge playlist.
  - **Quick Explain**: Get a compelling 3-line elevator pitch for any movie.
- **Multilingual Support**: Seamlessly switch between languages (English, Hindi).
- **Fully Responsive**: Fluid UI built with TailwindCSS, looking great on desktops and mobile.
- **Modern Animations**: Smooth page transitions and interactive elements using Framer Motion.

## Tech Stack

### Frontend

- **Framework**: React 19 + Vite
- **Styling**: TailwindCSS v4
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: FontAwesome & React Icons

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Integration**: Google GenAI SDK (Gemini 2.5 Flash)

### DevOps & Services

- **Backend/Frontend Execution**: Concurrently
- **Authentication**: Firebase Auth
- **Hosting/Deployment**: Firebase Hosting
- **Data Source**: TMDB API

## Getting Started

<!-- ### Demo Credentials

To quickly test the application without signing up, use the following demo account:

- **Email**: `test2@demo.in`
- **Password**: `Test@123` -->

### Prerequisites

- Node.js (v18+ recommended)
- Firebase Account
- TMDB API Key
- Google Gemini API Key

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd Netflix-GPT
   ```

2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

3. **Install Backend Dependencies:**

   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Variables:**
   Create a `.env` file in the root directory and add your API keys. Make sure to configure your Firebase settings inside your `firebase.js` or via environment variables:

   ```env
   VITE_GOOGLE_API_KEY=your_gemini_api_key
   # Add your other Firebase / TMDB keys here depending on your config.
   ```

5. **Run the Application:**
   Start both the Vite frontend and the Express backend concurrently:
   ```bash
   npm start
   ```
   _Frontend typically runs on `http://localhost:5173` | Backend runs on `http://localhost:5000`_

## 🌐 Deployment (Firebase)

1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize Firebase project:
   ```bash
   firebase init
   ```
4. Build the production app:
   ```bash
   npm run build
   ```
5. Deploy to Firebase Hosting:
   ```bash
   firebase deploy
   ```
