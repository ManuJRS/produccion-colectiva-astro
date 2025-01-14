export interface HomeDevelop {
    hero: heroSection;
    introduction: introductionSection;
    statistics: statisticSection;
    achievements: achievementSection;
    inside: insideSection;
}

export interface heroSection {
    title: string,
    heroDesktop: imageData,
    heroMobile: imageData,
}

export interface introductionSection {
    title: string;
    text?: string;
    button: string;
    link: string;
}

export interface statisticSection {
    title: string;
    text?: string;
    button?: string;
    link?: string;
    statSection?: statsSectionProject[];
}

export interface statsSectionProject {
    number: string;
    text: string;
}

export interface achievementSection {
    title: string;
    text: string;
    projectSection: projectSectionProject[];
}

export interface projectSectionProject {
    title: string;
    intro: string;
    heroPreview: HeroDesktop;
}

export interface insideSection {
    title: string;
    button: string;
    link: string;
    image?: imageData;
}

export interface imageData {
    url: string
}

//DATA POR DEFECTO

export interface HomeData {
    data: Data;
    meta: Meta;
}

export interface Data {
    id: number;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    achievements: Achievements;
    hero: Hero;
    introduction: Inside;
    statistics: Inside;
    inside: Inside;
}

export interface Achievements {
    id?: number;
    title: string;
    text: string;
    projects?: Project[];
}

export interface Project {
    id?: number;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    title: string;
    intro: string;
    heroPreview: HeroDesktop;
}

export interface HeroDesktop {
    id: number;
    documentId: string;
    url: string;
}

export interface Hero {
    id: number;
    title: string;
    heroDesktop: HeroDesktop;
    heroMobile: HeroDesktop;
}

export interface Inside {
    id?: number;
    title: string;
    button: string;
    link: string;
    image?: HeroDesktop;
    text?: string;
    stats?: Stat[];
}

export interface Stat {
    id: number;
    number: string;
    text: string;
}

export interface Meta {
}
