import { FeaturedProducts } from "@/components/featured-products";
import { Product } from "@/components/product";

export default function ProductPage() {
    return (
        <div className="w-full h-full">
            <Product/>
            <FeaturedProducts/>
        </div>
    )
}