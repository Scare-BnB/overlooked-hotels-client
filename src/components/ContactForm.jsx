export default function ContactForm() {
  return (
    <div className="hero max-h-screen py-64 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="message"
                placeholder="Type message here"
                className="input input-bordered h-40"
                required
              />
            </div>
            <div className="form-control"></div>
            <div className="form-control mt-8">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">
            If you wish to get in contact with us, please write a message in the
            form and hit submit. We will get back to you shortly.
          </p>
          <div className="flex items-center mt-5 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              +44 1234567890
            </div>
          </div>
          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              jack@overlookedhotels.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
