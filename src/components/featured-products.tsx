import { MiniProduct } from "./mini-product"
import { data } from "../../public/data"
import Link from "next/link"

export const FeaturedProducts = ({link}:{link:boolean}) => {
    return (
        <div className="w-full flex flex-col px-10 bg-neutral-950 items-center py-5 gap-2.5 mt-35">
            <div className="text-white text-4xl font-semibold tracking-tighter">Featured Products</div>
            <div className="flex w-full justify-between mt-3">
                {
                    data.map((p,idx)=>
                        idx<5 && <MiniProduct link={link} key={idx} title={p.title} description={p.description} image={p.image} price={p.price} id={p.id}/>
                    )
                }
            </div>
            <Link href="/shop" className="text-neutral-100 border-[1px] border-neutral-800 px-5 py-2.5 rounded-2xl mt-5 hover:text-neutral-950 hover:bg-neutral-100">Show More</Link>
        </div>
    )
}