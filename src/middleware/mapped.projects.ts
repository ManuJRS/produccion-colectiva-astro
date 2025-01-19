import type { ProjectsDevelop, ProjectsData } from "@/types/project-preview";

export function mappedProjects(
    strapiData: ProjectsData
): ProjectsDevelop {
    const { hero, projectHistory, seo } = strapiData.data;


    const newData: ProjectsDevelop = {
        hero: {
            title: hero.title,
            heroDesktop: {
                url: hero.heroDesktop.url
            },
            heroMobile: {
                url: hero.heroMobile.url
            }
        },
        projectHistory: {
            title: projectHistory.title,
            text: projectHistory.text,
            projectZone: projectHistory.projects!,
        },
        seo: {
            metaTitle: seo.metaTitle,
            metaDescription: seo.metaDescription,
            shareImage: seo.shareImage
        }
    };

    return newData

}
