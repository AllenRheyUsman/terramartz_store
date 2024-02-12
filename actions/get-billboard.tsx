import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_ENDPOINT}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;