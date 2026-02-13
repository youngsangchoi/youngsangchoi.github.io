import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			// 1. Define the Font Families
			fontFamily: {
				// Body text defaults to System Sans (Linear style)
				sans: [...defaultTheme.fontFamily.sans],
				// Headers will use System Mono
				mono: [...defaultTheme.fontFamily.mono],
			},

			// 2. Configure Markdown Typography
			// 2. Configure Markdown Typography
			typography: () => ({
				DEFAULT: {
					css: {
						// FORCE ALL HEADERS TO BE MONO
						"h1, h2, h3, h4, h5, h6": {
							// We join the array into a comma-separated string for CSS
							fontFamily: defaultTheme.fontFamily.mono.join(", "),
							fontWeight: "600",
						},

						// Existing settings (copy exact same logic)...
						a: {
							textUnderlineOffset: "2px",
							"&:hover": {
								"@media (hover: hover)": {
									textDecorationColor: "var(--color-link)",
									textDecorationThickness: "2px",
								},
							},
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #666",
							borderRadius: "2px",
						},
						// ... (keep the rest of your settings)
						kbd: {
							"&:where([data-theme='dark'], [data-theme='dark'] *)": {
								background: "var(--color-global-text)",
							},
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							marginInlineStart: "calc(var(--spacing) * 0.5)",
							a: {
								"&:after": { content: "']'" },
								"&:before": { content: "'['" },
								"&:hover": {
									"@media (hover: hover)": { color: "var(--color-link)" },
								},
							},
						},
						"tbody tr": { borderBottomWidth: "none" },
						tfoot: { borderTop: "1px dashed #666" },
						thead: { borderBottomWidth: "none" },
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
						'th[align="center"], td[align="center"]': { "text-align": "center" },
						'th[align="right"], td[align="right"]': { "text-align": "right" },
						'th[align="left"], td[align="left"]': { "text-align": "left" },
						".expressive-code, .admonition, .github-card": {
							marginTop: "calc(var(--spacing)*4)",
							marginBottom: "calc(var(--spacing)*4)",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: "var(--text-sm)",
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;
