const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
const allowedOrigins = ['https://book-inventory-j3sf.vercel.app'];
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));
app.use(express.json());

// MongoDB connection
const uri = "mongodb+srv://mernbookinventory:Za1xcZtCsENbshbN@cluster0.smbra6s.mongodb.net/BookInventory?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

// Routes
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
