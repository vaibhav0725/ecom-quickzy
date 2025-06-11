import Image from "next/image"
import Link from "next/link"

export const Banner = () => {
    const img = [
        "https://quickcart-gs.vercel.app/_next/static/media/jbl_soundbox_image.c02bcfd7.png",
        "https://quickcart-gs.vercel.app/_next/static/media/md_controller_image.036005e4.png"
    ]
    return (
        <div className="bg-neutral-950 w-full px-10 py-5 flex justify-center">
            <div className="flex justify-between border-[1px] rounded-2xl border-neutral-800 bg-neutral-900 w-[80%]">
            <Image
                width={400}
                height={400}
                src={img[0]}
                alt="Premium Wireless Headphones"
                className="w-[250px] h-[250px] rounded-2xl"
                priority
            />
            <div className="text-white flex flex-col items-center gap-4 py-8">
                <h1 className="text-2xl font-semibold tracking-tight text-center">Level Up Your <br></br>Gaming Experience</h1>
                <p className="text-center w-xs">From immersive sound to precise controls—everything you need to win</p>
                <Link href="/shop" className="text-md border-neutral-800 border-[1px] py-2 px-4 rounded-full">View More</Link>
            </div>
            <Image
                width={400}
                height={400}
                src={img[1]}
                alt="Premium Wireless Headphones"
                className="w-[250px] h-[250px] rounded-2xl"
                priority
            />
            </div>
        </div>
    )
}