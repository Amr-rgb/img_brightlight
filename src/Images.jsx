import { useState, useEffect } from "react";
import { Howl } from "howler";
import MainImg from "./assets/imgs/main.png";
import TopLight from "./assets/imgs/top.png";
import BottomLight from "./assets/imgs/bottom.png";
import RightLight from "./assets/imgs/right.png";

export const Images = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  useEffect(() => {
    const timeout3 = setTimeout(() => {
      setIsThirdOpen(true);
    }, 800);
    const timeout1 = setTimeout(() => {
      setIsSecondOpen(true);
    }, 1400);
    const timeout2 = setTimeout(() => {
      setIsFirstOpen(true);
    }, 1100);

    return () => clearTimeout(timeout1, timeout2, timeout3);
  }, []);

  const sound = new Howl({
    src: ["src/assets/audio/light-on.mp3"],
    volume: 0.5,
  });

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
        onClick={() => {
          sound.play();
          setIsFirstOpen((prev) => !prev);
        }}
      ></button>
      <button
        className="absolute w-[7%] aspect-square left-[12.5%] bottom-0 translate-y-[17%]"
        onClick={() => {
          setIsSecondOpen((prev) => !prev);
          sound.play();
        }}
      ></button>
      <button
        className="absolute w-[7%] aspect-square top-[34%] right-0 translate-x-[17%]"
        onClick={() => {
          setIsThirdOpen((prev) => !prev);
          sound.play();
        }}
      ></button>
    </div>
  );
};
