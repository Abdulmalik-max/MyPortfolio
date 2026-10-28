import { useState } from "react";
import { cn } from "../lib/utils.js";
import { useTranslation } from "react-i18next";

const skills = [
    { name: "HTML / CSS ", level: 90, category: "front-end" },
    { name: "JS / TS ", level: 80, category: "front-end" },
    { name: "TailwindCSS", level: 75, category: "front-end" },
    { name: "Bootstrap ", level: 90, category: "front-end" },
    { name: "React ", level: 90, category: "front-end" },
    { name: "Flutter ", level: 90, category: "front-end" },
    { name: "Laravel", level: 70, category: "back-end" },
    { name: "Django", level: 85, category: "back-end" },
    { name: "FastAPI", level: 80, category: "back-end" },
    { name: "PostgresSQL", level: 90, category: "back-end" },
    { name: "MongoDB", level: 90, category: "back-end" },
    { name: "Git / GitHub", level: 80, category: "tools" },
    { name: "Figma", level: 60, category: "tools" },
    { name: "WebStorm", level: 85, category: "tools" },
    { name: "PyCharm", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "front-end", "back-end", "tools"];

export const SkillsSection = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id={"skills"} className={"py-24 px-4 relative bg-secondary/30"}>
            <div className={"container mx-auto max-w-5xl"}>
                <h2 className={"text-3xl md:text-4xl font-bold text-center mb-12"}>
                    {t('skills.title1')} <span className={"text-primary"}>{t('skills.title2')}</span>
                </h2>

                <div className={"flex flex-wrap justify-center gap-4 mb-12"}>
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-background border border-border text-foreground hover:bg-secondary"
                            )}>
                            {t(`skills.categories.${category}`)}
                        </button>
                    ))}
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className={"bg-card border border-border p-6 rounded-xl card-hover"}>
                            <div className={"flex justify-between items-center mb-4"}>
                                <h3 className={"font-semibold text-lg"}>{skill.name}</h3>
                                <span className={"text-sm font-medium text-primary"}>{skill.level}%</span>
                            </div>

                            <div className={"w-full bg-secondary h-2.5 rounded-full overflow-hidden"}>
                                <div
                                    className={"bg-primary h-full rounded-full origin-start animate-[grow_1.5s_ease-out]"}
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};