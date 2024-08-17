"use client";

import Image from "next/image";

const ProductDesc = ({ product }: any) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  bg-gradient-to-br from-pink-100 to-blue-100 p-8">
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">
          Heavenly Delight Sundae
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Indulge in our exquisite Heavenly Delight Sundae, a perfect symphony
        </p>
      </div>

      <Image
        alt="product"
        src={product.image.asset.url}
        width={1000}
        height={1000}
        quality={100}
        className="md-w-1/2 p-8 w-full h-full"
      />
    </div>
  );
};

export default ProductDesc;
