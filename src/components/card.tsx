import Image from "next/image"

export const Card = () => {
    const cardData = [
        {
            title:"Unparalleled Sound",
            desc:"Experience crystal-clear audio with premium headphones.",
            img:"https://images.unsplash.com/photo-1625786682948-2168238883d2"
    
    
        },
        {
            title:"Stay Connected",
            desc:"Compact and stylish earphones for every occasion.",
            img:"https://images.unsplash.com/photo-1580171542477-451bb1c67267"
        },
        {
            title:"Power in Every Pixel",
            desc:"Shop the latest laptops for work, gaming, and more.",
            img:"https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af"
        }
    
    ]
    return (
        <div className="bg-neutral-950 py-10 px-10 flex justify-around">
            {
                cardData.map((data, idx) => (
                    <div
                        key={idx}
                        className="relative w-[350px] h-[550px] rounded-2xl overflow-hidden bg-cover bg-center hover:opacity-80 transition-all duration-300"
                        style={{ backgroundImage: `url(${data.img})` }}>
                        <div className="absolute bottom-0 w-xs px-5 py-4 text-white">
                            <h2 className="text-2xl font-semibold tracking-tight">{data.title}</h2>
                            <p className="text-sm">{data.desc}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}