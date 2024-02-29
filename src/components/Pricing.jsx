import { Toggle } from "../assets";
import { tick } from "../assets";

const Pricing = () => {
  return (
    <div className="flex justify-center flex-col text-center my-20">
      <h1 className="text-4xl font-bold text-primary">
        Plans for every type of users.
      </h1>
      <br />
      <p className="text-xl">
        Flexible pricing for everyone. Choose either monthly or yearly payment.
      </p>
      <div className="my-20 flex justify-center gap-20 ">
        <p className="text-xl">Pay Monthly</p>
        <img src={Toggle} alt="toggle" className="w-20 h-8" />
        <p className="text-start text-xl text-primary">
          Pay yearly
          <br />
          <span className="text-black">2 months free.</span>
        </p>
      </div>
      <div className="flex justify-center gap-20  ">
        <div className="bg-blue-100 text-start rounded-md w-80 px-8 py-6 h-3/4">
          <h1 className="text-2xl font-bold leading-10 mb-6 ">Freemium</h1>
          <span className="text-6xl font-bold text-blue-700 ">$0</span>
          <p>USD yearly</p>
          <br />
          <button className="w-60 wmd:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md">
            Get Started
          </button>
          <br />
          <br />
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>5 slides per presentation.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>25 presentations limit.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>1 user.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>2 export formats.</p>
          </div>
        </div>
        <div className="bg-blue-200 text-start rounded-md w-80 px-8 py-6 h-3/4">
          <h1 className="text-2xl font-bold leading-10 mb-6 ">Standard</h1>
          <span className="text-6xl font-bold text-blue-700 ">$70</span>
          <p>USD yearly</p>
          <br />
          <button className="w-60 wmd:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md">
            Get Started
          </button>
          <br />
          <br />
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited slides.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited presentations.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>5 user.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited export formats.</p>
          </div>
        </div>
        <div className="bg-blue-100 text-start rounded-md w-80 px-8 py-6 h-3/4">
          <h1 className="text-2xl font-bold leading-10 mb-6 ">Premium</h1>
          <span className="text-6xl font-bold text-blue-700 ">$100</span>
          <p>USD yearly</p>
          <br />
          <button className="w-60 wmd:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black font-semibold outline outline-1 outline-primary rounded-md">
            Get Started
          </button>
          <br />
          <br />
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited slides.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited presentations.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited users.</p>
          </div>
          <div className="flex mb-4">
            <span className="">
              <img src={tick} alt="" />
            </span>
            <p>Unlimited export formats.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
