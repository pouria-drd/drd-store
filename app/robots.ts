import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap:
            process.env.BASE_URL || "https://drdstore.shop/" + "sitemap.xml/",
    };
}

export default robots;
