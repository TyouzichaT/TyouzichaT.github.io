"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "zh";

const LanguageContext = createContext<{
    lang: Lang;
    setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Lang | null;
        if (stored === "en" || stored === "zh") setLangState(stored);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem("lang", l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLang = () => useContext(LanguageContext);
