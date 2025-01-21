import React, { useRef, useState, useEffect } from "react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch(
        "https://dental-clinic-r2gp.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Please try again.");
      }

      setIsSent(true);
      form.current.reset();

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-2 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-md">
        <div className="bg-slate-100 md:col-span-4 p-7 text-gray-900">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Let's <span className="text-[#3b82f6]">Schedule</span> your{" "}
            <span className="text-[#3b82f6]">Smile Care</span>
          </h3>
          <p className="mt-4 leading-6 text-gray-950">
            Book an appointment with our doctor, we are ready and waiting to
            serve you.
          </p>

          <p className="my-4 uppercase font-semibold border-b border-b-black pb-2">
            Clinic Hours
          </p>
          <p className="font-normal mb-3">Monday - Saturday </p>
          <p className="font-normal ">
            &nbsp;&nbsp;&nbsp;&nbsp;Morning:{" "}
            <span className="font-semibold">10:00 - 02:00</span>
          </p>
          <p className="mb-4">
            &nbsp;&nbsp;&nbsp;&nbsp;Evening :
            <span className="font-semibold">05:00 - 09:00</span>
          </p>
          <p className="mb-8">
            Sunday :<span className="font-semibold"> Closed</span>
          </p>
          <p className=" mt-16 flex items-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="hover:text-gray-500">
              <a href="tel:+919730031147">+91 9730031147</a>
            </span>
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="hover:text-gray-500 mb-2">
              <a href="mailto:gurunanakdental.apt@gmail.com">
                gurunanakdental.apt@gmail.com
              </a>
            </span>
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="md:col-span-8 px-10 pt-4 pb-3"
        >
          <div className="mb-3 " name="contact" id="contact">
            <label
              htmlFor="user_name"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_phone"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  name="user_phone"
                  id="user_phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_email"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
          </div>

          <div className="-mx-0 mb-3">
            <label
              htmlFor="chosen_service"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Dental Services
            </label>
            <select
              name="chosen_service"
              id="chosen_service"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="checkup_Consultation">
                Dental Check-ups and Consultation
              </option>
              <option value="x-rays">X-rays</option>
              <option value="fillings">Fillings</option>
              <option value="crowns_Bridges">Crowns and Bridges</option>
              <option value="RCT">Root Canal Treatment</option>
              <option value="teethWhitening">
                Cleaning and Teeth Whitening
              </option>
            </select>
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-3">
                <label
                  for="user_date"
                  class="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="user_date"
                  id="user_date"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-3">
                <label
                  for="user_time"
                  class="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="user_time"
                  id="user_time"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="w-full mb-3">
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              for="user_message"
            >
              Doctor Note
            </label>
            <textarea
              id="user_message"
              name="user_message"
              rows="2"
              className="resize-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div className="flex justify-between items-center mb-3">
            {isSent && (
              <p className="text-green-500 font-medium">
                Your request has been received! Our team will confirm the
                details with you soon.
              </p>
            )}
            {error && <p className="text-red-500 font-medium">{error}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`w-full py-3 px-6 rounded-md text-white text-base font-medium ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#3b82f6] hover:bg-[#2563eb] focus:ring-4 focus:ring-[#6A64F1]"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Booking appointment..." : "Request Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
