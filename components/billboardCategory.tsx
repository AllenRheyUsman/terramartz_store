import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType | null | undefined;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  // Check if data is null or undefined
  if (!data) {
    console.log('Data is null or undefined:', data);
    return null; // or render a placeholder or handle the case appropriately
  }

  const { label, imageUrl } = data;

  return (
    <div
      className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden   mx-auto max-w-7xl  "
    >
      <div
        className="rounded-xl  relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div
          className="h-full w-full flex flex-col  items-center text-center gap-y-8  "
        >
          <div
            className="font-semibold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-green-950 uppercase tracking-wider pt-5"
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
