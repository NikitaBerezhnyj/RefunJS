import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useLanguage } from "@/hooks/useLanguage";

export const Header: React.FC = () => {
  const { t, lang, setLang } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "en" | "ua";
    setLang(selected);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>
            {t?.("header.logo") ?? "RefunJS"}
          </span>
        </Link>

        <nav className={styles.nav}>
          <select
            id="lang-select"
            value={lang}
            onChange={handleLanguageChange}
            className={styles.langSelect}
            aria-label={t?.("header.selectLanguageLabel") ?? "Select language"}
          >
            <option value="en">EN</option>
            <option value="ua">UA</option>
          </select>
        </nav>
      </div>
    </header>
  );
};
