"use client";
import { cn } from "@/lib/utils";
import { Billboard as BillboardType } from "@/types";
import { Category, Product } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType | null | undefined;
  categories: Category[];
  products: Product[];
}

const Billboard: React.FC<BillboardProps> = ({ data, categories, products }) => {
  if (!data) {
    console.log('Data is null or undefined:', data);
    return null;
  }

  const { label, imageUrl } = data;
  const pathname = usePathname();

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden mx-auto max-w-7xl">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="h-full w-full flex flex-col items-center text-center gap-y-8">
          <div className="font-semibold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-green-950 uppercase tracking-wider pt-5">
            {label}
          </div>
          <div className="flex justify-center gap-10 w-full ">
            {categories.map((category) => {
              // Filter products by category
              const categoryProducts = products.filter(
                (product) => product.category.id === category.id
              );

              // Get the first image of the first product in this category
              const firstProductImage = categoryProducts.length > 0 ? categoryProducts[0].images[0].url : '';

              return (
                <div className=" " key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-white hover:bg-green-500 mx-auto p-2 rounded-[.375rem] duration-300 ease-in-out",
                      pathname === `/category/${category.id}` ? "text-white bg-green-500" : "text-green-500",
                    )}
                  >
                    {firstProductImage && (
                  <div className="  rounded-full bg-cover bg-center bg-green-950"  style={{
                    backgroundImage: firstProductImage ? `url(./images/8.png)` : 'none',
                  
                  }}>
                   

                    
                      
                    <div className=" bg-cover p-10 rounded-full">
                     
                    <Image
                        src={firstProductImage}
                        alt={category.name}
                        width={100}
                        height={100}
                        className="aspect-square object-cover rounded-md"
                       
                      />
                    </div>
                  </div>
                    )}
                    {category.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
