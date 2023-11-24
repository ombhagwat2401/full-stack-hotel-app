

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://ombhagwat240103:0coyqB4jivLVwZJa@cluster0.kbc7enw.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Connection failed", err);
})


app.use(bodyParser.json());
app.use(cors());

const hotelSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    rating: Number,
    image: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

app.get('/api/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/hotels', async (req, res) => {
    const hotel = new Hotel(req.body);
    console.log("API called", req.body)
    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel);
        console.log("Data Saved")
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.put('/api/hotels/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedHotel);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


app.delete('/api/hotels/:id', async (req, res) => {
    const { id } = req.params;
    console.log("api called")
    try {
      await Hotel.findByIdAndDelete(id);
      res.json({ message: 'Hotel deleted successfully' });
      console.log("deleted")
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });




app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})