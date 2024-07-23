import { useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import toast from "react-hot-toast";

export default function Enquirysection() {
    const formRef = useRef(null);
    const loadingIndicatorRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzaYT6r255hzr7UiC4U5u3-o-8znYZqV54LNMmvHdc5zNhFHbYU-eGT7JetGa_SxMHr/exec';
        const form = formRef.current;
        const loadingIndicator = loadingIndicatorRef.current;

        const handleSubmit = (e) => {
            e.preventDefault();
            loadingIndicator.style.display = 'block';
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(() => {
                    loadingIndicator.style.display = 'none';
                    toast.success("Thank you! Your form is submitted successfully.")
                    form.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    loadingIndicator.style.display = 'none';
                });
        };
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
        return () => {
            if (form) {
                form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    return (
        <section className="relative" id="buyinsurance">
            <div className="relative flex">
                <div className="bg-[url(/images/get-a-quote-bg.jpg)] bg-no-repeat bg-cover h-[80vh] w-[65%]"></div>
                <div className="bg-[url(/images/Layer31.png)] bg-[#11B0C9] bg-no-repeat bg-cover h-[80vh] w-[35%]">
                    <div className="flex items-center justify-center h-[70vh] text-4xl w-[70%] mx-auto">
                        <p className="hidden font-bold text-white xl:block">Get peace of mind in just minutes. Fill the form to get your personalized insurance quote with Metro Insurance.</p>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-2 xl:ml-[200px]">
                    <div className="p-6 bg-[#172848] shadow-md xl:w-[30%] rounded-lg">
                        <div className="flex">
                            <span className="bg-[#024BA2] w-4 rounded-l-md"></span>
                            <h1 className="p-3 text-xl font-semibold text-black bg-white w-fit rounded-r-md">Buy Insurance</h1>
                        </div>
                        <div className="my-5">
                            <form name="submit-to-google-sheet1" ref={formRef}>
                                <label htmlFor="datetime1" className="text-lg text-white">Select Date & Time</label>
                                <Flatpickr
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date[0])}
                    options={{
                      enableTime: true,
                      dateFormat: "Y-m-d H:i",
                      minDate: "today",
                      minTime: new Date().toLocaleTimeString().split(":").slice(0, 2).join(":")
                    }}
                    className="w-full p-3 my-3 rounded-md"
                    placeholder="Enter the Date and Time"
                  />
                                <select name="Insurance" className="w-full p-3 rounded-md" required>
                                    <option value="">Select type of Insurance</option>
                                    <option value="Car Insurance">Car Insurance</option>
                                    <option value="Bike Insurance">Bike Insurance</option>
                                    <option value="Personal Accident">Personal Accident</option>
                                    <option value="Home Insurance">Home Insurance</option>
                                    <option value="Life Insurance">Life Insurance</option>
                                </select>
                                <input type="text" name="Full-name" placeholder="Full name" className="w-full p-3 my-3 rounded-md" required />
                                <input type="email" name="Email" placeholder="Enter Email address" className="w-full p-3 rounded-md" required />
                                <input type="text" name="Contactnumber" placeholder="Enter Mobile number" className="w-full p-3 my-3 rounded-md" required />
                                <input type="text" name="Location" placeholder="Enter your Address" className="w-full p-3 rounded-md" required />
                                <div className="my-4">
                                    <button type="submit" value="Submit" id="submit" className="rounded-md p-2 w-fit bg-[#007bff] hover:bg-[#024BA2] text-white text-lg">Submit Now</button>
                                </div>
                            </form>
                            <div className="loading1" ref={loadingIndicatorRef} style={{ display: 'none' }}>
                                <img src="/images/772.gif" alt="Loading..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
