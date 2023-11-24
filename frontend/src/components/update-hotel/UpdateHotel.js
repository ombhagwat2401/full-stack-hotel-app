
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateHotel({ setHotel }) {

    const [img, setImg] = useState('./noimg.png')


    const [viewHotel, setViewHotel] = useState([{}]);
    const [newHotel, setNewHotel] = useState({
        name: '',
        description: '',
        price: '',
        rating: '',
        image: '',
    })
    const { id } = useParams()

    useEffect(() => {
        if (setHotel) {
            setViewHotel(setHotel.filter(e => e._id == id))
            console.log(viewHotel[0]);

            setNewHotel({
                name: viewHotel[0].name,
                description: viewHotel[0].description,
                price: viewHotel[0].price,
                rating: viewHotel[0].rating,
                image: viewHotel[0].image,
            });

            setImg(viewHotel[0].image)


        }
    }, [setHotel])




    const navigate = useNavigate();





    console.log(newHotel);

    const handleInputChange = (e) => {
        setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
        console.log(newHotel);
        if (newHotel.image != '') {
            setImg(newHotel.image);
        }
    };


    const handleUpdateHotel = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/hotels/${id}`, newHotel)
            .then(response => {
                alert("✅ Hotel Updated Successfully!")
                navigate('/');
            })
            .catch(error => console.error('Error updating hotel:', error));
    };


    return (
        <div className='hotelapp__add_hotel'>
            <h3>Add new Hotel</h3>
            <div className='hotelapp_cont'>
                <div className='hotelapp_cont_img'>
                    <img src={newHotel.image} alt="" />
                </div>

                <form className='hotelapp_cont_form' onSubmit={handleUpdateHotel}>
                    <div className="flex">
                        <div>
                            <label>Hotel Name</label>
                            <input type="text" placeholder='Hotel Name' name='name' value={newHotel.name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Hotel Image Url</label>
                            <input type="text" placeholder='Hotel Image Url' name='image' value={newHotel.image} onChange={handleInputChange} />
                        </div>
                    </div>

                    <label>Hotel Description</label>
                    <textarea cols="30" rows="3" placeholder='Hotel Description' name='description' value={newHotel.description} onChange={handleInputChange} ></textarea>
                    <div className="flex">
                        <div>
                            <label>Hotel Price Per Day</label>
                            <input type="text" placeholder='Hotel Price / Day' name='price' value={newHotel.price} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Hotel Rating Out of 5</label>
                            <input type="text" placeholder='Hotel Rating / 5' name='rating' value={newHotel.rating} onChange={handleInputChange} />
                        </div>
                    </div>

                    <button className='add_hotel_btn' type='submit'>Update Hotel</button>
                </form>
            </div>

        </div>
    )
}

export default UpdateHotel