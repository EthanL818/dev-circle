![devCircle](https://github.com/EthanL818/dev-circle/blob/main/public/dev-circle-logo.png)

Welcome to devCircle, an open-source platform designed by students, for students, where you can share your side projects, receive valuable feedback from peers, and find inspiration from others in similar situations.

## Table of Contents

- [Features](#features)
- [Future Plans](#future-plans)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Features

devCircle offers numerous unique features that make it great for sharing projects and receiving feedback:

- **Markdown text editor** for posts that allows for great customization of post content.
- **Suggestions feature** that allows users to directly suggest changes or new features to the developers of the project.
- **Comprehensive tag and tech stack functionality** for seamless categorization of projects.
- **Project repository linking** for easy access via the GitHub API.
- **Suggestion feed** for authors to sort suggestions into categories such as "to-do", "implemented", and "dismissed".
- **Customizable user profiles** with fields such as the user's tech stack, interests, educational institution, GitHub, LinkedIn, etc.
- **Mobile-adaptive website** for a seamless experience across devices.
- **Authentication** for secure access.
- **Algolia AI powered full-text search** for searching posts by title, tags, or technologies used.
- **Post image and cover image upload** functionality.
- **Post draft system** to prevent loss of post content.
- **Unique custom Firebase usernames**.
- **Bot-friendly content** with full search engine optimization.
- **Advanced SSR, SSG, and ISR techniques**.
- **Firestore realtime CRUD and data modeling**.
- **Reactive forms** via the `react-hook-form` package.
- **Realtime likes** for all posts.

## Future Plans

This is just the beginning for devCircle. Future features may include:

- Additional sign-in options beyond Google.
- Notification system.
- Direct messaging between users.
- Pinning posts to profiles.
- Mobile app (React Native).

## Getting Started

To get started with devCircle, clone the repository and install the dependencies:

```sh
git clone https://github.com/EthanL818/dev-circle.git
cd dev-circle
npm install 
```

Create a .env file in the root directory and add the environment variables as shown in the .env.example file.
To run the application in development mode:

```sh 
npm run dev 
```

This will start the development server on http://localhost:3000.




## Scripts
```sh
dev: Runs the development server.
build: Builds the application.
start: Starts the application.
lint: Lints the codebase.
```

## Dependencies
```sh
@algolia/autocomplete-theme-classic: ^1.17.2
algoliasearch: ^4.23.3
firebase: ^10.12.1
firebase-admin: ^12.1.1
firebase-functions: ^5.0.1
instantsearch.css: ^8.2.1
lodash.debounce: ^4.0.8
lodash.kebabcase: ^4.1.1
next: 14.2.3
react: ^18
react-dom: ^18
react-firebase-hooks: ^5.1.1
react-hook-form: ^7.51.5
react-hot-toast: ^2.4.1
react-icons: ^5.2.1
react-instantsearch-dom: ^6.40.4
react-markdown: ^9.0.1
react-select: ^5.8.0
react-share: ^5.1.0
```

## Dev Dependencies
```sh
@types/node: ^20
@types/react: ^18
@types/react-dom: ^18
eslint-config-next: 14.2.3
postcss: ^8
tailwindcss: ^3.4.1
typescript: ^5
```

## License
This project is licensed under the MIT License.
