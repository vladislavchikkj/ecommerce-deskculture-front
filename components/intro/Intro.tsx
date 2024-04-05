import Image from "next/image";

import Link from "next/link";
import style from "./intro.module.scss";

import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Intro: React.FC<BillboardProps> = ({ data }) => {
  return (
    <>
      <div className={style.intro}>
        <Image
          src={data?.imageUrl}
          alt={"intro"}
          width={4096}
          height={1787}
          className={style.img}
        />
        <div className={style.wrapper}>
          <div className="flex justify-between">
            <div className={style.l_icon}>{/* <Dlogo /> */}</div>
            <div className={style.r_icon}>{/* <Wlogo /> */}</div>
          </div>
          <div className={style.infos}>
            <div className={style.info}>
              <div className={style.article}>table accessories</div>
              <h1 className={style.title}>
                <p>DESK</p>
                <div className="pl-10">
                  <div className={style.glitch}>CULTURE</div>
                </div>
              </h1>
              <div className={style.subtitle}>{data.label}</div>
            </div>
            <Link scroll={false} className={style.btn} href={"/contacts"}>
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
