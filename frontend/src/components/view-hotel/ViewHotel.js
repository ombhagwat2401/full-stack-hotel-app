import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './viewHotel.css'


function ViewHotel({ setHotel }) {

    const [viewHotel, setViewHotel] = useState([{}]);
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (setHotel) {
            setViewHotel(setHotel.filter(e => e._id == id))
            console.log(viewHotel[0]);
        }
    }, [setHotel])


    const handleDelete = () => {

        const userResponse = window.confirm('🚨 Do you Really want to Delete this Hotel?');
        const id = viewHotel[0]._id;

        if (userResponse) {
            axios.delete(`http://localhost:5000/api/hotels/${id}`)
                .then(() => {
                    alert("✅ Hotel Deleted Successfully!")
                    navigate('/');
                })
                .catch(error => console.error('Error deleting hotel:', error));
        } else {
            console.log("cancel");
        }


        console.log("id: ", viewHotel[0]._id);
    }




    return (
        <div className='hotelapp__view_hotel'>
            <h3>View Hotel</h3>
            <div className="hotelapp_view_hotel_container">
                <div className="hotel_img">
                    <img src={viewHotel[0].image} alt="" />
                </div>
                <div className="hotel_details">
                    <h3>{viewHotel[0].name}</h3>
                    <p>{viewHotel[0].description}</p>
                    <p><b>Price:</b> {viewHotel[0].price}/day</p>
                    <p><b>Rating:</b> {viewHotel[0].rating}⭐</p>
                    <div className='hotel_actions'>
                        <Link to={"update-hotel/" + viewHotel[0]._id}><button>Edit Hotel Details</button></Link>
                        <button className='del' onClick={handleDelete}><i className='fa fa-trash'></i> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewHotel