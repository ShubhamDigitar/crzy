"useClient";

import Globe from "./text/Globe";
import Typewriter from "./text/Typewriter";

const AnimSection = () => {
  return (
    <div className="w-full px-8 flex h-[30em] gap-4 ">
      <div className="section1 w-2/3">
        <div className="w-full h-full flex flex-row items-start justify-start bg-white text-foreground dark:text-muted font-normal overflow-hidden lg:p-16 lg:pt-48 text-bold">
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
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar="_"
            />
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AnimSection;
