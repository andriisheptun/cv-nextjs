// "use client";

import LeftSide from "../../components/LeftSide";
import RightSide from "../../components/RightSide";
import MobilePhoto from "../../components/MobilePhoto";
import { Box } from "@mui/material";

export default async function Page({ params }) {
  const { locale } = await params;

  return (
    <Box className="max-w-[1250px] mx-auto flex flex-col sm:flex-row-reverse">
      <MobilePhoto />
      <RightSide locale={locale} />
      <LeftSide />
    </Box>
  );
}
