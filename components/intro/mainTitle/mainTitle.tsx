import { Billboard } from "@/types";
import { FunctionComponent } from "react";
import style from "./intro.module.scss";
import Link from "next/link";

interface MainInfoProps {
  label: String;
}

const MainInfo: FunctionComponent<MainInfoProps> = ({ label }) => {
  return (
    <div className={style.infos}>
      <div className={style.info}>
        <div className={style.article}>table accessories</div>
        <h1 className={style.title}>
          <p>DESK</p>
          <div className="pl-10">
            <div className={style.glitch}>CULTURE</div>
          </div>
        </h1>
        <div className={style.subtitle}>{label}</div>
      </div>
      <Link scroll={false} className={style.btn} href={"/contacts"}>
        About us
      </Link>
    </div>
  );
};

export default MainInfo;
