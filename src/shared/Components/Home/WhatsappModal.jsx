/* eslint-disable react/prop-types */
import {useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function WhatsappModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);

  function sendFormData(event) {
    event.preventDefault();
    var formData = new FormData(document.forms['submit-to-google-sheet3']);
    var name = formData.get('Full-name1');
    var email = formData.get('Email1');
    var insurance = formData.get('Insurance1');
    var message = formData.get('message1');
    var Contactnumber = formData.get('Contactnumber1');
    var Location = formData.get('Location1');
    var Date = formData.get('dateandtime');
  
    var phonenumber = "9444316561"; 
    var url = "https://wa.me/" + phonenumber + "?text=" +
      "*Name:* " + name + "%0a" +
      "*Email:* " + email + "%0a" +
      "*Insurance:* " + insurance + "%0a" +
      "*Message:* " + message + "%0a" +
      "*Mobile Number:* " + Contactnumber + "%0a" +
      "*Location:* " + Location + "%0a" +
      "*Date and Time:* " + Date + "%0a" +
      "%0a%0a";
  
    window.open(url, '_blank').focus();
  }

  return (
    <>
      {isOpen && (
        <div id="modal1" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0">
          <div className="relative w-full max-w-lg max-h-full p-4">
            <div className="relative text-black rounded-lg shadow bg-[#172848]" style={{ boxShadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)' }}>
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#004CA1]">
                <h3 className="text-2xl font-bold text-white">
                  Contact Us on WhatsApp Now!
                </h3>
                <button onClick={onClose} type="button" className="end-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="max-w-xl p-4 mx-auto rounded-md">
                <form name="submit-to-google-sheet3" onSubmit={sendFormData}>
                  <label htmlFor="datetime1" className="text-lg text-white">Select Date & Time</label>
                  <Flatpickr
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date[0])}
                    name="dateandtime"
                    options={{
                      enableTime: true,
                      dateFormat: "Y-m-d H:i",
                      minDate: "today",
                      minTime: new Date().toLocaleTimeString().split(":").slice(0, 2).join(":")
                    }}
                    className="w-full p-3 my-3 rounded-md"
                    placeholder="Enter the Date and Time"
                  />
                  <select name="Insurance1" className="w-full p-3 rounded-md" required>
                    <option value="">Select type of Insurance</option>
                    <option value="Car Insurance">Car Insurance</option>
                    <option value="Bike Insurance">Bike Insurance</option>
                    <option value="Personal Accident">Personal Accident</option>
                    <option value="Home Insurance">Home Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                  </select>
                  <input type="text" name="Full-name1" placeholder="Full name" className="w-full p-3 my-3 rounded-md" required />
                  <input type="email" name="Email1" placeholder="Email address" className="w-full p-3 rounded-md" required />
                  <input type="text" name="Contactnumber1" placeholder="Enter Mobile number" className="w-full p-3 my-3 rounded-md" required />
                  <input type="text" name="Location1" placeholder="Enter your Address" className="w-full p-3 rounded-md" required />
                  <textarea name="message1" className="w-full p-3 my-3 rounded-md" placeholder="Leave your Message"></textarea>
                  <div className="my-4">
                    <button type="submit" value="Submit" id="submit" className="rounded-md p-2 w-20 bg-[#11B0C9] hover:bg-[#024BA2] text-white text-lg">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
