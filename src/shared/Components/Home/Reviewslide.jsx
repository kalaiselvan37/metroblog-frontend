import { useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Reviewslide () {

    useEffect(() =>{    
        new Swiper(".mySwiper1", {
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
        <>
         <div className="my-10 text-center">
        <h1 className="text-2xl font-bold text-center lg:text-5xl">What our clients say&lsquo;s?</h1>
      </div>
      <div className="max-w-[75rem] mx-auto">
        <div className="swiper mySwiper1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-[#11B0C9] p-5 rounded-md">
                <div className="flex">
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{color: '#f7f7f7' }}></i></p>
                </div>
                <div>
                  <p className="leading-6 ">As a small business owner in Chennai, 
                    finding the right insurance coverage was crucial. The team at Metro Insurance guided me 
                    through the process with patience and expertise. I highly recommend Metro Insurance for affordable insurance services.</p>
                </div>
                <div className="relative">
                  <p className="h-1 mt-8 bg-white"></p>
                  <div className="absolute right-5 -top-4">
                    <img src="/images/right-quotes.png" alt="" className="w-10 h-10"/>
                  </div>
                </div>
                <div className="flex my-5">
                  <img src="/images/OIP.jpg" alt="" className="w-16 h-16"/>
                  <p className="mx-5 text-xl font-semibold">Ramesh Kumar P</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-[#11B0C9] p-5 rounded-md">
                <div className="flex">
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                </div>
                <div>
                  <p className="leading-6">Metro Insurance made getting car insurance simple and stress-free. 
                    Their team provided excellent guidance and competitive rates. They deal insurance in good.
                    I highly recommend Metro Insurance for reliable car insurance services.</p>
                </div>
                <div className="relative">
                  <p className="h-1 mt-8 bg-white"></p>
                  <div className="absolute right-5 -top-4">
                    <img src="/images/right-quotes.png" alt="" className="w-10 h-10"/>
                  </div>
                </div>
                <div className="flex my-5">
                  <img src="/images/OIP.jpg" alt="" className="w-16 h-16"/>
                  <p className="mx-5 text-xl font-semibold">Chandru T</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-[#11B0C9] p-5 rounded-md">
                <div className="flex">
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star-half-stroke" style={{ color: '#FFD43B' }}></i></p> 
                </div>
                <div>
                  <p className="leading-6">Metro Insurance provides comprehensive coverage with efficient claims processing, 
                    ensuring peace of mind for policyholders.Their customer service is attentive and knowledgeable.
                    Metro Insurance is a top choice for safeguarding your assets.</p>
                </div>
                <div className="relative">
                  <p className="h-1 mt-8 bg-white"></p>
                  <div className="absolute right-5 -top-4">
                    <img src="/images/right-quotes.png" alt="" className="w-10 h-10"/>
                  </div>
                </div>
                <div className="flex my-5">
                  <img src="/images/OIP.jpg" alt="" className="w-16 h-16"/>
                  <p className="mx-5 text-xl font-semibold">Hariharan S</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-[#11B0C9] p-5 rounded-md">
                <div className="flex">
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                  <p><i className="fa-solid fa-star-half-stroke" style={{ color: '#FFD43B' }}></i></p> 
                </div>
                <div>
                  <p className="leading-6">Metro Insurance provides good service with comprehensive 
                    coverage options and quick claims processing. Their knowledgeable and attentive customer 
                    service ensures a smooth and stress-free experience. Recommended for anyone seeking reliable insurance protection.</p>
                </div>
                <div className="relative">
                  <p className="h-1 mt-8 bg-white"></p>
                  <div className="absolute right-5 -top-4">
                    <img src="/images/right-quotes.png" alt="" className="w-10 h-10"/>
                  </div>
                </div>
                <div className="flex my-5">
                  <img src="/images/OIP.jpg" alt="" className="w-16 h-16"/>
                  <p className="mx-5 text-xl font-semibold">Karthick P</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>  */}
        </div>
      </div>
        </>
    )
}