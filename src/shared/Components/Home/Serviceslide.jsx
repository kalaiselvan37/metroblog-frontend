import { useEffect } from "react"
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Serviceslide () {

    useEffect(() =>{    
         new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay : true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },           
            breakpoints: {
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            },
          });
    },[])

    return(
        <section className="bg-[url(/images/pattern-png-transparent-4.png)] py-10 bg-cover bg-no-repeat lg:h-[70vh] p-2" id="services">
        <div className="">
        <div className="flex items-center justify-center">
          <div className="flex">
            <span className="bg-[#024BA2] rounded-l-md w-3"></span>
            <h1 className="p-3 text-xl text-white bg-black rounded-r-md w-fit">OUR ALL SERVICES</h1>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-bold text-center lg:text-5xl">What We Are Offering</h1>
        </div>
        <div className="max-w-[75rem] mx-auto swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
            <div className="bg-[#11B0C9] p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <img src="/images/crash.png" alt="" className="w-16 h-16 rounded-full"/>
                </div>
              </div>
              <p className="my-3 text-xl font-semibold text-center">CAR INSURANCE</p>
              <p className="leading-7 text-center">Protect your vehicle and your peace of mind with our comprehensive car insurance
                 coverage. From liability protection to collision and comprehensive coverage, we&lsquo;ve got you covered on the road.
              </p>
              <div className="flex items-center justify-center py-5">
                <a href="#buyinsurance">
                  <button className="p-3 text-white bg-black hover:bg-[#007bff] rounded-lg">More Details</button>
                </a>
              </div>
            </div>
          </div> 
          <div className="swiper-slide">
            <div className="bg-[#11B0C9] p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <img src="/images/motorcycle.png" alt="" className="w-16 h-16 rounded-full"/>
                </div>
              </div>
              <p className="my-3 text-xl font-semibold text-center">BIKE INSURANCE</p>
              <p className="leading-7 text-center">Hit the road with confidence knowing your motorcycle is protected with our customizable 
                bike insurance solutions. Whether you&lsquo;re a weekend rider or a daily commuter, we offer coverage options tailored to your
                 needs.
              </p>
              <div className="flex items-center justify-center py-5">
                <a href="#buyinsurance">
                  <button className="p-3 text-white bg-black hover:bg-[#007bff] rounded-lg">More Details</button>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-[#11B0C9] p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <img src="/images/donation.png" alt="" className="w-16 h-16 rounded-full"/>
                </div>
              </div>
              <p className="my-3 text-xl font-semibold text-center">PERSONAL ACCIDENT</p>
              <p className="leading-7 text-center">Safeguard yourself and your loved ones against unforeseen accidents with our personal 
                accident insurance. With coverage for medical expenses, and more, we provide financial security when you need it most.
              </p>
              <div className="flex items-center justify-center py-5">
                <a href="#buyinsurance">
                  <button className="p-3 text-white bg-black hover:bg-[#007bff] rounded-lg">More Details</button>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-[#11B0C9] p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <img src="/images/real-estate.png" alt="" className="w-16 h-16 rounded-full"/>
                </div>
              </div>
              <p className="my-3 text-xl font-semibold text-center">HOME INSURANCE</p>
              <p className="leading-8 text-center">Protect your most valuable asset with our comprehensive home insurance policies. 
                From coverage for your dwelling and personal belongings to liability protection, we offer peace of mind for homeowners.
              </p>
              <div className="flex items-center justify-center py-5">
                <a href="#buyinsurance">
                  <button className="p-3 text-white bg-black hover:bg-[#007bff] rounded-lg">More Details</button>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-[#11B0C9] p-3 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <img src="/images/heart.png" alt="" className="w-16 h-16 rounded-full"/>
                </div>
              </div>
              <p className="my-3 text-xl font-semibold text-center">LIFE INSURANCE</p>
              <p className="leading-7 text-center">Ensure your loved ones are taken care of financially in the event of your passing with our life insurance policies. With options for term life, whole life, and more, we provide protection and peace of mind for the future.
              </p>
              <div className="flex items-center justify-center py-5">
                <a href="#buyinsurance">
                  <button className="p-3 text-white bg-black hover:bg-[#007bff] rounded-lg">More Details</button>
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="lg:my-10">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      </section>
    )
}