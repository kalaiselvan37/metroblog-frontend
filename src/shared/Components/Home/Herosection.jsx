import { useState } from 'react';
import BooknowModal from './BooknowModal';
import WhatsappModal from './WhatsappModal';
import Serviceslide from './Serviceslide';
import Reviewslide from './Reviewslide';
import Enquirysection from './Enquirysection';
import { useInsuranceQuery } from '../../services/Insurancepdf/insurancepdfs';



export default function Herosection() {
  const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleBookNowModalOpen = () => {
    setIsBookNowModalOpen(true);
  };

  const handleBookNowModalClose = () => {
    setIsBookNowModalOpen(false);
  };

  const handleWhatsAppModalOpen = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleWhatsAppModalClose = () => {
    setIsWhatsAppModalOpen(false);
  };

  const {
    insuranceType,
    option1,
    option2,
    options1,
    options2,
    handleInsuranceTypeChange,
    handleOption1Change,
    handleOption2Change,
    handleCheckNow,
  } = useInsuranceQuery();

  return (
    <div>
      <section className="bg-[url(/images/family-moving-using-boxes.jpg)] bg-cover h-[88vh] bg-no-repeat" id="home">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center mx-10 my-44">
              <div className="space-y-6 ">
                <p className="text-2xl font-bold lg:text-6xl text-[#004CA1]">THINK FUTURE</p>
                <p className="text-2xl font-bold lg:text-6xl text-[#004CA1]">THINK OUT OF BOX</p>
                <button className="p-3 text-white bg-[#121D32] rounded-lg hover:bg-black text-lg hover:scale-105 transition-transform duration-300 ease-in-out" onClick={handleBookNowModalOpen}>
                  <i className="mr-2 fa-solid fa-mobile-screen-button fa-lg"></i>Book a Call
                </button>
                <button className="p-3 text-lg text-white transition-transform duration-300 ease-in-out bg-green-500 rounded-lg lg:mx-3 hover:bg-green-700 hover:scale-105" onClick={handleWhatsAppModalOpen}>
                  <i className="mr-2 fa-brands fa-whatsapp fa-lg"></i>WhatsApp us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BooknowModal isOpen={isBookNowModalOpen} onClose={handleBookNowModalClose} />
      <WhatsappModal isOpen={isWhatsAppModalOpen} onClose={handleWhatsAppModalClose} />
      <section className="bg-[url(/images/pattern-png-transparent-4.png)] lg:h-[50vh] bg-cover bg-no-repeat flex items-center py-10">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 gap-5 p-2 lg:grid-cols-3">

          <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute top-0 right-0 flex items-center justify-center w-32 overflow-hidden rounded-bl-full h-28 bg-[#121D32]">
              <img className="object-cover w-14" src="/images/hand-holding-usd.png" alt="Image"/>
            </div> 
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h1 className="lg:text-[27px] text-xl font-bold">Save your Money</h1>
              <p className="my-10 leading-loose">Our primary goal at METRO is to <br/> empower our clients with the tools and resources they need to 
                make informed decisions about their insurance coverage while saving money in the process.From auto and home 
                insurance to life and health coverage, we tailor our solutions to fit your unique needs and budget. </p>
            </div>
          </div>
          
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute top-0 right-0 flex items-center justify-center w-32 overflow-hidden rounded-bl-full h-28 bg-[#121D32]">
                <img className="object-cover w-14" src="/images/money-transfer-coin-arrow.png" alt="Image"/>
            </div>            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h1 className="text-xl font-bold lg:text-3xl">Get free quote</h1>
              <p className="my-10 leading-loose">Whether you&lsquo;re in the market for <br/> auto, home, life, or any other type of insurance, our user-friendly online quote 
                tool makes it easy to get started. Simply provide us with some basic information about yourself and your coverage 
                preferences, and we&lsquo;ll generate a personalized quote for you in minutes.</p>
            </div>
          </div>
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute top-0 right-0 flex items-center justify-center w-32 overflow-hidden rounded-bl-full h-28 bg-[#121D32]">
              <img className="object-cover w-14" src="/images/time-fast.png" alt="Image"/>
            </div> 
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h1 className="text-xl font-bold lg:text-3xl">Fast & reliable</h1>
              <p className="my-10 leading-loose">With our streamlined processes <br/> and cutting-edge technology, we make it easy for you to get the coverage you need 
                quickly and efficiently. Whether you&lsquo;re applying for a new policy, claim, or simply seeking information, 
                our dedicated team is here to ensure a smooth and hassle-free experience every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#11B0C9] lg:h-[80vh] flex items-center p-10" id="aboutus">
      <div className="max-w-[75rem] mx-auto">
        <div className="grid grid-cols-1 gap-5 p-2 mb-5 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute p-5 bg-[#024BA2] -bottom-10 -left-10 rounded-lg">
              <p className="text-xl font-bold text-center text-white">15+</p>
              <p className="text-xl font-semibold text-white">YEARS OF <br/>EXPERIENCE</p>
            </div>
            <div className="flex items-center justify-center">
              <img className="lg:h-[65vh] max-w-full rounded-lg" src="/images/photo-smiling-young-parents-with-little-child-lying-floor-isolated.jpg" alt=""/>
            </div>
          </div>
          <div className="my-9">
            <div className="flex">
              <span className="w-3 bg-white rounded-l-md"></span>
              <h1 className="p-2 font-semibold text-white bg-black rounded-r-md w-fit">About Our company</h1>
            </div>
            <p className="py-4 text-4xl font-bold">Providing the Best Insurance Policy to Customers</p>
            <p className="py-4 text-lg leading-7">Welcome to <span className="font-semibold">METRO INSURANCE</span>, where we believe in safeguarding your 
              future with comprehensive insurance solutions tailored to your unique needs. Established with a mission to provide 
              reliable protection and exceptional service, we have been serving individuals, families, and businesses with integrity 
              and dedication. Backed by a team of experienced professionals, we bring a wealth of knowledge and expertise to the 
              table. We take the time to understand your specific needs and concerns, offering personalized advice and solutions 
              that align with your goals and budget. 
            </p>
            <div className="py-5">
              <div className="flex p-2 lg:mx-5 py-2 bg-white text-[#024BA2] rounded-lg w-fit">
                <p className="text-[17px] font-medium">100% Success Rate</p>
                <span className="w-1 mx-5 bg-black"></span>
                <p className="text-[17px] font-medium">1000+ Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Serviceslide id='services'/>
    <section>
      <div className="bg-[#121D32] xl:h-[39vh] p-2 ">
        <div className="max-w-[75rem] mx-auto py-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="">
              <div className="flex p-4 bg-white rounded-lg">
                <div className="bg-[#121D32] p-4 rounded-lg">
                  <img src="/images/clock-five.png" alt="" className="w-16 h-16"/>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <p className="text-2xl font-semibold text-[#121D32]">Renew Policy</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex p-4 bg-white rounded-lg">
                <div className="bg-[#121D32] p-4 w-fit rounded-lg">
                  <img src="/images/file-download.png" alt="" className="w-16 h-16"/>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <p className="text-2xl font-semibold text-[#121D32]">Download Policy <br/><span className="text-xl">Online</span></p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex p-4 bg-white rounded-lg">
                <div className="bg-[#121D32] p-4 w-fit rounded-lg">
                  <img src="/images/smile.png" alt="" className="w-16 h-16"/>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <p className="text-2xl font-semibold text-[#121D32]">10 Lacs + <br/><span className="text-xl">Happy Customers</span></p>
                </div>
              </div>
            </div>
            </div>
            <div className="items-center justify-center gap-4 my-5 lg:flex">
            <div className="">
              <div className="flex p-4 bg-white rounded-lg">
                <div className="bg-[#121D32] p-4 w-fit rounded-lg">
                  <img src="/images/google.png" alt="" className="w-16 h-16"/>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <p className="text-2xl font-semibold text-[#121D32]">4.9 Rating <br/><span className="text-xl">Rates on Google</span></p>
                </div>
              </div>
            </div>
            <div className="my-4 lg:my-0">
              <div className="flex p-4 bg-white rounded-lg">
                <div className="bg-[#121D32] p-4  rounded-lg">
                  <img src="/images/indian-rupee-sign.png" alt="" className="w-16 h-16"/>
                </div>
                <div className="flex items-center justify-center mx-4">
                  <p className="text-2xl font-semibold text-[#121D32]">1k + <br/><span className="text-xl">Claims Served</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[url(/images/pattern-png-transparent-4.png)] bg-cover bg-no-repeat min-h-screen py-10">
      <div className="">
        <div className="flex items-center justify-center">
          <div className="flex">
            <span className="bg-[#024BA2] rounded-l-md w-3"></span>
            <h1 className="p-3 text-xl text-white bg-black w-fit rounded-r-md">OUR INSURANCE PARTNERS</h1>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-bold text-center lg:text-5xl">Life & General Insurance Companies</h1>
        </div>
      </div>
      <div className="max-w-[60rem] mx-auto p-2">
        <div className="grid grid-cols-2 gap-4 px-2 lg:grid-cols-4 sm:grid-cols-3">
          <div>
            <img src="/images/insurance-companies/aadhiya-birla.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/birla-sunlife.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/kotak.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/NAVI-HEALTH-INSURANCE.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/zuno.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/Bajaj-Allianz-General-Insurance-Co.-Ltd.-1.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/icici-insurance.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/Life-Insurance-Corporation-of-India-IPO.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/sbi-insurance.png" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/shriram-gen.png" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/Tata_AIA_Life_Ins_New.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
          <div>
            <img src="/images/insurance-companies/digit.jpg" alt="" className="shadow-md h-28 w-52"/>
          </div>
        </div>
      </div>
      <section className="mt-10 bg-[#121D32] lg:h-[60vh]" id="insurancequery">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="">
            <img src="/images/family-insurance.png" alt="" className="lg:h-[60vh]"/>
          </div>
          <div className="lg:py-32">
            <div className="max-w-4xl mx-auto space-y-3">
              <h1 className="text-2xl font-bold text-center text-white lg:text-5xl">Want to know about Your Policy?</h1>
              <p className="text-lg text-center text-white lg:text-xl">Understand the benefits of your policy by reviewing the terms and conditions in clear language. Identify the strengths, weaknesses, and any missing features in your insurance coverage.</p>
            </div>
            <div className="p-2 mx-auto mt-5 max-w-fit">
              <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg">
                <div>
                  <select 
                    id="insuranceType" 
                    className="w-full p-3 border-2 rounded-xl"
                    value={insuranceType}
                    onChange={handleInsuranceTypeChange}
                  >
                    <option value="">Select Insurance</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Term Insurance">Term Insurance</option>
                  </select>
                </div>
                <div>
                  <select 
                    id="selectBox1" 
                    className="w-full p-3 border-2 rounded-xl"
                    value={option1}
                    onChange={handleOption1Change}
                  >
                    <option value="">Select an Option</option>
                    {options1.map((opt, index) => (
                      <option key={index} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select 
                    id="selectBox2" 
                    className="w-full p-3 border-2 rounded-xl"
                    value={option2}
                    onChange={handleOption2Change}
                  >
                    <option value="">Select an Option</option>
                    {options2.map((opt, index) => (
                      <option key={index} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <button 
                    id="checkNow" 
                    className="p-3 text-white bg-[#007bff] rounded-lg w-36"
                    onClick={handleCheckNow}
                  >
                    Check Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Reviewslide/>
      </section>
      <Enquirysection/>
    </div>
  );
}
