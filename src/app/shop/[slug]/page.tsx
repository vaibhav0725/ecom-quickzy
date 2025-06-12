import { FeaturedProducts } from "@/components/featured-products";
import { Product } from "@/components/product";

interface PageProps {
    params: {
      slug: string;
    };
  }
    //@ts-ignore
export default function ProductPage({ params }:PageProps) {
    //@ts-ignore
    return (
        <div className="w-full h-full">
            <Product slug={params.slug}/>
            <FeaturedProducts link={false}/>
        </div>
    )
}