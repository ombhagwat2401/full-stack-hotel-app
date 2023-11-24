import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './addHotel.css'

function AddHotel() {

    const navigate = useNavigate();

    const [img, setImg] = useState('./noimg.png')

    const [newHotel, setNewHotel] = useState({
        name: '',
        description: '',
        price: 0,
        rating: 0,
        image: '',
    });

    const handleInputChange = (e) => {
        setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
        console.log(newHotel);
        if (newHotel.image != '') {
            setImg(newHotel.image);
        }
    };

    const handleAddHotel = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/hotels', newHotel)
            .then((response) => {
                alert("✅ Hotel Added Successfully!");
                navigate('/');
            })
            .catch(error => console.error('Error adding hotel:', error));
    };


    return (
        <div className='hotelapp__add_hotel'>
            <h3>Add new Hotel</h3>
            <div className='hotelapp_cont'>
                <div className='hotelapp_cont_img'>
                    <img src={img} alt="" />
                </div>

                <form className='hotelapp_cont_form' onSubmit={handleAddHotel}>
                    <div className="flex">
                        <div>
                            <label>Hotel Name</label>
                            <input type="text" placeholder='Hotel Name' name='name' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Hotel Image Url</label>
                            <input type="text" placeholder='Hotel Image Url' name='image' onChange={handleInputChange} />
                        </div>
                    </div>

                    <label>Hotel Description</label>
                    <textarea cols="30" rows="3" placeholder='Hotel Description' name='description' onChange={handleInputChange} ></textarea>
                    <div className="flex">
                        <div>
                            <label>Hotel Price Per Day</label>
                            <input type="text" placeholder='Hotel Price / Day' name='price' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Hotel Rating Out of 5</label>
                            <input type="text" placeholder='Hotel Rating / 5' name='rating' onChange={handleInputChange} />
                        </div>
                    </div>

                    <button className='add_hotel_btn' type='submit'>Add Hotel</button>
                </form>
            </div>

        </div>
    )
}

export default AddHotel