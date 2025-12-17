const express = require('express');
const app = express();
const port = 3000;

//to parse request bodies in JSON format
app.use(express.json());

//Sample dataset
const resources = [
  { id: 1, name: 'Resource One', type: 'Type A' },
  { id: 2, name: 'Resource Two', type: 'Type B' },
];

// GET /resources - Retrieve all resources
app.get('/resources', (req, res) => {
  res.status(200).json(resources);
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


module.exports = app;
