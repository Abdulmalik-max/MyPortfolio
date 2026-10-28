import { Brain, BriefcaseBusinessIcon, Code2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <section id={"about"} className={"py-24 px-4 relative"}>
            <div className={"container mx-auto max-w-5xl"}>
                <h2 className={"text-3xl md:text-4xl font-bold mb-12 text-center"}>
                    {t('about.title1')} <span className={"text-primary"}>{t('about.title2')}</span>
                </h2>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 items-center"}>
                    <div className={"space-y-6"}>
                        <h3 className={"text-2xl font-semibold"}>
                            {t('about.subtitle')}
                        </h3>
                        <p className={"text-muted-foreground"}>
                            {t('about.exp1')}
                        </p>
                        <p className={"text-muted-foreground"}>
                            {t('about.exp2')}
                        </p>
                        <div className={"flex flex-col sm:flex-row gap-4 pt-4 justify-start"}>
                            <a href={"#contact"} className={"cosmic-button flex items-center justify-center text-center"}>
                                {t('about.contactBtn')}
                            </a>
                            <a
                                href={"public/CV.pdf"}
                                className={"px-6 py-2 rounded-full border border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-300 flex items-center justify-center text-center"}
                                download={true}>
                                {t('about.cvBtn')}
                            </a>
                        </div>
                    </div>

                    <div className={"grid grid-cols-1 gap-6"}>
                        <div className={"bg-card border border-border p-6 rounded-xl card-hover"}>
                            <div className={"flex items-start gap-4"}>
                                <div className={"p-3 rounded-full bg-primary/10"}>
                                    <Code2Icon className={"w-6 h-6 text-primary"} />
                                </div>
                                <div className={"text-start"}>
                                    <h4 className={"text-glow font-bold text-primary mb-1"}>
                                        {t('about.card1Title')}
                                    </h4>
                                    <p className={"text-muted-foreground text-sm leading-relaxed"}>
                                        {t('about.card1Desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"bg-card border border-border p-6 rounded-xl card-hover"}>
                            <div className={"flex items-start gap-4"}>
                                <div className={"p-3 rounded-full bg-primary/10"}>
                                    <Brain className={"w-6 h-6 text-primary"} />
                                </div>
                                <div className={"text-start"}>
                                    <h4 className={"text-glow font-bold text-primary mb-1"}>
                                        {t('about.card2Title')}
                                    </h4>
                                    <p className={"text-muted-foreground text-sm leading-relaxed"}>
                                        {t('about.card2Desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"bg-card border border-border p-6 rounded-xl card-hover"}>
                            <div className={"flex items-start gap-4"}>
                                <div className={"p-3 rounded-full bg-primary/10"}>
                                    <BriefcaseBusinessIcon className={"w-6 h-6 text-primary"} />
                                </div>
                                <div className={"text-start"}>
                                    <h4 className={"text-glow font-bold text-primary mb-1"}>
                                        {t('about.card3Title')}
                                    </h4>
                                    <p className={"text-muted-foreground text-sm leading-relaxed"}>
                                        {t('about.card3Desc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};