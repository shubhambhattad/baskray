"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: {
    _id: string;
    slug: {
      current: string;
    };
    title: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  category: string;
}

const Product = ({ product, category }: ProductProps) => {
  return (
    <motion.div
      className="relative w-full max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden bg-white mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={product.image.asset.url} // Use dynamic image URL
        alt={product.title} // Use dynamic alt text
        width={400}
        height={400}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {product.title}
        </motion.h3>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href={`${category}/${product.slug.current}`}>
            <Button size="sm">Enquire Now</Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Product;
