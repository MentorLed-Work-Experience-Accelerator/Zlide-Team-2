import { mentorled, univelcity, dev, Adtec } from "../assets";

const Partners = () => {
  return (
    <div className="flex justify-center flex-col text-center my-20">
      <h1 className="text-4xl font-bold mt-20">Proudly trusted by</h1>
      <br />
      <p className="text-[20px]">
        These brands use our tool to make presentations.
      </p>
      <div className="flex justify-center gap-20 my-20 h-10">
        <img src={mentorled} alt="logo" />
        <img src={univelcity} alt="logo" />
        <img src={dev} alt="logo" />
        <img src={Adtec} alt="logo" />
      </div>
    </div>
  );
};

export default Partners;
