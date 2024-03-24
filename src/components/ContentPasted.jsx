const ContentPasted = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-black text-start text-3xl font-bold w-[60%]">
        Here's your content
      </h1>
      <p className="text-[#ABBED2] w-[60%]">
        Your presentation will be created based on this content.
      </p>
      <br />
      <br />
      <div className="bg-white w-[60%] h-[400px] rounded-[15px]">
        <p className="mt-[3%] px-16 text-black text-sm">
          The Healing Power of Morning Hydration: Benefits of Drinking Water
          Early
          <br />
          <br />
          Slide 1: Introduction
          <br />
          Welcome everyone to today's presentation on the health benefits of
          drinking water in the early morning. Water is essential for life, and
          the timing of when we drink it can significantly impact our health and
          well-being. Today, we'll explore why drinking water in the morning is
          particularly beneficial and how it can positively impact various
          aspects of our health.
          <br />
          <br />
          Slide 2: Importance of Hydration
          <br />
          Our bodies are composed of about 60% water, emphasizing the crucial
          role water plays in maintaining bodily functions. Hydration is
          essential for digestion, nutrient absorption, circulation, temperature
          regulation, and the removal of waste and toxins. <br />
          <br />
          Slide 3: Importance of Hydration
          <br /> Our bodies are composed of about 60% water, emphasizing the
          crucial role water plays in maintaining bodily functions. Hydration is
          essential for digestion, nutrient absorption, circulation, temperature
          regulation.
        </p>
      </div>
      <br />
      <div className="flex justify-end gap-16 w-[60%]">
        <button className="text-blue-500 text-xl font-bold ">
          Edit Content
        </button>
        <button className="md:py-3 py-2 md:px-12 px-6 text-white bg-blue-500 hover:bg-black hover:outline-none font-semibold outline outline-none outline-primary rounded-md border-none w-[30%]">
          Generate Presentation
        </button>
      </div>
    </div>
  );
};

export default ContentPasted;
