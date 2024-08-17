"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductDesc from "./product-desc";

interface ProductProps {
  product: {
    _id: string;
    title: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
}

const Product = ({ product }: ProductProps) => {
  return (
    <Dialog>
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
            <DialogTrigger asChild>
              <Button size="sm">Order Now</Button>
            </DialogTrigger>
          </motion.div>
        </div>
      </motion.div>

      <DialogContent className="max-w-3xl">
        <ProductDesc key={product._id} product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default Product;
