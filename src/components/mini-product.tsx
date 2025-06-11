import Image from "next/image"

export const MiniProduct = () => {
    return (
        <div className="flex flex-col">
            <Image
                width={400}
                height={400}
                src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/m16coelz8ivkk9f0nwrz.webp"
                alt="Premium Wireless Headphones"
                className="w-[150px] h-[150px] border-black border-2 rounded-2xl bg-neutral-500"
                priority
            />
            <h2 className="text-md font-bold tracking-tighter">Bose Headphones</h2>
            <h3 className="text-xs">Experience crystal-clear...</h3>
            <div className="flex items-center justify-between">
                <h2>300$</h2>
                <button>Buy Now</button>
            </div>
        </div>
    )
} 