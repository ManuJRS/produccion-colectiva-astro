import { mappedHome } from "@/middleware/mapped.home";
import type { HomeData } from "@/types/home-project";
import { fetcher } from "@/utils/fetcher";

export const getHomeData = async () => {
    const resp = await fetcher<HomeData>(
        "home-project?populate[ProjectZone][populate][projects][populate][HeroPreview][fields]=url&populate[Hero][populate][HeroDesktop][fields]=url&populate[Hero][populate][HeroMobile][fields]&populate[Card][populate]&populate[DataZone][populate]&populate[ProjectZone][populate]&populate[UsZone][populate][ImageUsZone][fields]=url");

    const data = mappedHome(resp);
    return data;
}