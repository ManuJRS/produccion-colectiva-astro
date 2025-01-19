import { mappedProjects } from "@/middleware/mapped.projects";
import type { ProjectsData } from "@/types/project-preview";
import { fetcher } from "@/utils/fetcher";

export const getProjecData = async () => {
    const resp = await fetcher<ProjectsData>(
        "project?populate[hero][populate][heroDesktop][fields]=url&populate[hero][populate][heroMobile][fields]=url&populate[projectHistory][populate][projects][populate][heroPreview][fields]=url&populate[seo][populate][shareImage][fields]=url"
    );

    const data = mappedProjects(resp);
    return data;
}