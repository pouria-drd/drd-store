import type { MetadataRoute } from "next";

function siteMap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://drdstore.shop",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
export default siteMap;
