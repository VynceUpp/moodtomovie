# MoodtoMovie Selection Platform

A React-based platform that helps users find movies to watch based on their mood. The app fetches movie recommendations from The Movie Database (TMDb) and provides a dynamic, responsive interface that adapts to various screen sizes. Whether you're feeling happy, adventurous, or nostalgic, this platform helps you discover the perfect movie to match your mood!

## Features

- **Mood-Based Movie Selection**: Choose a mood, and the platform will suggest movies that fit that mood.
- **Movie Carousel**: A responsive carousel to display movies with smooth transitions, movie titles, vote averages, release dates, and overviews.
- **Hover Interaction**: Displays a movie’s overview when hovering over the movie card.
- **Responsive Design**: Adjusts the number of visible movies based on screen size (1 movie on mobile, 4 on medium screens, up to 10 on larger screens).
- **Popular Movies**: Browse popular movies based on different moods.

## Live Demo

You can try the live demo of the project [here](https://moodtomovie.vercel.app/).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager)
- **React** (version 17 or above)

## Installation

Follow the steps below to get your development environment set up:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/moodtomovie.git
    cd moodtomovie
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create an `.env` file** in the root directory and add your TMDb API key:
    ```
    REACT_APP_TMDB_API_KEY=your_api_key
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action!

## TMDb API Key

This project relies on the TMDb API to fetch movie data. You can get your API key by signing up for a free account on [TMDb](https://www.themoviedb.org/).

## Development

To contribute to this project, follow these steps:

1. **Fork the repository** to your own GitHub account.
2. **Clone your forked repository** locally.
3. **Create a new branch** to work on a specific feature or bug fix:
    ```bash
    git checkout -b your-feature-name
    ```
4. **Make your changes** and commit them:
    ```bash
    git commit -m "Describe your changes"
    ```
5. **Push your changes** to your forked repository:
    ```bash
    git push origin your-feature-name
    ```
6. **Create a pull request** to submit your changes.

## Contributing

If you'd like to contribute to the development of this project, feel free to fork the repository and submit pull requests. Please make sure to test your changes thoroughly before submitting them.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TMDb API**: For fetching movie data.
- **Tailwind CSS**: For utility-first CSS styling.
- **CSS**: Though i am slowly updating it to get rid of the old css and completely move on to tailwindcss
