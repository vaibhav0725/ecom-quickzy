import { Bar } from "./bar"
import { CartButton } from "./button"
import { ImageBox } from "./image-box"
import Image from "next/image"


export const Product = () => {
    return (
        <div className="max-h-screen flex gap-10 px-10 py-5">
            <Image
                width={400}
                height={400}
                src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp"
                alt="Premium Wireless Headphones"
                className="w-[500px] h-[500px] border-black border-2 rounded-2xl bg-neutral-500"
                priority
            />
            <div className="my-auto">
                <h1 className="text-3xl font-bold tracking-tighter">Headphones</h1>
                <p className="text-md">Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music, calls, and immersive gaming sessions.</p>
                <h2 className="text-2xl font-bold tracking-tight">300$</h2>
                <Bar/>
                <div className="flex flex-row gap-20">
                    <div className="grid grid-cols-1">
                        <span className="font-bold">Brand</span>
                        <span className="font-bold">Color</span>
                        <span className="font-bold">Category</span>
                    </div>
                    <div className="grid grid-cols-1">
                        <span>BrandName</span>
                        <span>ColorType</span>
                        <span>CategoryType</span>
                    </div>
                </div>
                <div className="flex items-center gap-10 px-20 pt-20">
                    <CartButton/>
                    <CartButton/>
                </div>
            </div>
        </div>
    )
}