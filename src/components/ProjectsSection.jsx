import { ArrowRightCircle, ExternalLinkIcon, FolderGit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils.js";

const projects = [
    {
        id: 1,
        titleKey: "project1",
        image: "/projectsImages/project1.png",
        tags: ["HTML", "CSS", "JS", "Laravel", "PostgresSQL"],
        demoUrl: "#",
        gitHubUrl: "#",
    },
    {
        id: 2,
        titleKey: "project2",
        image: "/projectsImages/project2.png",
        tags: ["Flutter", "Laravel", "Sqlite"],
        demoUrl: "#",
        gitHubUrl: "#",
    }
];

export const ProjectsSection = () => {
    const { t, i18n } = useTranslation();

    // Safety check: added '?' to prevent errors during initial render
    const isRtl = i18n?.language === 'ar';

    return (
        <section id={"projects"} className={"py-24 px-4 relative"}>
            <div className="container max-w-5xl mx-auto">
                <h2 className={"text-3xl md:text-4xl font-bold mb-4 text-center"}>
                    {t('projects.title1')} <span className={"text-primary"}>{t('projects.title2')}</span>
                </h2>
                <p className={"text-center text-muted-foreground max-w-2xl mx-auto mb-12"}>
                    {t('projects.description')}
                </p>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    {projects.map((project, key) => (
                        <div key={key} className={"group bg-card border border-border rounded-xl shadow-sm card-hover flex flex-col overflow-hidden"}>
                            <div className={"h-48 overflow-hidden relative border-b border-border"}>
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={t(`projects.items.${project.titleKey}.title`)}
                                    className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}
                                />
                            </div>

                            <div className={"p-6 flex flex-col flex-grow text-start"}>
                                <div className={"flex flex-wrap gap-2 mb-4"}>
                                    {project.tags.map((tag, tagKey) => (
                                        <span key={tagKey} className={"px-2.5 py-1 text-xs font-medium border border-primary/20 rounded-full bg-primary/10 text-primary"}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className={"text-xl font-semibold mb-2 text-primary"}>
                                    {t(`projects.items.${project.titleKey}.title`)}
                                </h3>
                                <p className={"text-muted-foreground text-sm mb-6 flex-grow line-clamp-3"}>
                                    {t(`projects.items.${project.titleKey}.description`)}
                                </p>

                                <div className={"flex justify-between items-center pt-4 border-t border-border mt-auto"}>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={project.demoUrl}
                                            target={"_blank"}
                                            rel="noreferrer"
                                            className={"flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"}
                                        >
                                            <ExternalLinkIcon size={18} /> {t('projects.links.demo')}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={project.gitHubUrl}
                                            target={"_blank"}
                                            rel="noreferrer"
                                            className={"flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"}
                                        >
                                            <FolderGit2 size={18} /> {t('projects.links.source')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"text-center mt-12"}>
                    <a
                        className={"cosmic-button w-fit flex items-center justify-center mx-auto gap-2"}
                        target={"_blank"}
                        rel="noreferrer"
                        href={"https://github.com/Abdulmalik-max"}
                    >
                        {t('projects.githubBtn')}
                        <ArrowRightCircle
                            size={20}
                            className={cn("transition-transform", isRtl ? "rotate-180" : "rotate-0")}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};