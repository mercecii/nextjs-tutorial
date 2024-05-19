import { type Metadata } from "next/types";
import React from "react";

type GenerateMetadataProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: GenerateMetadataProps): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve(`Iphone ${params.productId}`);
    }, 1000);
  });

  return {
    title: title,
  };
};

const ProductsDetails = ({ params }: GenerateMetadataProps) => {
  return <div>ProductsDetails {params.productId}</div>;
};

export default ProductsDetails;
