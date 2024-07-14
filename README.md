# Movie Search App
#### Overview
This is a React Native application that allows users to search for movies and view results with randomly generated images. The app utilizes the Open Library Search API for fetching movie data and the Dog CEO API for generating random images.

### Demo
https://github.com/user-attachments/assets/3decc41b-1577-4bb4-8cc3-040c0e901c07

## Features
```
Search movies using the Open Library Search API
Display search results with movie titles and random images
Stylish and responsive search bar with custom icons and a loading indicator
```

## Getting Started
### Prerequisites
```
- Node.js (v12 or higher)
- npm or yarn
- Expo CLI
```

### Installation
#### Clone the repository:
```
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app
```
#### Install dependencies:
```
npm install
```
#### Start the app:
```
npm start
```

### Usage
Launch the app using Expo Go on your mobile device or an emulator.
Enter a keyword in the search bar and press enter to search for movies.
View the search results with randomly generated images.


### Components
SearchBar.js: A customizable and stylish search bar component.
Card.js: A generic card component to display content with an image and title.
MovieCard.js: A specific card component for displaying movie information with a random image.

### Screens
HomeScreen.js: The main screen of the app that includes the search bar and a list of movie cards.

### Services
api.js: Contains functions for making API requests to the Open Library Search API and the Dog CEO API.

### APIs
Open Library Search API: Used for fetching movie data.
Dog CEO API: Used for generating random images.

### Customization
You can customize the app by modifying the styles in the StyleSheet objects within each component. Additionally, you can extend the functionality by adding more components or enhancing the existing ones.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.
