import { clipboard } from "../assets";
import { useNavigate  } from 'react-router-dom'

const Content = () => {
  const navigate = useNavigate()
  return (
<div className="fixed flex flex-col inset-0 justify-center items-center bg-[#717171] backdrop-blur-lg z-50">
      <h1 className="text-black text-start text-3xl font-bold w-[60%] relative top-6">
        Paste your Content
      </h1>
      <br />
      <br />
      <div className="bg-white w-[60%] h-[400px] rounded-[15px]">
        <p className="mt-[3%] px-6 text-[#ABBED2]">start typing.....</p>
        <div className="flex flex-col justify-center items-center h-[300px]">
          <img src={clipboard} alt="" />
          <br />
          <p className="text-[#ABBED1]">click here to paste from clipboard</p>
        </div>
      </div>
      <br />
      <div className="flex justify-end gap-16 w-[60%]">
        <button className="text-blue-500 text-xl font-bold " onClick={() => navigate('/dashboardone')}>Cancel</button>
        <button className="md:py-3 py-2 md:px-6 px-6 w-[30%] text-white bg-blue-500 hover:bg-black hover:outline-none font-medium outline outline-none rounded-md border-none" onClick={() => navigate('/contentpasted')}>
          Generate Presentation
        </button>
      </div>
</div>
  );
};

export default Content;

