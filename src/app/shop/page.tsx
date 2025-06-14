import { MiniProduct } from "@/components/mini-product";
import { data } from "../../../public/data";

export default function Shop() {
    return (
        <div className="flex flex-col bg-neutral-950 w-full justify-center px-10 py-5">
            <h1 className="text-neutral-100 text-3xl font-semibold tracking-tight ml-5">All Products</h1>
            <div className="grid grid-cols-5 grid-rows-2 gap-2 mt-3">
                {
                    data.map((p,idx)=>(
                        <div key={idx}>
                            <MiniProduct link={true} title={p.title} description={p.description} image={p.image} price={p.price} id={p.id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}