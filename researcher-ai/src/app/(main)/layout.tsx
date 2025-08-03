import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Settings, Users, BarChart2, Clipboard, Code, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Dashboard", icon: Home, path: "/" },
	{ name: "Projects", icon: FileText, path: "/projects" },
	{ name: "Components", icon: Code, path: "/components" },
	{ name: "Testing Lab", icon: Clipboard, path: "/testing-lab" },
	{ name: "Analysis", icon: BarChart2, path: "/analysis" },
	{ name: "Research", icon: Users, path: "/research" },
	{ name: "Collaboration", icon: Share2, path: "/collaboration" },
	{ name: "Settings", icon: Settings, path: "/settings" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col md:flex-row h-screen">
			<aside className="bg-gray-800 text-white w-full md:w-64 p-4">
				<h1 className="text-xl font-bold mb-4">App Name</h1>
				<nav>
					<ul className="space-y-2">
						{navItems.map(({ name, icon: Icon, path }) => (
							<li key={name}>
								<Link
									href={path}
									className={cn(
										"flex items-center p-2 rounded-md w-full text-left",
										pathname === path ? "bg-gray-700" : "hover:bg-gray-700"
									)}
								>
									<Icon className="mr-2" />
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<main className="flex-1 p-4 overflow-y-auto">{children}</main>
		</div>
	);
};

export default Layout;