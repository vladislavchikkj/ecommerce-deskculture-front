import Image from "next/image";

import Link from "next/link";
import style from "./intro.module.scss";

import getCategories from "@/actions/get-categories";
import { Billboard } from "@/types";

import Dlogo from "./svg/data.svg";
import Wlogo from "./svg/intro.svg";

interface BillboardProps {
  data: Billboard;
}

const Intro: React.FC<BillboardProps> = async ({ data }) => {
  const categories = await getCategories();

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
            <div className={style.l_icon}>
              <Image src={Dlogo} alt={"Dlogo"}></Image>
            </div>
            <div className={style.r_icon}>
              <Image src={Wlogo} alt={"Rlogo"} width={100} height={100}></Image>
            </div>
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
