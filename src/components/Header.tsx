import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center bg-transparent">
          <Link href="/" className="bg-white text-xl font-bold text-zinc-900">
            Além da conta
          </Link>
          <NavigationMenu className="bg-white p-2 drop-shadow-lg rounded-md">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">
                    Início
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/origem">
                    Origem
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/ementa">
                    Ementa
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/estude">
                    Estude
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contato">
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}