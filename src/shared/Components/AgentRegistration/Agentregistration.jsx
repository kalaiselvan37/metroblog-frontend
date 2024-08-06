import { useEffect, useRef } from "react";

export default function Agentregistration() {
  const formRef = useRef(null);
  const loadingIndicatorRef = useRef(null);

  const generateCustomerId = () => {
    const fullName = document.getElementById('FullName').value;
    const dob = document.getElementById('dob').value;
    const nameInitials = fullName.substring(0, 3).toUpperCase();
    const dobReversed = dob.split('-').reverse().join('').substring(0, 8);
    const customerId = `${nameInitials}${dobReversed}-METRO`;
    document.getElementById('customerid').value = customerId;
    return customerId;
  };

  const validateAadharFormat = (aadharNumber) => {
    const aadharRegex = /^\d{0,4}-?\d{0,4}-?\d{0,4}$/;
    return aadharRegex.test(aadharNumber);
  };

  const formatAadharNumber = (input) => {
    const value = input.value.replace(/\D/g, '');
    const formattedValue = value.slice(0, 12).replace(/(\d{4})(\d{0,4})?(\d{0,4})?/, (match, p1, p2, p3) => {
      return [p1, p2 ? '-' + p2 : '', p3 ? '-' + p3 : ''].join('');
    });
    input.value = formattedValue;
  };

  useEffect(() => {
    const aadharInput = document.getElementById('aadharnumber');
    const handleAadharInput = (event) => {
      const input = event.target;
      formatAadharNumber(input);
      if (!validateAadharFormat(input.value)) {
        input.setCustomValidity('Please enter a valid Aadhar number in the format 0000-0000-0000');
      } else {
        input.setCustomValidity('');
      }
    };

    aadharInput.addEventListener('input', handleAadharInput);

    return () => {
      aadharInput.removeEventListener('input', handleAadharInput);
    };
  }, []);

  useEffect(() => {
    const form = formRef.current;
    const loadingIndicator = loadingIndicatorRef.current;
    const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyKPRDvBsUgFjsReu1v2kZllTHXQeEm_6d1f8WW3XzIBmsESWDwyQpic_Tt73u-0aTL0w/exec';

    const handleSubmit = (e) => {
      e.preventDefault();
      loadingIndicator.style.display = 'block';
      const customerid = generateCustomerId();
      const scriptURLWithParams = scriptURL1 + '?customerid=' + encodeURIComponent(customerid);
      fetch(scriptURLWithParams, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(() => {
          loadingIndicator.style.display = 'none';
          alert("Thank you! Your form is submitted successfully.");
          window.location.href = "/referrals?customerid=" + customerid;
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

  return (
    <div>
      <section className="py-10">
        <div className="max-w-[60rem] mx-auto p-2">
          <div className="py-5">
            <h1 className="text-3xl font-semibold text-center text-blue-500">Agent Registration</h1>
          </div>

          <form id="submit-to-google-sheet4" ref={formRef}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div>
                <label htmlFor="FullName">Full Name:</label>
                <input
                  type="text"
                  id="FullName"
                  name="FullName"
                  placeholder="Enter Your FullName"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="Qualification">Educational Qualification:</label>
                <input
                  type="text"
                  id="Qualification"
                  name="Qualification"
                  placeholder="Enter Educational Qualification"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="Email">Email:</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter Email address"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="mobilenumber">Mobile Number:</label>
                <input
                  type="text"
                  id="mobilenumber"
                  name="mobilenumber"
                  placeholder="Enter Contact Number"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="address">Residential Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  placeholder="Enter Email address"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                >
                  <option value="">Select the gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>

                <label htmlFor="dob">Date Of Birth:</label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="Select Date of Birth"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="aadharnumber">Aadhar Number:</label>
                <input
                  type="text"
                  id="aadharnumber"
                  name="aadharnumber"
                  placeholder="Enter Aadhar Number"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="pannumber">PAN Number:</label>
                <input
                  type="text"
                  id="pannumber"
                  name="pannumber"
                  placeholder="Enter PAN Number"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                />

                <label htmlFor="customerid">Customer ID:</label>
                <input
                  type="text"
                  id="customerid"
                  name="customerid"
                  placeholder="Click Generate Customer ID"
                  className="w-full p-3 my-3 bg-gray-100 rounded-md"
                  required
                  readOnly
                />

                <button
                  type="button"
                  className="p-3 bg-[#024BA2] text-white rounded-lg my-3 mx-3"
                  onClick={generateCustomerId}
                >
                  Generate Customer ID
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
    </div>
  );
}
