import { FB, TW, IG } from "../assets";
const Contact = () => {
  return (
    <div className="flex gap-20">
      <div>
        <h1 className="text-[#BEBEBE] text-[59px] px-40 mt-20">
          Still have
          <br />
          <span className="text-[#1B1B1B] font-bold">Some questions?</span>
        </h1>
        <br />
        <div className="flex gap-[160px] w-full">
          <div className="bg-blue-500 text-start rounded-tr-[40px] w-[100%] px-20 py-4 h-[550px]">
            <br />
            <br />
            <h1 className="text-2xl  text-white font-bold leading-10 mb-4 ">
              Office
            </h1>
            <p className="text-white text-xl">
              42 Montgomery Rd, Sabo yaba, Lagos
              <br /> 101245, Lagos
            </p>
            <br />
            <h2 className="text-2xl font-bold leading-10 mb-4 text-white">
              contact
            </h2>
            <p className="text-white text-xl">hello@mentorled.com</p>
            <p className="text-white text-xl">+2348075898907</p>
            <br />
            <div className=" mb-2">
              <h3 className="text-2xl font-bold leading-10 mb-6 text-white">
                Follow us on the Media
              </h3>
              <br />
              <div className="flex mt-[-5%] w-full mr-20">
                <img src={FB} alt="facebook icon" />
                <img src={TW} alt="twitter icon" />
                <img src={IG} alt="instagram icon" />
              </div>
            </div>
          </div>
          <div className="mt-[-60px] w-full">
            <form className="grid grid-cols-2 gap-[20px]">
              <div className="mr-40">
                <label htmlFor="FirstName" className="text-xl">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="text-sm w-50 px-4 py-3 border border-solid border-gray-300 bg-blue-100 rounded outline-none"
                />
              </div>
              <div>
                <label htmlFor="LastName" className="text-xl">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Your family name"
                  className="text-sm w-50 px-4 py-3 border border-solid border-gray-300 bg-blue-100 rounded outline-none"
                />
              </div>
              <div>
                <label htmlFor="Email" className="text-xl">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="text-sm w-50 px-4 py-3 border border-solid border-gray-300 bg-blue-100 rounded outline-none"
                />
              </div>
              <div>
                <label htmlFor="LastName" className="text-xl">
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="text-sm w-50 px-4 py-3 border border-solid border-gray-300 bg-blue-100 rounded outline-none"
                />
              </div>
              <div className="grid-none w-[100%] ">
                <label htmlFor="Message" className="text-xl">
                  Message
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Type your message here"
                  className="w-[185%] h-[200px] text-sm w-100 px-4 py-3 border border-solid border-gray-300 bg-blue-100 rounded outline-none"
                />
              </div>
              <br />
              <button className="flex justify-start w-[80%] wmd:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
