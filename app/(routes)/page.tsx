import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c994f053-e130-4d84-9e84-ec2713a0bb0b");
  const categories = await getCategories();

  return (
    <div className="">
      <div className="space-y-10 pb-10">
        <div className="bg-lime-400">
          <Billboard
            data={billboard}
            categories={categories}
            products={products}
          />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
