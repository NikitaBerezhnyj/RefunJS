import i18n from "@/i18n";

export function changeLanguage(lang: "en" | "ua") {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
  console.log(`Language changed to: ${lang}`);
}

export function getCurrentLanguage(): "en" | "ua" {
  return (i18n.language as "en" | "ua") || "en";
}
