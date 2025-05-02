const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('.'));

// Simple route for the homepage
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Route to handle API request
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});