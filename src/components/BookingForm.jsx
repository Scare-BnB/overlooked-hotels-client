import { Link } from "react-router-dom";
import axiosClient from "../utils/axios";
import { useState, useEffect } from "react";


export default function BookingForm() {
  const [locationId, setLocationId] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    axiosClient.get("/locations/all")
      .then((response) => {
        setAccomodations(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  const makeBooking = async () => {
    const confirmBooking = (await axiosClient.post("/bookings/", {
      location: locationId,
      startDate: startDate,
      endDate: endDate,
    })).data;
  };

  return (
    <div className="hero max-h-screen py-64">
      <div className="hero-content flex-col lg:flex-row-reverse absolute top-20">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <form className="card-body ">
            <h1 className="text-4xl text-center mb-8">Bookings</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Accommodation</span>
              </label>

              <select
                id="accommodation"
                className="border-grey py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                onChange={(e) => setLocationId(e.target.value)}
              >
                <option value={null}>Select Location</option>
                {accomodations.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>

              <div className="border rounded-lg border-grey-400 border-t-3">
                <div className="input-group input-group py-2 max-w-md mx-auto">
                  <span
                    className="input-group-text"
                    id="start-date-time"
                  ></span>
                  <input
                    type="datetime-local"
                    id="startDate"
                    className="form-control"
                    v-model="startDateTime"
                    aria-describedby="start-date-time"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>

              <label className="label">
                <span className="label-text">End Date</span>
              </label>

              <div className="border rounded-lg border-grey-400 border-t-3">
                <div className="input-group input-group py-2 max-w-md mx-auto">
                  <span className="input-group-text" id="end-date-time"></span>
                  <input
                    type="datetime-local"
                    id="endDate"
                    className="form-control"
                    v-model="endDateTime"
                    aria-describedby="end-date-time"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="button"
                onClick={makeBooking}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
