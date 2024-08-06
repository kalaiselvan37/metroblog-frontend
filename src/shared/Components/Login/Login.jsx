/* eslint-disable react/prop-types */
export default function Login(props) {

  const {handlechange,handlelogin} = props;

  return (

    <div className="flex items-center justify-center w-full h-screen bg-white bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/family-moving-using-boxes.jpg')" }}
    >
      <div className="px-16 py-10 bg-gray-800 bg-opacity-50 shadow-lg rounded-xl backdrop-blur-md max-sm:px-8">
        <div className="text-white ">
          <div className="flex flex-col items-center mb-5">
            <img src="/images/Metro_Logo.jpg" width="150" alt="" className="mb-3 rounded-xl" />
            <h1 className="mb-2 text-xl">Welcome to</h1>
            <h1 className="mb-2 text-xl">Metro Insurance Blogs</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handlelogin}>
            <div className="mb-4 text-lg" >
              <input className="px-6 py-2 text-center bg-blue-500 bg-opacity-50 border-none shadow-lg outline-none rounded-3xl text-inherit placeholder-slate-200 backdrop-blur-md"
                type="text" onChange={handlechange} name="Email" id="Email " placeholder="Enter your Email" />
            </div>

            <div className="mb-4 text-lg">
              <input className="px-6 py-2 text-center bg-blue-500 bg-opacity-50 border-none shadow-lg outline-none rounded-3xl text-inherit placeholder-slate-200 backdrop-blur-md"
                type="Password" onChange={handlechange} name="Password" id="Password" placeholder="*********" />
            </div>
            <div className="flex justify-center mt-8 text-lg text-black">
              <button type="submit" className="px-10 py-2 text-white transition-colors duration-300 bg-[#004CA1] bg-opacity-50 shadow-xl rounded-3xl backdrop-blur-md hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}