import { useEffect, useRef } from 'react';
import QRious from 'qrious';
import toast from 'react-hot-toast';

export default function Referrals() {
  const scriptURL1 = 'https://script.google.com/macros/s/AKfycbzZ_hmbb87M0PlD61GW2Ijkmge4svQ6ANXGOZNdm7hamE0sV4Y2WJxeYKAwJ2GDzKlZqw/exec';
  const formRef = useRef(null);
  const loadingIndicatorRef = useRef(null);
  const customerIdRef = useRef(null);
  const customerLinkRef = useRef(null);
  const qrCodeCanvasRef = useRef(null);
  const downloadLinkRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const loadingIndicator = loadingIndicatorRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      loadingIndicator.style.display = 'block';
      fetch(scriptURL1, { method: 'POST', body: new FormData(form) })
        .then(() => {
          loadingIndicator.style.display = 'none';
          toast.success("Thank you! your form is submitted successfully.");
          form.reset();
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
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('customerid');
    if (customerIdRef.current) {
      customerIdRef.current.textContent = customerId;
    }
    if (customerLinkRef.current) {
      customerLinkRef.current.textContent = window.location.href;
      customerLinkRef.current.href = window.location.href;
    }

    if (qrCodeCanvasRef.current) {
      const qr = new QRious({
        element: qrCodeCanvasRef.current,
        value: window.location.href,
        size: 150,
      });

      if (downloadLinkRef.current) {
        downloadLinkRef.current.addEventListener('click', function() {
          const qrCodeDataURL = qr.toDataURL();
          const link = document.createElement('a');
          link.href = qrCodeDataURL;
          link.download = 'qrCode.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      }
    }
  }, []);

  const generateReferral = () => {
    const referralPersonName = document.getElementById('referralPersonName')?.value;
    const referralPersonDOB = document.getElementById('dob')?.value;

    if (!referralPersonName || !referralPersonDOB) {
      console.error('Name or DOB is missing.');
      return;
    }

    const nameInitials = referralPersonName.substring(0, 3).toUpperCase();
    const dobParts = referralPersonDOB.split('-');
    if (dobParts.length !== 3) {
      console.error('Invalid DOB format.');
      return;
    }

    const dob = dobParts.reverse().join('').substring(0, 8);
    const referralID = 'REF-' + nameInitials + dob + '-METRO';
    const referralIDElement = document.getElementById('referralID');
    if (referralIDElement) {
      referralIDElement.value = referralID;
    } else {
      console.error('Element with id "referralID" not found.');
    }
  };

  return (
    <section>
      <div className="max-w-[70rem] mx-auto p-2">
        <div className="py-5">
          <h1 className="text-3xl font-semibold text-center text-blue-500">Insurance Referral System</h1>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome <span className="text-blue-500" ref={customerIdRef}></span>
            </h1>
          </div>
        </div>
        <div className="py-5 space-y-5">
          {/* Link  */}
          <div className="flex-wrap">
            <p className="mr-4 font-semibold text-blue-500" id="linkText">
              <span className="text-black">Link:</span> <a href="#" id="customerLink" target="_blank" ref={customerLinkRef}></a>
            </p>
          </div>

          {/* QR Code */}
          <canvas id="qrCodeCanvas" className="inline-block" ref={qrCodeCanvasRef}></canvas>
          {/* Download Link */}
          <a href="#" id="downloadLink" download="qrCode.png" className="text-blue-500" ref={downloadLinkRef}>
            Download QR Code
          </a>
        </div>

        <form id="submit-to-google-sheet3" ref={formRef}>
          <div className="grid grid-cols-1 gap-5 py-5 lg:grid-cols-2">
            <div>
              <label htmlFor="referredby">Referred By:</label>
              <input
                type="text"
                id="referredby"
                name="referredby"
                placeholder="Enter your Customer ID (e.g Enter ID after Welcome (above))"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="referralPersonName">Referral Person&apos;s Name:</label>
              <input
                type="text"
                id="referralPersonName"
                name="referralPersonName"
                placeholder="Enter Referral's Name"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="dob">Referral Person&apos;s DOB:</label>
              <input
                type="date"
                id="dob"
                name="referralPersondob"
                placeholder="Enter Referral's DOB"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="referralpersonEmail">Email:</label>
              <input
                type="email"
                id="referralpersonEmail"
                name="referralpersonEmail"
                placeholder="Enter Email address"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="referralMobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="referralMobileNumber"
                name="referralMobileNumber"
                placeholder="Enter Mobile Number"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="referralAddress">Address:</label>
              <input
                type="text"
                id="referralAddress"
                name="referralAddress"
                placeholder="Enter Address"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
              />

              <label htmlFor="referralID">Referral ID:</label>
              <input
                type="text"
                id="referralID"
                name="referralID"
                placeholder="Click Generate Referral ID"
                className="w-full p-3 my-3 bg-gray-100 rounded-md"
                required
                readOnly
              />

              <button
                type="button"
                className="p-3 bg-[#024BA2] text-white rounded-lg my-3 mx-2"
                onClick={generateReferral}
              >
                Generate Referral ID
              </button>
              <button
                type="submit"
                value="Submit"
                id="submit"
                className="p-3 text-white bg-[#121D32] rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="loading2" ref={loadingIndicatorRef} style={{ display: 'none' }}>
          <img src="/images/772.gif" alt="Loading..." />
        </div>
      </div>
    </section>
  );
}
