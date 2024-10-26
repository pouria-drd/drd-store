import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://drdstore.shop/sitemap.xml",
    };
}

export default robots;
