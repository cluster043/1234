import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProductItemProps {
  src: string;
  alt: string;
  href: string;
  name: string;
  initialPrice: number;
  price: number;
}

export const ProductItem: FC<ProductItemProps> = ({
  src,
  alt,
  href,
  name,
  initialPrice,
  price,
}) => {
  return (
    <Link href={href}>
      <div className="h-[450px] shadow-xl shadow-slate-300 w-[320px] mb-6 flex flex-col justify-between">
        <div className="flex items-center justify-center w-full h-full bg-slate-200">
          <Image src={src} alt={alt} width={200} height={300} className="" />
        </div>
        <div className="">
          <h2 className="text-center font-bold text-2xl mt-2 capitalize">
            {name}
          </h2>
          <div className="flex justify-start  font-semibold text-xl mt-3">
            <h2 className="line-through mx-3"> रू {initialPrice} </h2>
            <h2 className="text-orange-500"> रू {price}</h2>
          </div>
          <div className="flex justify-center  items-center h-[80px]">
            <div className=" bg-green-500 text-white max-w-[150px] max-h-[70px] py-1 px-2 text-center rounded-xl text-md font-semibold uppercase">
              <h2>Save रू {initialPrice - price}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
