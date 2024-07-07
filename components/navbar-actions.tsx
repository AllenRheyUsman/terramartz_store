"use client";



// Import necessary libraries and components
import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { User } from "@prisma/client";
import { useSession } from 'next-auth/react';
import Image from "next/image";
import useRoutes from "@/app/hooks/useRoutes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";
import DesktopItem from "./DesktopItem";
 

// Define the NavbarActionsProps interface
interface NavbarActionsProps {
  currentUser: User;
}

// Define the NavbarActions functional component
const NavbarActions: React.FC<NavbarActionsProps> = ({ currentUser }) => {
  // Get the user session
  const { data: session } = useSession();
  const [isMounted, setisMounted] = useState(false);

  // Set isMounted to true after component mounts
  useEffect(() => {
    setisMounted(true);
  }, []);

  // Use the custom useRoutes hook
  const routes = useRoutes();
  const cart = useCart();

  // If the component is not mounted, return null
  if (!isMounted) {
    return null;
  }

  // Return the JSX structure of the NavbarActions component
  return (
    <div className="ml-auto flex items-center gap-x-4 relative">
      {/* Render the cart button */}
      <Link href={"/cart"} className="">
        <Button
          onClick={() => {}}
          className="flex items-center bg-lime-600  rounded-full p-3 border-1 border-opacity-10 border-green-900  hover:bg-lime-400 hover:border-opacity-70 ring-0 hover:ring-1"
        >
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-md  font-medium text-white absolute translate-x-3 -translate-y-4 ">
            {cart.items.length}
          </span>
        </Button>
      </Link>

      {/* Conditionally render the "Login" link */}
      {!session ? (
        <Link href={'/login'} className="bg-lime-400 text-green-950 px-5 py-2 rounded-full tracking-wider border-2 hover:border-opacity-0 border-opacity-30 border-green-950 hover:text-white hover:bg-lime-600 ring-0 hover:ring-1">
          Login
        </Link>
      ) : null}

      {/* Conditionally render user actions if there is a session */}
      {session ? (
        <div className='mx-5 cursor-pointer'>
          <div>
            {/* Render user dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative p-2 rounded-lg outline-none group">
                  <Image
                    src={session.user?.image || '/images/logo.png'}
                    width={50}
                    height={20}
                    alt='user-image'
                    className="rounded-full"
                  />
                    <Avatar user={currentUser} />
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity custom-border">
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-neutral-100 rounded-[.35rem]">
                <DropdownMenuItem>
                  

<ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>

                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : null}
    </div>
  );
};

// Export the NavbarActions component
export default NavbarActions;
