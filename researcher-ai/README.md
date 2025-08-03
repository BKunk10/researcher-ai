# Researcher AI

Researcher AI is a collaborative workspace designed for engineering research and CAD innovation. This application provides tools for managing, testing, and iterating on designs faster, with built-in AI features tailored for modern engineering teams.

## Features

- **Responsive Layout**: The application includes a responsive layout with a sidebar for easy navigation.
- **User-Friendly Interface**: The WelcomeCard component greets users and provides quick access to essential features.
- **Routing Support**: Built with Next.js 14+, the application supports file-based routing for seamless navigation between pages.

## Installation

To get started with the Researcher AI project, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd researcher-ai
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project is organized as follows:

```
researcher-ai
├── src
│   ├── app
│   │   ├── (main)
│   │   │   └── layout.tsx      # Layout component with sidebar navigation
│   │   └── page.tsx            # Main entry point for the application
│   ├── components
│   │   └── WelcomeCard.tsx      # Component displaying welcome message and user info
│   └── types
│       └── index.ts             # TypeScript types and interfaces
├── package.json                  # NPM configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.