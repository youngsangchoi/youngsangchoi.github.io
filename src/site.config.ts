import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro) & the webmanifest
	author: "Young Sang Choi",
	// Date.prototype.toLocaleDateString() parameters
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Used as the default description meta property and webmanifest description
	description:
		"Researcher in multimodal learning, event-stream modeling, and trustworthy machine learning.",
	// HTML lang property, found in src/layouts/Base.astro & astro.config.ts
	lang: "en-US",
	// Meta property, found in src/components/BaseHead.astro
	ogLocale: "en_US",
	title: "Young Sang Choi",
	// Used as the site URL in astro.config.ts
	url: "https://youngsangchoi.github.io/",
};
