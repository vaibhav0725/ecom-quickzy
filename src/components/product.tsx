import { Bar } from "./bar"
import { CartButton } from "./button"
import Image from "next/image"
import { data } from "../../public/data"
import { ShoppingCart,ShoppingBag } from 'lucide-react';


export const Product = ({slug}:{slug:string}) => {
    const product = data.find((item)=>item.id === slug);
    if(!product) {
        return (<div>product not found</div>);
    }
    return (
        <div className="max-h-screen flex justify-between px-10 py-5 bg-neutral-950 text-white w-full">
            <Image
                width={400}
                height={400}
                src={product.image}
                alt={product.title}
                className="w-[500px] h-[500px] rounded-2xl bg-neutral-900"
                priority
            />
            <div className="h-[500px] flex flex-col justify-between w-[55%]">
                <h1 className="text-3xl font-bold tracking-tighter">{product.title}</h1>
                <p className="text-md">{product.description}</p>
                <h2 className="text-2xl font-bold tracking-tight">${product.price}</h2>
                <Bar/>
                <div className="flex flex-row gap-20">
                    <div className="grid grid-cols-1">
                        <span className="font-bold">Brand</span>
                        <span className="font-bold">Color</span>
                        <span className="font-bold">Category</span>
                    </div>
                    <div className="grid grid-cols-1">
                        <span>{product.brand}</span>
                        <span>{product.color}</span>
                        <span>{product.category}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-10 px-20 pt-20 bottom">
                    <CartButton>
                        <ShoppingCart/>
                        Add To Cart
                    </CartButton>
                    <CartButton>
                        <ShoppingBag/>
                        Buy Now
                    </CartButton>
                </div>
            </div>
        </div>
    )
}