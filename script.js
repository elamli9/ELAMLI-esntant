// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3ENJExu01i7yODhQQO5k6-BuZ13737T4",
    authDomain: "elamli-shop.firebaseapp.com",
    databaseURL: "https://elamli-shop-default-rtdb.firebaseio.com",
    projectId: "elamli-shop",
    storageBucket: "elamli-shop.appspot.com",
    messagingSenderId: "740777134694",
    appId: "1:740777134694:web:6064048d820d18540afba7",
    measurementId: "G-MNT2CS1QSD"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Fetch games from Firebase and create game cards
  const gamesContainer = document.getElementById('gamesContainer');
  const dbRef = firebase.database().ref('games'); 
  
  // Add debug logs
  console.log("Attempting to fetch games from Firebase...");
  
  dbRef.on('value', (snapshot) => {
    if (snapshot.exists()) {
      const games = snapshot.val();
      console.log("Games fetched successfully:", games); // Log the fetched games
      gamesContainer.innerHTML = ''; // Clear existing game cards
  
      for (const gameId in games) {
        const game = games[gameId];
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
          <img src="${game.thumbnailURL}" alt="${game.title} thumbnail" class="game-thumbnail">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <button onclick="playGame('${gameId}')">العب الآن</button>
        `;
        gamesContainer.appendChild(gameCard);
      }
    } else {
      console.log("No games data available");
    }
  }, (error) => {
    console.error("Error fetching data:", error); // Log any errors
  });
  
  // Function to handle game play
  function playGame(gameId) {
    console.log("Playing game with ID:", gameId); // Log the game ID being played
    window.location.href = `game.html?gameId=${gameId}`; // Replace with your game page URL
  }
  