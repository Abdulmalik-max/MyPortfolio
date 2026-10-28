import { cn } from "../lib/utils.js";
import { useEffect, useState, useRef } from "react";
import { MenuIcon, XIcon, GlobeIcon, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle.jsx";

const navItems = [
    { i18nKey: "home", href: "#hero" },
    { i18nKey: "about", href: "#about" },
    { i18nKey: "skills", href: "#skills" },
    { i18nKey: "projects", href: "#projects" },
    { i18nKey: "contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();
    const langMenuRef = useRef(null);

    // Handle scroll background effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle clicking outside the language dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsLangMenuOpen(false);
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">

                {/* Text Logo */}
                <a className={"text-xl md:text-2xl font-bold flex items-center tracking-tight"} href={"#hero"}>
                    {i18n.language === 'ar' ? (
                        <>
                            <span className="text-foreground">م.</span>
                            <span className="text-primary">عبدالملك المذحجي</span>
                        </>
                    ) : (
                        <>
                            {/* Using &nbsp; to ensure there is a space between Eng. and the name in English */}
                            <span className="text-foreground">Eng.&nbsp;</span>
                            <span className="text-primary">Abdul Malik Al-Madhji.</span>
                        </>
                    )}
                </a>

                {/* Desktop Nav */}
                <div className={"hidden md:flex items-center gap-6"}>
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className={"text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"}
                        >
                            {t(`navbar.${item.i18nKey}`)}
                        </a>
                    ))}

                    <div className="flex items-center gap-3 border-s border-border ps-6 ms-2">
                        <ThemeToggle />

                        {/* Desktop Language Dropdown */}
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                            >
                                <GlobeIcon size={18} />
                                <span className="text-sm font-medium">
                                    {i18n.language === 'ar' ? 'عربي' : 'English'}
                                </span>
                                <ChevronDown
                                    size={14}
                                    className={cn("transition-transform duration-300", isLangMenuOpen && "rotate-180")}
                                />
                            </button>

                            {/* Desktop Dropdown Menu */}
                            <div className={cn(
                                "absolute top-full mt-2 w-32 end-0 rounded-xl border border-border bg-card shadow-lg flex flex-col overflow-hidden transition-all duration-300 transform origin-top",
                                isLangMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                            )}>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={cn(
                                        "px-4 py-2.5 text-sm text-start transition-colors hover:bg-primary/10 hover:text-primary",
                                        i18n.language === 'en' ? "bg-primary/5 text-primary font-bold" : "text-foreground"
                                    )}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => changeLanguage('ar')}
                                    className={cn(
                                        "px-4 py-2.5 text-sm text-start transition-colors hover:bg-primary/10 hover:text-primary",
                                        i18n.language === 'ar' ? "bg-primary/5 text-primary font-bold" : "text-foreground"
                                    )}
                                >
                                    عربي
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={"md:hidden text-foreground z-50"}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>

                {/* Mobile Nav Menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                )}>
                    <div className={"flex flex-col items-center gap-6 text-xl w-full px-8"}>
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                onClick={() => { setIsMenuOpen(false) }}
                                className={"text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"}
                            >
                                {t(`navbar.${item.i18nKey}`)}
                            </a>
                        ))}

                        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-[200px]">
                            <ThemeToggle />

                            {/* Mobile Language Dropdown Wrapper */}
                            <div className="w-full flex flex-col items-center">
                                <button
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                    className="flex items-center justify-center gap-2 w-full px-6 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    <GlobeIcon size={20} />
                                    <span>
                                        {i18n.language === 'ar' ? 'عربي' : 'English'}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={cn("transition-transform duration-300", isLangMenuOpen && "rotate-180")}
                                    />
                                </button>

                                {/* Mobile Dropdown Options */}
                                <div className={cn(
                                    "flex flex-col w-full bg-card border border-border rounded-xl overflow-hidden transition-all duration-300",
                                    isLangMenuOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 m-0 border-none"
                                )}>
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={cn(
                                            "px-6 py-3 text-center text-sm transition-colors hover:bg-primary/10",
                                            i18n.language === 'en' ? "text-primary font-bold bg-primary/5" : "text-foreground"
                                        )}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('ar')}
                                        className={cn(
                                            "px-6 py-3 text-center text-sm transition-colors hover:bg-primary/10",
                                            i18n.language === 'ar' ? "text-primary font-bold bg-primary/5" : "text-foreground"
                                        )}
                                    >
                                        عربي
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};