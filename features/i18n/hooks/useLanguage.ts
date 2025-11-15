import { useTranslation } from "react-i18next";
import { changeLanguage, getCurrentLanguage } from "@/utils/changeLanguage";

export function useLanguage() {
  const { t } = useTranslation();
  const lang = getCurrentLanguage();

  return {
    t,
    lang,
    setLang: changeLanguage,
  };
}
