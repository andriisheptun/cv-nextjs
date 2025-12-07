// "use client";

import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import MobilePhoto from "../../components/MobilePhoto";
import { Box } from "@mui/material";

export default async function Page({ params }) {
  // Отримуємо locale з параметрів
  const { locale } = await params;

  // Примітка: t, lang, changeLang тепер керуються інакше.
  // t() функція викликається безпосередньо.
  // locale (раніше lang) отримується з params.
  // changeLang тепер керує перенаправленням.

  return (
    <Box className="max-w-[1250px] mx-auto flex flex-col sm:flex-row-reverse">
      <MobilePhoto />
      {/* Передаємо t та поточну locale, changeLang вже не потрібен тут */}
      <RightSide locale={locale} />
      <LeftSide />
    </Box>
  );
}
