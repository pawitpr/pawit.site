"use client";
import { Github, Mail, Instagram,Compass } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Instagram  size={20} />,
		href: "https://instagram.com/pxcvhosting",
		label: "Instagram",
		handle: "@pxcvhosting",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:p@pawit.site",
		label: "Email",
		handle: "p@pawit.site",
	},
	{
		icons: <Compass
 size={20}/>,
		href: "https://bento.me/pawit",
		label: "Social",
		handle: "@all",
	}
	
	
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-neutral-900/0 via-neutral-900 to-neutral-950/0 ">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-neutral-500 via-neutral-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-neutral-200 group-hover:text-white group-hover:bg-neutral-900 border-neutral-500 bg-neutral-900 group-hover:border-neutral-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-neutral-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-neutral-400 group-hover:text-neutral-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			
		</div>
	);
}
