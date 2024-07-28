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

// server.js
app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();
    const database = client.db('G14');
    const users = database.collection('users');

    const user = await users.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Send the username along with the token
    res.status(200).json({ message: 'Yes', username: user.username, token: 'some_token' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  } finally {
    await client.close();
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
