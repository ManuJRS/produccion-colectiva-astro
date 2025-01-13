export interface HomeDevelop {
    Hero: HeroComponent;
    Card: CardComponent;
    DataZone: DataComponent;
    ProjectZone: ProjectComponent;
    UsZone: UsComponent;
    ProjectP: ProjectsPreview;
}

export interface ProjectsPreview {
    TitlePortfolio: string;
    ShortIntroPortfolio: string;
    HeroPreview: ImageData;

}

export interface HeroComponent {
    Title: string;
    HeroDesktop: ImageData;
    HeroMobile: ImageData;
}

export interface CardComponent {
    CardTitle: string;
    CardText: string;
    CardButtonText: string;
    CardButtonLink: string;
}

export interface ProjectComponent {
    TitleProjectsZone: string;
    TextProjectsZone: string;
}

export interface UsComponent {
    TitleUsZone: string;
    ImageUsZone: ImageData;
    ButtonUsText: string;
    ButtonUsLink: string;
}

export interface DataComponent {
    TitleData: string;
    TextData: string;
    SpanNumberOne: string;
    SpanNumberTwo: string;
    SpanNumberThree: string;
    SpanTextOne: string;
    SpanTextTwo: string;
    ButtonDataText: string;
    SpanTextThree: string;
    ButtonDataLink: string;
}

export interface ImageData {
    url: string;
}

// INTERFACES RESPONSE STRAPI

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
    ProjectZone: ProjectZone;
    Hero: Hero;
    Card: Card;
    DataZone: DataZone;
    UsZone: UsZone;
    ProjectP: Project; // SE TIENE QUE AGREGAR PARA QUE FUNCIONE EL MAPPED!!!
}

export interface Card {
    id?: number; //TUVE QUE PONER QUE ID FUERA OPCIONAL PORQUE ME DABA ERROR EN EL INDEX
    CardTitle: string;
    CardText: string;
    CardButtonText: string;
    CardButtonLink: string;
}

export interface DataZone {
    id: number;
    TitleData: string;
    TextData: string;
    SpanNumberOne: string;
    SpanNumberTwo: string;
    SpanNumberThree: string;
    SpanTextOne: string;
    SpanTextTwo: string;
    ButtonDataText: string;
    SpanTextThree: string;
    ButtonDataLink: string;
}

export interface Hero {
    id: number;
    Title: string;
    HeroDesktop: HeroDesktop;
    HeroMobile: HeroMobile;
}

export interface HeroDesktop {
    id: number;
    documentId: string;
    url: string;
}

export interface HeroMobile {
    id: number;
    documentId: string;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface Formats {
    small: Medium;
    medium: Medium;
    thumbnail: Medium;
}

export interface Medium {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}

export interface ProjectZone {
    id?: number;
    TitleProjectsZone: string;
    TextProjectsZone: string;
    projects?: Project[];
}

export interface Project {
    id: number;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    TitlePortfolio: string;
    ShortIntroPortfolio: string;
    HeroPreview: HeroDesktop;
}

export interface UsZone {
    id: number;
    TitleUsZone: string;
    ButtonUsText: string;
    ButtonUsLink: string;
    ImageUsZone: HeroDesktop;
}

export interface Meta {
}
