// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = 5000; // or process.env.PORT
const uri = "mongodb+srv://moradasakli:EjpOEUAAtT19wK3r@elephant.c3wwpzb.mongodb.net/?retryWrites=true&w=majority&appName=Elephant";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware
app.use(cors());
app.use(express.json());

app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();
    const database = client.db('G14');
    const users = database.collection('users');

    const user = await users.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Ensure score is correctly fetched and defined
    const score = user.score ?? 0; // Using nullish coalescing to default to 0
    console.log('morad is here (server)');
    console.log('Sending response:', { username: user.username, token: 'some_token', score });
    

    res.status(200).json({ message: 'Yes', username: user.username, token: 'some_token', score});
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).json({ message: 'Server error' });
  } finally {
    await client.close();
  }
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
