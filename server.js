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

//POST /resources - Create a new resource Ex: { id: 3, name: 'Resource Three', type: 'Type C' }
// app.post('/resource', (req, res) => {
//   const newResource = req.body;
//   const resourceId = Object.keys(resources).length+1;
//   resources[resourceId] = newResource
//   //resources.push(newResource);
//   res.status(201).json({id:resourceId})
// });

app.post('/resource', (req, res) => {
  const newResource = req.body;
  const resourceId = resources.length + 1;
  const resourceWithId = {
    id: resourceId,
    ...newResource
  };
  resources.push(resourceWithId);
  res.status(201).json(resourceWithId);
});

//delete /resource/:id - Delete a resource by ID
app.delete('/resource/:id', (req, res) => {
 
  const resourceId = req.params.id

  if(resources[resourceId]){
    delete resources[resourceId];
    res.status(200).json({ message: 'Resource deleted'});
  }else{
    res.status(404).json({ error: 'Resource not found' });
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


module.exports = app;
