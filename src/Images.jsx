import MainImg from "./assets/imgs/main.png";
import TopLight from "./assets/imgs/top.png";
import BottomLight from "./assets/imgs/bottom.png";
import RightLight from "./assets/imgs/right.png";
import { useState } from "react";

export const Images = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  return (
    <div className="max-w-5xl relative">
      <img className="pointer-events-none" src={MainImg} alt="" />
      <img
        className={`absolute top-0 left-0 mix-blend-lighten pointer-events-none ${
          isFirstOpen ? "opacity-100 duration-75" : "opacity-0 duration-500"
        }`}
        src={TopLight}
        alt=""
      />
      <img
        className={`absolute top-0 left-0 mix-blend-lighten pointer-events-none ${
          isSecondOpen ? "opacity-100 duration-75" : "opacity-0 duration-500"
        }`}
        src={BottomLight}
        alt=""
      />
      <img
        className={`absolute top-0 left-0 mix-blend-lighten pointer-events-none ${
          isThirdOpen ? "opacity-100 duration-75" : "opacity-0 duration-500"
        }`}
        src={RightLight}
        alt=""
      />

      <button
        className="absolute w-[7%] aspect-square left-[26%] top-0 -translate-y-[17%]"
        onClick={() => setIsFirstOpen((prev) => !prev)}
      ></button>
      <button
        className="absolute w-[7%] aspect-square left-[12.5%] bottom-0 translate-y-[17%]"
        onClick={() => setIsSecondOpen((prev) => !prev)}
      ></button>
      <button
        className="absolute w-[7%] aspect-square top-[34%] right-0 translate-x-[17%]"
        onClick={() => setIsThirdOpen((prev) => !prev)}
      ></button>
    </div>
  );
};
