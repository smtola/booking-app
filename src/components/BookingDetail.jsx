import { useState} from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Weight from "./modal/WeightMd";
import { getWeight } from "./dbAction/weight";

function BookingDetail() {
  const items = getWeight();
  const [open, setOpen] = useState(false);
  const [open_1, setOpen_1] = useState(false);
  const iconMap = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -1.5 24 24"
      width="48"
      fill="currentColor"
    >
      <path d="M7 20.565c-4.667-6.09-7-10.423-7-13a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
    </svg>
  );
  

  return (
    <>
      <div className="relative bg-[#c71c30] rounded-xl w-full mb-[10vh] p-4">
        <div className="bg-[#560a0a] w-12 h-12 absolute translate-x-[-50% -50%] right-0 top-0 rounded-tr-xl rounded-bl-[45px]">
          <span className="text-white text-[23px] ps-5">1</span>
        </div>
        <div className="my-5">
          <h1 className="text-white font-medium text-[16pt] mb-3">
            Delievery detail
          </h1>
          <div className="w-full grid grid-flow-col space-x-4 overflow-x-scroll no-scrollbar">
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                <span className="text-[#ffffff] flex justify-center items-center">
                  {iconMap}
                </span>
                <h1 className="text-[12pt] text-center font-medium">
                  Delivery to
                </h1>
                <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                <span className="text-[#ffffff] flex justify-center items-center">
                  {iconMap}
                </span>
                <h1 className="text-[12pt] text-center font-medium">
                  Delivery to
                </h1>
                <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-[60px] bg-opacity-100 w-[16vh] rounded-2xl p-3 items-center">
              <div className="text-[#ffffff]">
                <span className="text-[#ffffff] flex justify-center items-center">
                  {iconMap}
                </span>
                <h1 className="text-[12pt] text-center font-medium">
                  Delivery to
                </h1>
                <p className="text-[12pt] text-center font-bold">ទួលគោក</p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="mt-5">
          <h1 className="text-white font-medium text-[16pt] mb-2">
            Recipient info
          </h1>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 rounded-none w-full text-sm text-gray-100 bg-transparent  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium flex gap-1 absolute text-sm text-gray-100  duration-300 transform rounded-none -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M5 2v2h4V2H5zm6 0h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm0 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2H2v14h10V4h-1zM4 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </span>
                  <span>Recipient Name</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 rounded-none w-full text-sm text-gray-100 bg-transparent  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium flex gap-2 absolute text-sm text-gray-100  duration-300 transform rounded-none -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                    </svg>
                  </span>
                  <span>Phone Number</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full rounded-none text-sm text-gray-100 bg-transparent  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium flex gap-1 absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 rounded-none origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M12 7A5 5 0 1 0 2 7c0 1.726 1.66 5.031 5 9.653 3.34-4.622 5-7.927 5-9.653zM7 20C2.333 13.91 0 9.577 0 7a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    </svg>
                  </span>
                  <span>Location</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent rounded-none  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium flex gap-1 absolute text-sm text-gray-100  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] rounded-none peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-7 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0V9.9zM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                    </svg>
                  </span>
                  <span>Address</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-5">
          <h1 className="text-white font-medium text-[16pt] mb-2">
            Item Description
          </h1>
          <form>
            <div className="relative z-0 w-full mb-3 ">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 rounded-none px-0 w-full text-sm text-gray-100 bg-transparent  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform rounded-none -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                <span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      className="absolute"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"></path>
                    </svg>
                  </span>
                </span>
                <span className="ms-8">Cash to Collect</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-3 ">
              <div>
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 rounded-none w-full text-sm text-gray-100 bg-transparent  border-b blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-100  duration-300 transform rounded-none -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      className="absolute"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
                    </svg>
                  </span>
                  <span className="ms-8">Add a note to driver</span>
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full  ">
              <div className="text-white border-b flex justify-between">
                <a onClick={() => setOpen(true)} className="mb-3 flex gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652ZM12.0004 10H18.091L19.6295 19H4.37125L5.90971 10H12.0004Z"></path>
                    </svg>
                  </span>
                  <span> {'< 5kg'} </span>
                </a>
                <a onClick={() => setOpen_1(true)} className="mb-3 flex gap-2">
                  <span>Document</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-4 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M10.298 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.961L10.298 2zM3 0h8l5 4v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-40">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white p-4 w-full min-w-[46vh] modal-1">
                <div className="w-full">
                  <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="flex justify-between text-base text-start font-semibold leading-6 text-gray-900"
                    >
                      <span>Weight / Size</span>
                      <span onClick={() => setOpen(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-6 -6 24 24"
                          width="28"
                          fill="currentColor"
                        >
                          <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path>
                        </svg>
                      </span>
                    </DialogTitle>
                    <div className="mt-2">
                      <ul>
                        {items.map((data) => {
                          return <Weight data={data} key={data.id} />;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* typeofitem */}
      <Dialog open={open_1} onClose={setOpen_1} className="relative z-40">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-t-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white p-4 w-full min-w-[46vh] modal-2">
                <div className="w-full">
                  <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="flex justify-between text-base text-start font-semibold leading-6 text-gray-900"
                    >
                      <span>Type of items</span>
                      <span onClick={() => setOpen_1(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-6 -6 24 24"
                          width="28"
                          fill="currentColor"
                        >
                          <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path>
                        </svg>
                      </span>
                    </DialogTitle>
                    <div className="mt-2">
                      <ul>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-4 -2 24 24"
                                width="28"
                                fill="currentColor"
                              >
                                <path d="M10.298 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.961L10.298 2zM3 0h8l5 4v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"></path>
                              </svg>
                            </span>
                            <h2>Document</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                              >
                                <path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path>
                              </svg>
                            </span>
                            <h2>Food</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                              >
                                <path d="M12.998 20H18.998V16H14.998V14H18.998V6H16.998V11L12.998 9.4V20ZM10.998 20V9.4L6.99805 11V6H4.99805V20H10.998ZM6.99805 4V3H16.998V4H19.998C20.5503 4 20.998 4.44772 20.998 5V21C20.998 21.5523 20.5503 22 19.998 22H3.99805C3.44576 22 2.99805 21.5523 2.99805 21V5C2.99805 4.44772 3.44576 4 3.99805 4H6.99805ZM11.998 8L15.498 5H8.49805L11.998 8Z"></path>
                              </svg>
                            </span>
                            <h2>Clothing</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-7 -2 24 24"
                                width="28"
                                fill="currentColor"
                              >
                                <path d="M8 9V5a3 3 0 1 0-6 0v4h6zm0 2H2v4a3 3 0 0 0 6 0v-4zM5 0a5 5 0 0 1 5 5v10a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5z"></path>
                              </svg>
                            </span>
                            <h2>Medical</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                              >
                                <path d="M6.13317 2L5.01052 9.85858C4.70849 11.9728 5.53231 13.7891 6.89117 15.0465C7.99601 16.0688 9.45948 16.7319 11.0005 16.9343V20H6.00047V22H18.0005V20H13.0005V16.9343C14.5415 16.7319 16.0049 16.0688 17.1098 15.0465C18.4686 13.7891 19.2924 11.9728 18.9904 9.85858L17.8678 2H6.13317ZM6.99042 10.1414L7.86776 4H16.1332L17.0105 10.1414C17.2085 11.5272 16.6892 12.7109 15.7514 13.5785C14.7968 14.4618 13.4178 15 12.0005 15C10.5831 15 9.20412 14.4618 8.24948 13.5785C7.31177 12.7109 6.79245 11.5272 6.99042 10.1414Z"></path>
                              </svg>
                            </span>
                            <h2>Fragile</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                              >
                                <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
                              </svg>
                            </span>
                            <h2>Electronics</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                        <li className="flex justify-between py-2 border-b">
                          <div className="flex gap-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-2 -9 24 24"
                                width="28"
                                fill="currentColor"
                              >
                                <path d="M3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                              </svg>
                            </span>
                            <h2>Others</h2>
                          </div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-5 -7 24 24"
                              width="28"
                              fill="currentColor"
                            >
                              <path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path>
                            </svg>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default BookingDetail;
