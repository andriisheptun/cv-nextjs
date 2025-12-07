"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("LangSwitch")

  const handleChange = () => {
    router.replace({ pathname }, { locale: currentLocale === 'en' ? 'ua' : 'en' });
  };

  return (
    <Button onClick={handleChange} sx={{ color: "white", borderRadius: '50%' }}> {t("text")}</Button >
  );
}