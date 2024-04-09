"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const secretKey = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`${secretKey}`);
    //@ts-ignore
    Crisp.setColorTheme("black");
  });

  return null;
};

export default CrispChat;
