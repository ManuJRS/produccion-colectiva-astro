import type { HomeDevelop, HomeData } from "@/types/home-project";

export function mappedHome(
    strapiData: HomeData
): HomeDevelop {
    const { ProjectP, Hero, Card, DataZone, ProjectZone, UsZone } = strapiData.data;

    const newData: HomeDevelop = {
        Hero: {
            Title: Hero.Title,
            HeroDesktop: {
                url: Hero.HeroDesktop.url
            },
            HeroMobile: {
                url: Hero.HeroMobile.url
            },
        },
        Card: {
            CardTitle: Card.CardTitle,
            CardText: Card.CardText,
            CardButtonText: Card.CardButtonText,
            CardButtonLink: Card.CardButtonLink,
        },
        DataZone: {
            TitleData: DataZone.TitleData,
            TextData: DataZone.TextData,
            SpanNumberOne: DataZone.SpanNumberOne,
            SpanNumberTwo: DataZone.SpanNumberTwo,
            SpanNumberThree: DataZone.SpanNumberThree,
            SpanTextOne: DataZone.SpanTextOne,
            SpanTextTwo: DataZone.SpanTextTwo,
            SpanTextThree: DataZone.SpanTextThree,
            ButtonDataText: DataZone.ButtonDataText,
            ButtonDataLink: DataZone.ButtonDataLink,
        },
        ProjectZone: {
            TitleProjectsZone: ProjectZone.TitleProjectsZone,
            TextProjectsZone: ProjectZone.TextProjectsZone,
        },
        UsZone: {
            TitleUsZone: UsZone.TitleUsZone,
            ButtonUsText: UsZone.ButtonUsText,
            ButtonUsLink: UsZone.ButtonUsLink,
            ImageUsZone: {
                url: UsZone.ImageUsZone.url
            }
        },
        ProjectP: {
            TitlePortfolio: ProjectP?.TitlePortfolio || "No hay un titulo para mostrar",
            ShortIntroPortfolio: ProjectP?.ShortIntroPortfolio || "No hay un texto para mostrar",
            HeroPreview: {
                url: ProjectP?.HeroPreview?.url || "No hay una imagen para mostrar"
            }
        },
    };
    return newData
}