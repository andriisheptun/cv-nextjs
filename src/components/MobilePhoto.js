import Box from "@mui/material/Box";
import LangSwitcher from "./LangSwitcher";

export default function MobilePhoto() {
  return (
    <Box className="w-full block sm:hidden relative" aria-hidden="true">
      <Box className="w-20 h-7 absolute top-6 right-0">
        <LangSwitcher />
      </Box>

      <figure className="w-full bg-[#3f6592] text-center">
        <img
          className="w-full p-7 h-auto rounded-[50%]"
          src="img/photo_5213105380194907770_y1.jpg"
          alt="Photo"
        />
      </figure>
    </Box>
  );
}
