"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import {usePathname} from "next/navigation";
 
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
 
  

 
 

interface MainNavProps{
    data: Category[]
};

const MainNav: React.FC<MainNavProps> = ({
    data
    
}) => {
    const pathname = usePathname();
    const routes =data.map((route)=>({
        href:`/category/${route.id}`,
        label: route.name,
        active: pathname ===`/category/${route.id}`
    }))
    function setTheme(arg0: string): void {
        throw new Error("Function not implemented.");
    }

    return ( 
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hover:text-green-950 font-medium opacity-70 hover:opacity-100">

                <div>
                   
                

                <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="relative p-2 rounded-lg outline-none group tracking-wider">
      Categories
      <span className="absolute bottom-0 left-0 right-0 h-[.1rem] bg-green-950 opacity-0 group-hover:opacity-100 transition-opacity custom-border rounded-md"></span>
    </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-neutral-100 rounded-[.35rem]">
      <DropdownMenuItem>
        <ul className="gap-8 flex flex-col ">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-white hover:bg-green-500 mx-auto p-2 rounded-[.375rem] duration-300 ease-in-out ",
                  route.active ? "text-white bg-green-500" : "text-green-500", 
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>





              
                     
                </div>
                 
          
        </nav>
     );
}
 
export default MainNav;