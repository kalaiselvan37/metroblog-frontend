/* eslint-disable react/prop-types */
// import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";

export default function BooknowModal(props) {
    const { isOpen, onClose } = props;
    const formRef = useRef(null);
    const loadingIndicatorRef = useRef(null);
    const datetimeRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzaYT6r255hzr7UiC4U5u3-o-8znYZqV54LNMmvHdc5zNhFHbYU-eGT7JetGa_SxMHr/exec';
        const form = formRef.current;
        const loadingIndicator = loadingIndicatorRef.current;

        const handleSubmit = (e) => {
            e.preventDefault();
            loadingIndicator.style.display = 'block';
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(() => {
                    loadingIndicator.style.display = 'none';
                    alert("Thank you! Your form is submitted successfully.");
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    loadingIndicator.style.display = 'none';
                });
        };

        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, [isOpen]);

    // useEffect(() => {
    //     if (isOpen) {
    //         flatpickr(datetimeRef.current, {
    //             enableTime: true,
    //             dateFormat: "Y-m-d H:i",
    //             minDate: "today",
    //             minTime: new Date().toLocaleTimeString().split(":").slice(0, 2).join(":")
    //         });
    //     }
    // }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div id="modal" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0">
                    <div className="relative w-full max-w-lg max-h-full p-4">
                        <div className="relative text-black rounded-lg shadow bg-[#172848]" style={{ boxShadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)' }}>
                            <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#004CA1]">
                                <h3 className="text-2xl font-bold text-white">Book a Free Call Now</h3>
                                <button onClick={onClose} type="button" className="end-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="max-w-xl p-4 mx-auto rounded-md">
                                <form name="submit-to-google-sheet" ref={formRef}>
                                    <label htmlFor="datetime1" className="text-lg text-white">Select Date & Time</label>
                                    <input type="datetime-local" id="datetime1" name="datetime" placeholder="Select the Date and Time" className="w-full p-3 my-3 rounded-md" ref={datetimeRef} required />
                                    <select name="Insurance" className="w-full p-3 rounded-md" required>
                                        <option value="">Select type of Insurance</option>
                                        <option value="Car Insurance">Car Insurance</option>
                                        <option value="Bike Insurance">Bike Insurance</option>
                                        <option value="Personal Accident">Personal Accident</option>
                                        <option value="Home Insurance">Home Insurance</option>
                                        <option value="Life Insurance">Life Insurance</option>
                                    </select>
                                    <input type="text" name="Full-name" placeholder="Full name" className="w-full p-3 my-3 rounded-md" required />
                                    <input type="email" name="Email" placeholder="Email address" className="w-full p-3 rounded-md" required />
                                    <input type="text" name="Contactnumber" placeholder="Mobile number" className="w-full p-3 my-3 rounded-md" required />
                                    <input type="text" name="Location" placeholder="Enter Address" className="w-full p-3 rounded-md" required />
                                    <div className="my-4">
                                        <button type="submit" value="Submit" id="submit" className="rounded-md p-2 w-fit bg-[#11B0C9] hover:bg-[#024BA2] text-white text-lg">Submit Now</button>
                                    </div>
                                </form>
                                <div className="loading1" ref={loadingIndicatorRef} style={{ display: 'none' }}>
                                    <img src="/images/772.gif" alt="Loading..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
