import Image from "next/image"
import Link from "next/link"

export const MiniProduct = ({title,description,price,image,id,link}:{
    title:string,
    description:string,
    price:number,
    image:string,
    id:string,
    link:boolean
}) => {
    function truncate(desc:string):string {
        return desc.slice(0,35)+"..."
    }
    const href = (link) ? `shop/${id}` : `${id}`
    return (
        <Link href={href} className="flex flex-col justify-between px-10 py-5 h-[300px] border-[1px] border-neutral-800 rounded-2xl">
            <Image
                width={400}
                height={400}
                src={image}
                alt="Premium Wireless Headphones"
                className="w-[150px] h-[150px] rounded-2xl bg-neutral-900"
                priority
            />
            <h2 className="text-md font-bold tracking-tighter text-white w-[150px] mt-0.5">{title}</h2>
            <h3 className="text-xs text-neutral-100 w-[150px]">{truncate(description)}</h3>
            <div className="flex items-center justify-between text-neutral-50 w-[150px]">
                <h2 className="text-sm font-semibold tracking-tight">${price}</h2>
                <button className="text-xs border-[1px] border-neutral-800 px-2 py-1 rounded-2xl hover:bg-neutral-100 hover:text-neutral-950">
                    Buy Now
                </button>
            </div>
        </Link>
    )
} 