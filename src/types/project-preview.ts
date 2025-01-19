export interface ProjectsDevelop {
    hero: heroSection;
    projectHistory: projectSection;
    seo: seoSection;
}

export interface heroSection {
    title: string,
    heroDesktop: imageData,
    heroMobile: imageData,
}

export interface projectSection {
    title: string;
    text: string;
    projectZone: projectZoneProject[];
}

export interface projectZoneProject {
    title: string,
    intro: string,
    heroPreview: HeroDesktop;
}

export interface seoSection {
    metaTitle: string;
    metaDescription: string;
    shareImage: HeroDesktop;
}

export interface imageData {
    url: string
}

//DATA POR DEFECTO
export interface ProjectsData {
    data: Data;
    meta: Meta;
}

export interface Data {
    id: number;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    hero: Hero;
    projectHistory: ProjectHistory;
    seo: SEO;
}

export interface Hero {
    id: number;
    title: string;
    heroDesktop: HeroDesktop;
    heroMobile: HeroDesktop;
}

export interface HeroDesktop {
    id: number;
    documentId: string;
    url: string;
}

export interface ProjectHistory {
    id: number;
    title: string;
    text: string;
    projects: Project[];
}

export interface Project {
    id: number;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    title: string;
    intro: string;
    heroPreview: HeroDesktop;
}

export interface SEO {
    id: number;
    metaTitle: string;
    metaDescription: string;
    shareImage: HeroDesktop;
}

export interface Meta {
}
