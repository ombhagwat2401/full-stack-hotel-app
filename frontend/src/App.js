import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import HotelContainer from './components/hotel-container/HotelContainer';
import Main from './components/main/Main';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddHotel from './components/add-hotel/AddHotel';
import ViewHotel from './components/view-hotel/ViewHotel';
import UpdateHotel from './components/update-hotel/UpdateHotel';
import Footer from './components/footer/Footer';

function App() {

  const [hotels, setHotels] = useState()

  useEffect(() => {

    axios.get('http://localhost:5000/api/hotels')
      .then(response => setHotels(response.data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);


  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<><Main /> <HotelContainer setHotels={hotels} /></>} />
          <Route path="/add-hotel" element={<><Main /> <AddHotel /></>} />
          <Route path="/view-hotel/:id" element={<><Main /> <ViewHotel setHotel={hotels} /></>} />
          <Route path="/update-hotel/:id" element={<><Main /> <UpdateHotel setHotel={hotels} /></>} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
