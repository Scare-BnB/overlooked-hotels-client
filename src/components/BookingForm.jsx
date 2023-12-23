import { Link } from "react-router-dom";


export default function BookingForm() {
  return (
    <div className="hero max-h-screen py-64 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-4xl text-center mb-8">Bookings</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>{" "}
              <input
                type="firstname"
                placeholder="First name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>{" "}
              <input
                type="lastname"
                placeholder="Last name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Start Date</span>
              </label>
              <div class="border rounded-lg border-grey-400 border-t-3" > 
                <div className="input-group input-group py-2 max-w-md mx-auto">
                <span className="input-group-text" id="start-date-time">
                </span>
                <input
                  type="datetime-local"
                  className="form-control"
                  v-model="startDateTime"
                  aria-describedby="start-date-time"
                />
                </div>
              </div>
              <label className="label">
                <span className="label-text">End Date</span>
              </label>
              <div class="border rounded-lg border-grey-400 border-t-3" > 
                <div className="input-group input-group py-2 max-w-md mx-auto">
                <span className="input-group-text" id="end-date-time">
                </span>
                <input
                  type="datetime-local"
                  className="form-control"
                  v-model="endDateTime"
                  aria-describedby="end-date-time"
                />
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="button">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
