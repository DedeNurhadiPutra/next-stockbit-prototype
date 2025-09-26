import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuLink>
          <Link href="/">Item One</Link>
        </NavigationMenuLink>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link href="/">Go to Item Two</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link href="/">Go to Item Three</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link href="/">Go to Item Four</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
