import { FeaturedProducts } from "@/components/featured-products";
import { Product } from "@/components/product";

interface PageProps {
    params: {
      slug: string;
    };
  }

export default function ProductPage({ params }:PageProps) {
    return (
        <div className="w-full h-full">
            <Product slug={params.slug}/>
            <FeaturedProducts link={false}/>
        </div>
    )
}