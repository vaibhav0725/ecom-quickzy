import { FeaturedProducts } from "@/components/featured-products";
import { Product } from "@/components/product";

export default function ProductPage({ params }: { params: { slug: string } }) {
    return (
        <div className="w-full h-full">
            <Product params={params}/>
            <FeaturedProducts link={false}/>
        </div>
    )
}