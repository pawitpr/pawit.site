
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "pawit.",
		template: "%s | pawit.site",
	},
	description: "Pawit Sahare, Full Stack Web developer",
	openGraph: {
		title: "pawit.site",
		description:
			"Hobby Web Backend Developer",
		url: "https://pawit.site",
		siteName: "pawit.site",
		images: [
			{
				url: "https://pawit.site/pawit-banner.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Pawit",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};


const San = LocalFont({
	src: "./FreeSans.tff",
	
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	
	return (
		<html lang="en">
		<body className={ProText.className bg-black}>{children}</body>
	  </html>
	);
}
