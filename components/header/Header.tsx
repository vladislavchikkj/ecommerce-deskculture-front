"Use client";
import cn from "clsx";
import Link from "next/link";
import { FC } from "react";

import style from "./header.module.scss";

type Props = {
  inView?: boolean;
};
const Header: FC<Props> = ({ inView }) => {
  return (
    <header className={cn(style.header)}>
      <h1 className="hidden">Desk Culture</h1>

      <div className={style.wrapper}>
        <Link scroll={false} href={`/catalog`}>
          <div className={style.banner}>
            Black Friday Special! All products for 25% off your entire cart!{" "}
            <u> Shop all »</u>
          </div>
        </Link>
        <div
          className={cn(
            style.headerWrapper,
            !inView && `${style.headerWhite}`
          )}>
          <div className={style.leftBtnHeader}>
            <div className={`grid grid-flow-col ${style.hideBtn}`}>
              <Link scroll={false} href={`/contacts`}>
                <div className={`${style.headerButton} `}>
                  <div data-hover="Contacts" className={style.textBtn}>
                    <div className="flex gap-2">Contacts</div>
                  </div>
                </div>
              </Link>
              <Link scroll={false} href={`/catalog`}>
                <div className={`${style.headerButton} `}>
                  <div data-hover="Catalog" className={style.textBtn}>
                    <div className="flex gap-2">Catalog</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.mainLogo}>
            <div className={style.blink_me}>
              <Link translate="no" href={`/`}>
                <div>
                  DeskCulture <span className={style.flare}></span>
                </div>
              </Link>
            </div>
            <div className={style.simbol}>®</div>
          </div>
        </div>
        <div className="grid grid-flow-col justify-self-end">
          <div className={style.favCartBtns}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
