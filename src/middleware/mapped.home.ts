import type { HomeDevelop, HomeData } from "@/types/home-project";

export function mappedHome(
    strapiData: HomeData
): HomeDevelop {
    const { hero, introduction, statistics, achievements, inside } = strapiData.data;

    const newData: HomeDevelop = {
        hero: {
            title: hero.title,
            heroDesktop: {
                url: hero.heroDesktop.url
            },
            heroMobile: {
                url: hero.heroMobile.url
            }
        },
        introduction: {
            title: introduction.title,
            text: introduction.text,
            button: introduction.button,
            link: introduction.link,
        },
        statistics: {
            title: statistics.title,
            text: statistics.text,
            button: statistics.button,
            link: statistics.link,
            statSection: statistics.stats!
        },
        achievements: {
            title: achievements.title,
            text: achievements.text,
            projectSection: achievements.projects!
        },
        inside: {
            title: inside.title,
            button: inside.button,
            link: inside.link,
            image: inside.image!,
        }
    };
    return newData
}