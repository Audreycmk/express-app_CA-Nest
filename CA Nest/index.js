require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Set Pug as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));
// Add this right after your express() initialization
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the map page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Google Maps Demo',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY // From .env
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});