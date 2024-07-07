 
 

import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";
import NavPages from "./NavPages";
 
import getCurrentUser from "@/app/actions/getCurrentUser";
 
 
 

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
   
  const currentUser = await getCurrentUser()

  return (
    <div className="  bg-lime-400 p-5">
      <Container>
        <div className="  px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 relative flex-col">
            <p className="font-bold text-xl">
              <Image src={"/images/logo.png"} width={50} height={50} alt="logo" className="rounded-full mx-auto px-auto" />
            </p>
            <p className="font-semibold tracking-wide">
              TERRAMARTZ
            </p>
          </Link>
          <div className="flex flex-1   justify-end pt-10">
           
            <MainNav data={categories} />
            <NavPages title={"Reviews"} href={"/Nopage"} />
             
            <NavPages title={"Customer support"} href={"/Nopage"} />
            <NavPages title={"Articles"} href={"/Nopage"} />
            <NavPages title={"Affiliate"} href={"/Nopage"} />
          </div>

         <div className="  justify-end pt-10">
         <NavbarActions currentUser={currentUser!} />
         </div>
            
            

        </div>
      </Container>
    </div>
  );
};

export default Navbar;
