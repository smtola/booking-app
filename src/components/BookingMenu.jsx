import Button from './Buttons/Button';
import imgLogo from './img/download.jpg';
function BookingMenu() {
    const iconPlus = <svg xmlns="http://www.w3.org/2000/svg" className='mt-[2px]' viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>;
  return (
      <div className="w-full bg-[#c71c30] fixed bottom-0 z-30 pt-5 pb-9 px-4 shadow-2xl rounded-t-3xl">
          <div>
              <button className='
                w-full       
                border-2
                border-[#fff200]
                px-[2vh] py-3
                rounded-xl 
                text-[#ffffff]
                font-medium
                text-[17px]'
              >
                  <div className='              
                    flex
                    gap-3
                    items-center
                    justify-between
                '
                >
                    <div className='
                    text-start
                    flex
                    gap-3
                    items-center
                    '>
                    <img src={imgLogo} width="44" className='rounded-full mt-[3px]' />
                    <div>
                        <b>Bike Express</b>
                        <p>Instant delievry</p>
                    </div>
                    </div>
                    <div>
                        <span><b className='text-[20pt]'>{'-- >' }</b></span>
                    </div>
                </div>
              </button>
              <div className='flex gap-3 mt-3'>
                <Button type={'booking'} title={"Another Booking"} icon={iconPlus}/>
                <Button type={'next'} title={'Next'} disable={true}/>
              </div>
          </div>
      </div>
  )
}

export default BookingMenu