"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  MessageSquareHeartIcon,
  UserIcon,
  StarIcon,
  ClockIcon,
  BookOpenIcon,
  BarChart2Icon,
  ActivityIcon,
  GraduationCapIcon,
  FileTextIcon,
  GemIcon,
  DollarSignIcon,
} from "lucide-react";

const navItems = [
  { label: "Stream", href: "/", icon: MessageSquareHeartIcon },
  { label: "Profile", href: "/profile", icon: UserIcon },
  { label: "Watchlist", href: "/watchlist", icon: StarIcon },
  { label: "Portfolio", href: "/portfolio", icon: ClockIcon },
  { label: "Layout", href: "/layout", icon: BookOpenIcon },
  { label: "Chartbit", href: "/chartbit", icon: BarChart2Icon },
  { label: "e-IPO", href: "/eipo", icon: ActivityIcon },
  { label: "Screener", href: "/screener", icon: GemIcon },
  { label: "Academy", href: "/academy", icon: GraduationCapIcon },
  { label: "Insider Activity", href: "/insider", icon: FileTextIcon },
  { label: "Valuation", href: "/valuation", icon: DollarSignIcon },
  { label: "Financials", href: "/financials", icon: FileTextIcon },
  { label: "Fundachart", href: "/fundachart", icon: BarChart2Icon },
];

export default function NavbarNoViewport() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navItems.map(({ label, href, icon: Icon }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className="flex flex-row items-center justify-center gap-1 p-[14px] text-sm text-gray-700 hover:text-black"
              >
                {Icon && <Icon className="h-4 w-4 text-pink-400" />}
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 mt-2 min-w-[200px] rounded-md border bg-white p-4 shadow">
            <NavigationMenuLink>
              <Link href="/">Go to Item Three</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
