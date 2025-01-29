"useClient";

import Typewriter from "./text/Typewriter";

const AnimSection = () => {
  return (
    <div className="w-full px-8 flex h-[30em] gap-4 ">
      <div className="section1 w-2/3">
        <div className="w-full h-full flex flex-row items-start justify-start bg-white text-foreground dark:text-muted font-normal overflow-hidden p-16 pt-48">
          <p className="whitespace-pre-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span>{"We're here to help you "}</span>
            <Typewriter
              text={[
                "save big!",
                "shop smarter!",
                "find the best deals!",
                "unlock crazy discounts!",
                "grab exclusive offers!",
                "shop like never before!",
              ]}
              speed={70}
              className="text-teal-500"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar="_"
            />
          </p>
        </div>
      </div>
      <div className="section1 border-2 border-solid-black w-1/3">2</div>
    </div>
  );
};

export default AnimSection;
