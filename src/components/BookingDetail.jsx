
function BookingDetail() {
  const iconDot_primary = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="10" fill="#eee"><path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path></svg>;
  const iconDot = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>;
  const iconMap = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -1.5 24 24" width="38" fill="currentColor"><path d="M7 20.565c-4.667-6.09-7-10.423-7-13a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>;
  const iconArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-6.414V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 0 1 6.464 9.05L9 11.586z"></path></svg>;
  const iconArrow_1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>;
  return (
      <div className="relative bg-[#c71c30] rounded-xl w-full h-screen p-4">
        <div className='bg-[#560a0a] w-12 h-12 absolute translate-x-[-50% -50%] right-0 top-0 rounded-tr-xl rounded-bl-[45px]'>
          <span className='text-white text-[23px] ps-5'>1</span>
        </div>  
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt]">Delievery detail</h1>
          <div className="my-5">
            <div className="flex justify-between gap-1">
              <div className="flex gap-3">
                <span className="text-[#ffc800]">{iconDot}</span>
                <span className="text-white text-[14pt] font-medium">Current Location</span>
              </div>
              <b className="text-white">{ iconArrow_1}</b>
            </div>  
            <div className="flex items-center">
              <span className="ms-2 my-2">
                {iconDot_primary}
                {iconDot_primary}
                {iconDot_primary}
              </span>
              <div className="border-b-2 w-full mx-2"></div>
            </div>
            <div className="flex justify-between gap-1">
              <div className="flex gap-3">
                <span className="text-[#f2ff01]">{iconArrow}</span>
                <span className="text-white text-[14pt] font-medium">Add drop off</span>
              </div>
              <span className="text-white">{ iconArrow_1}</span>
            </div>  
          </div>

          <div className="w-full grid grid-flow-col space-x-4 overflow-x-scroll no-scrollbar">
            <div className="flex justify-between bg-yellow-400 rounded-2xl w-[20vh] h-[25] p-3 items-center">
              <div className="text-[#560a0a]">
                <h1 className="text-[12pt] font-medium">Delivery to</h1>
                <p className="text-[12pt] font-bold">ទួលគោក</p>
              </div>
              <div>
                <span className="text-[#560a0a]">{ iconMap }</span>
              </div>
            </div>

            <div className="flex justify-between bg-yellow-400 rounded-2xl w-[20vh] h-[25] p-3 items-center">
              <div className="text-[#560a0a]">
                <h1 className="text-[12pt] font-medium">Delivery to</h1>
                <p className="text-[12pt] font-bold">ទួលគោក</p>
              </div>
              <div>
                <span className="text-[#560a0a]">{ iconMap }</span>
              </div>
            </div>

            <div className="flex justify-between bg-yellow-400 rounded-2xl w-[20vh] h-[25] p-3 items-center">
              <div className="text-[#560a0a]">
                <h1 className="text-[12pt] font-medium">Delivery to</h1>
                <p className="text-[12pt] font-bold">ទួលគោក</p>
              </div>
              <div className="text-[#560a0a]">
                <span>{ iconMap }</span>
              </div>
            </div>
          </div>
        </div>
      <hr />
      
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt]">Recipient info</h1>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="#ffffff"><path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2zM5.91 16.876a8.033 8.033 0 0 1-1.58-1.232 5.57 5.57 0 0 1 2.204-1.574 1 1 0 1 1 .733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 0 0-1.41-.964 1 1 0 1 1 .712-1.868 5.65 5.65 0 0 1 2.284 1.607 8.032 8.032 0 0 1-1.586 1.225z"></path></svg>
              </div>
              <input type="email" name="floating_email" id="floating_email" className="block  ps-14 p-2.5  w-full text-sm text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14pt]" placeholder=" Name " required />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="#ffffff"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path><path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049L10.8 6.34a1.384 1.384 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192.043.006.084.011.117.02 1.371.315 1.833.812 2.058 2.215.006.035.008.077.01.122.01.167.031.516.395.516.03 0 .062-.002.096-.008.339-.053.328-.372.323-.525-.002-.043-.003-.084 0-.111a.154.154 0 0 0 .002-.02z"></path><path d="M10.48 5.807c.04.003.08.006.111.011 2.25.358 3.286 1.458 3.573 3.8.005.04.005.088.006.14.003.183.009.563.405.571h.012a.382.382 0 0 0 .294-.115c.123-.133.115-.33.108-.49-.002-.038-.004-.075-.003-.107.028-2.395-1.98-4.567-4.298-4.647l-.028.001a.188.188 0 0 1-.027.002c-.023 0-.052-.002-.082-.004-.036-.003-.078-.006-.12-.006-.369 0-.439.27-.448.432-.02.373.329.4.497.412zM14.055 12.644a7.197 7.197 0 0 1-.143-.115c-.246-.204-.508-.392-.76-.574a57.337 57.337 0 0 1-.158-.114c-.324-.234-.615-.349-.89-.349-.37 0-.693.212-.96.629-.118.184-.262.274-.438.274a.848.848 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23-.206-.48-.14-.792.224-1.047.206-.144.59-.413.563-.928-.03-.585-1.281-2.345-1.808-2.545a.996.996 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067-.21.472-.2 1.025.028 1.601.657 1.666 1.58 3.118 2.746 4.316 1.14 1.173 2.542 2.133 4.166 2.855.146.065.3.1.412.126l.095.024a.155.155 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296-.044.134-.039.25.016.345.081.14.237.183.378.206.512.085.776.378.828.92.025.254.19.43.402.43a.383.383 0 0 0 .048-.002c.255-.032.378-.225.367-.575.004-.366-.181-.78-.496-1.11-.316-.332-.697-.519-1.044-.51z"></path></svg>
              </div>
              <input type="email" name="floating_email" id="floating_email" className="block  ps-14 p-2.5  w-full text-sm text-[#ffffff] bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14pt]" placeholder=" Phone Number " required />
            </div>
          </form>
        </div>
      </div>
  )
}

export default BookingDetail