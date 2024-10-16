Time spent on the exercise: ~4h.
# Pokémon List

This project is a web application that displays a list of Pokémon using the [PokéAPI](https://pokeapi.co/). It allows users to filter Pokémon by type and navigate through pages of results. The application is built using Next.js with TypeScript and styled using Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch and display a list of Pokémon.
- Filter Pokémon by type.
- Pagination for navigating through multiple pages of Pokémon.
- Responsive design using Tailwind CSS.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for building custom designs.
- [PokéAPI](https://pokeapi.co/) - A RESTful API for accessing Pokémon data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iambinhnpt/pokemon-list.git
   cd pokemon-list

	2.	Install dependencies:

npm install


	3.	Start the development server:

npm run dev


	4.	Open your browser and navigate to http://localhost:3000.

Usage

	•	The main page displays a list of Pokémon, showing their names and images.
	•	Use the type filter buttons to view Pokémon of specific types.
	•	Navigate through pages using the Previous and Next buttons.

Project Structure

pokemon-list/
├── app/
│   ├── pokemon-list/
│   │   ├── page.tsx           # Server component for fetching and displaying Pokémon
│   │   ├── PokemonList.tsx    # Client component for rendering the Pokémon list
│   ├── global.css              # Global styles
│   ├── layout.tsx              # Main layout component
├── public/
│   └── images/                 # Public images (if any)
├── README.md                   # Project documentation
└── package.json                # Project metadata and dependencies

Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to open an issue or submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

### Instructions for Customization:
1. **Repository URL**: Replace `https://github.com/iambinhnpt/pokemon-list.git` with the actual URL of your GitHub repository.
2. **Features**: You can expand or modify the features section as you add more functionalities to the application.
3. **Project Structure**: Ensure that the directory structure accurately reflects your project organization.

This README should provide a clear and comprehensive overview of your project for any users or contributors. Let me know if you need any further modifications!
