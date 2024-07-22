
function BookingDetail() {
 
  const iconMap = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -1.5 24 24" width="48" fill="currentColor"><path d="M7 20.565c-4.667-6.09-7-10.423-7-13a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>;
  return (
      <div className="relative bg-[#c71c30] rounded-xl w-full mb-[20vh] p-4">
        <div className='bg-[#560a0a] w-12 h-12 absolute translate-x-[-50% -50%] right-0 top-0 rounded-tr-xl rounded-bl-[45px]'>
          <span className='text-white text-[23px] ps-5'>1</span>
        </div>  
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt] mb-3">Delievery detail</h1>
          <div className="w-full grid grid-flow-col space-x-4 overflow-x-scroll no-scrollbar">
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                  <span className="text-[#ffffff] flex justify-center items-center">{ iconMap }</span>
                  <h1 className="text-[12pt] text-center font-medium">Delivery to</h1>
                  <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                  <span className="text-[#ffffff] flex justify-center items-center">{ iconMap }</span>
                  <h1 className="text-[12pt] text-center font-medium">Delivery to</h1>
                  <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                  <span className="text-[#ffffff] flex justify-center items-center">{ iconMap }</span>
                  <h1 className="text-[12pt] text-center font-medium">Delivery to</h1>
                  <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>

          </div>
        </div>
        <hr />
      
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt]">Recipient info</h1>
          <form>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Recipient Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                </div>
              </div>
          </form>
        </div>
      
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt]">Item Description</h1>
          <form>
              <div className="relative z-0 w-full mb-3 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cash to Collect</label>
              </div>
              <div className="relative z-0 w-full mb-3 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b border-gray-100 appearance-none 00 blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Add a note to driver</label>
              </div>
              <div className="relative z-0 w-full  group">
                  <div className="text-white border-b flex justify-between">
                    <button className="mb-3">{ "<" } 5kg</button>
                    <button className="mb-3">Document</button>
                  </div>
              </div>
          </form>
        </div>
      </div>
  )
}

export default BookingDetail