import Image from "next/image"
import { CartButton } from "./button"

export const Carousel = () => {
    return (
        <div className="">
            <div className="flex justify-around border-[1px] border-neutral-800 bg-neutral-100 rounded-2xl px-13 py-10">
                <div className="h-[325px]">
                    <p className="text-md">Some Random Text</p>
                    <h1 className="text-5xl w-xl mt-1 font-bold tracking-tight">Experience Pure Sound - Your Perfect Headphones Awaits!</h1>
                    <div className="flex gap-5 mt-15">
                        <CartButton/>
                        <CartButton/>
                    </div>
                </div>
                <Image
                width={400}
                height={400}
                src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp"
                alt="Premium Wireless Headphones"
                className="w-[325px] h-[325px]"
                priority/>
            </div>
        </div>
    )
}