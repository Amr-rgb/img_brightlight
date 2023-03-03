import MainImg from "./assets/imgs/main.png";
import TopLight from "./assets/imgs/top.png";
import BottomLight from "./assets/imgs/bottom.png";
import RightLight from "./assets/imgs/right.png";

export const Images = () => {
  return (
    <div className="max-w-5xl relative">
      <img src={MainImg} alt="" />
      <img
        className="absolute top-0 left-0 mix-blend-lighten"
        src={TopLight}
        alt=""
      />
      <img
        className="absolute top-0 left-0 mix-blend-lighten"
        src={BottomLight}
        alt=""
      />
      <img
        className="absolute top-0 left-0 mix-blend-lighten"
        src={RightLight}
        alt=""
      />

      <button className="absolute w-[7%] aspect-square bg-white/20 border left-[26%] top-0 -translate-y-[17%]"></button>
      <button className="absolute w-[7%] aspect-square bg-white/20 border top-[34%] right-0 translate-x-[17%]"></button>
      <button className="absolute w-[7%] aspect-square bg-white/20 border left-[12.5%] bottom-0 translate-y-[17%]"></button>
    </div>
  );
};
