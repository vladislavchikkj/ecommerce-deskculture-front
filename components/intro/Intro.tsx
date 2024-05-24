import Image from "next/image";

import style from "./intro.module.scss";

import { Billboard } from "@/types";

import MainInfo from "./mainTitle/mainTitle";
import Dlogo from "./svg/data.svg";
import Wlogo from "./svg/intro.svg";

interface BillboardProps {
  data: Billboard;
}

const Intro: React.FC<BillboardProps> = async ({ data }) => {
  return (
    <>
      <div className={style.intro}>
        <Image
          src={data?.imageUrl}
          alt={"intro"}
          width={1920}
          height={1080}
          className={style.img}
          placeholder="blur"
          blurDataURL={data?.imageUrl}
          priority={true}
        />
        <div className={style.wrapper}>
          <div className="flex justify-between">
            <div className={style.l_icon}>
              <Image src={Dlogo} alt={"Dlogo"}></Image>
            </div>
            <div className={style.r_icon}>
              <Image src={Wlogo} alt={"Rlogo"} width={100} height={100}></Image>
            </div>
          </div>
          <MainInfo label={data.label} />
        </div>
      </div>
    </>
  );
};
export default Intro;
