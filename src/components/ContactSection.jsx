import { MailIcon, PhoneIcon, SendIcon } from "lucide-react";
import { FiFacebook, FiLinkedin, FiInstagram } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { cn } from "../lib/utils.js";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
    const { t, i18n } = useTranslation();

    // Safety check: added '?' to prevent errors during initial render
    const isRtl = i18n?.language === 'ar';

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t('contact.title1')} <span className="text-primary">{t('contact.title2')}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 mx-auto max-w-2xl leading-relaxed">
                    {t('contact.description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-start">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">
                            {t('contact.infoTitle')}
                        </h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <MailIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.email')}</h4>
                                    <a
                                        href="mailto:aabdulmalek81@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 block mt-1"
                                        dir="ltr"
                                    >
                                        aabdulmalek81@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.phone')}</h4>
                                    <a
                                        href="tel:+967778014189"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 block mt-1"
                                        dir="ltr"
                                    >
                                        +967 778014189
                                    </a>
                                </div>
                            </div>

                            {/* Whatsapp */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <TbBrandWhatsapp className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">{t('contact.whatsapp')}</h4>
                                    <a
                                        href="https://wa.me/967778014189"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 block mt-1"
                                    >
                                        Eng.Abdulmalik Al-Madhji
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">{t('contact.socialTitle')}</h4>
                            <div className="flex gap-4">
                                <a target="_blank" rel="noopener noreferrer" href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300">
                                    <FiFacebook className="w-5 h-5" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300">
                                    <FiLinkedin className="w-5 h-5" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="#" className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:-translate-y-1 transition-all duration-300">
                                    <FiInstagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">
                            {t('contact.formTitle')}
                        </h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                                    {t('contact.nameLabel')}
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground transition-all duration-300 hover:bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder={t('contact.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                                    {t('contact.emailLabel')}
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground transition-all duration-300 hover:bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-start"
                                    placeholder={t('contact.emailPlaceholder')}
                                    dir="ltr"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                                    {t('contact.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground transition-all duration-300 hover:bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                    placeholder={t('contact.messagePlaceholder')}
                                />
                            </div>
                            <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2 group">
                                {t('contact.submitBtn')}
                                <SendIcon
                                    size={18}
                                    className={cn(
                                        "transition-transform duration-300 group-hover:-translate-y-1",
                                        isRtl ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
                                    )}
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};