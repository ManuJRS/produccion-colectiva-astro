import { mappedHome } from "@/middleware/mapped.home";
import type { HomeData } from "@/types/home-project";
import { fetcher } from "@/utils/fetcher";

export const getHomeData = async () => {
    const resp = await fetcher<HomeData>(
        "home-project?populate[achievements][populate][projects][populate][heroPreview][fields]=url&populate[hero][populate][heroDesktop][fields]=url&populate[hero][populate][heroMobile][fields]=url&populate[introduction][populate]&populate[statistics][populate][stats][populate]&populate[inside][populate][image][fields]=url");

    const data = mappedHome(resp);
    return data;
}