import { FeaturedProducts } from "@/components/featured-products";
import { Product } from "@/components/product";

export default async function ProductPage({ params }:{
    params: Promise<{slug:string}>
}) {
    const {slug} = await params;
    return (
        <div className="w-full h-full">
            <Product slug={slug}/>
            <FeaturedProducts link={false}/>
        </div>
    )
}