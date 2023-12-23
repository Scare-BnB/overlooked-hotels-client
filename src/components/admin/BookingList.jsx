import { useState, useEffect } from "react";
import axiosClient from '../../utils/axios';

export default function BookingList() {
    const [bookings, setBookings] = useState([]);

    const getBookings = async () => {
        let response = await axiosClient.get('/bookings/all');
        setBookings(response.data);
    }

    useEffect(() => {
        getBookings();
    }, []);

    return (
        <>
            <h1>Booking List</h1>
            {bookings.map((b, index) => (
                <p key={index}>{b.user.firstName} {b.user.lastName} ({b.user.email}) - {b.location.name} {'('}{b.startDate} - {b.endDate}{')'} (${b.cost})</p>
            ))}
        </>
    )
}