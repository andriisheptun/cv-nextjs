"use client";

import Box from "@mui/material/Box";
import { useTranslations } from 'next-intl';
import LangSwitcher from "./LangSwitcher";


export default function LeftSide() {
  const t = useTranslations('LeftSide');

  return (
    <aside className="w-full bg-[#3f6592] text-white p-6 sm:w-[300px] relative">

      <Box className="w-20 h-7 absolute top-6 right-0">
        <LangSwitcher />
      </Box>

      <figure className="my-6 hidden sm:block" aria-hidden="true">
        <img
          src="/img/photo_5213105380194907770_y1.jpg"
          alt="Andrii Sheptun"
          className="w-60 h-60 rounded-full bg-white object-contain"
        />
      </figure>

      <Box className="mt-6">
        <h3 className="font-bold text-lg border-b pb-2">{t("title-7")}</h3>

        <ul className="mt-4 space-y-4">
          <li>
            <Box className="font-bold">{t("t-7-title-1")}</Box>
            <Box>{t("t-7-subtitle-1")}</Box>
          </li>

          <li>
            <Box className="font-bold">{t("t-7-title-2")}</Box>
            <address>{t("t-7-subtitle-2")}</address>
          </li>

          <li>
            <Box className="font-bold">{t("t-7-title-3")}</Box>
            <a href="tel:+380984459659">{t("t-7-subtitle-3")}</a>
          </li>

          <li>
            <Box className="font-bold">{t("t-7-title-4")}</Box>
            <a href="mailto:andrijsheptun@gmail.com">{t("t-7-subtitle-4")}</a>
          </li>

          <li>
            <Box className="font-bold">{t("t-7-title-5")}</Box>
            <Box>{t("t-7-subtitle-5")}</Box>
          </li>
        </ul>
      </Box>

      <Box className="mt-10">
        <h3 className="font-bold text-lg border-b pb-2">{t("title-8")}</h3>
        <ul className="mt-4 space-y-2">
          <li className="font-bold">{t("t-8-title-1")}</li>
          <li className="font-bold">{t("t-8-title-2")}</li>
          <li className="font-bold">{t("t-8-title-3")}</li>
        </ul>
      </Box>

      <Box className="mt-10">
        <h3 className="font-bold text-lg border-b pb-2">{t("title-9")}</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <Box className="font-bold">{t("t-9-title-1")}</Box>
            <Box>{t("t-9-subtitle-1")}</Box>
          </li>
          <li className="flex justify-between">
            <Box className="font-bold">{t("t-9-title-2")}</Box>
            <Box>{t("t-9-subtitle-2")}</Box>
          </li>
        </ul>
      </Box>

    </aside>
  );
}
