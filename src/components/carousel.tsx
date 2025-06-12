"use client";
import Image from "next/image"
import { CartButton } from "./button"
import { data } from "../../public/data"
import { ShoppingCart,ShoppingBag } from 'lucide-react';
import { useState,useEffect } from "react";


export const Carousel = () => {
    const carouselData = data.slice(0,3);
    const extra = [
        {heading:"Experience Pure Sound - Your Perfect Headphones Awaits!",info:"Limited Deal"},
        {heading:"Premium Noise Cancellation - Hear What Matters Most!",info:"New Arrival"},
        {heading:"Wireless Freedom - Crystal Clear Audio Anywhere!",info:"Best Seller"}
    ]

    const [ index,setIndex ] = useState(0); 
    useEffect(()=>{
        const timer = setInterval(()=>{
            setIndex((prev)=>(prev+1)%3);
        },3000);
        return () => clearInterval(timer);
    },[])
    return (
        <div className="bg-neutral-950 px-10 py-5">
            <div className="flex justify-around border-[1px] border-neutral-800 bg-neutral-900 rounded-2xl px-13 py-10 text-neutral-100">
                <div className="h-[325px] relative">
                    <p className="text-md">{extra[index].info}</p>
                    <h1 className="text-5xl w-xl mt-1 font-bold tracking-tight">{extra[index].heading}</h1>
                    <div className="flex gap-5 items-center bottom-12 absolute">
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
                <Image
                width={400}
                height={400}
                src={carouselData[index].image}
                alt={carouselData[index].title}
                className="w-[325px] h-[325px]"
                priority/>
            </div>
            <div className="bg-neutral-950 flex items-center justify-center gap-7 p-5">
                <button 
                    onClick={()=>{setIndex(0)}}
                    style={{
                        backgroundColor : index===0 ? "#f5f5f5" : "transparent"
                    }}
                    className="border-[1px] border-neutral-100 h-3 w-3 rounded-full"
                />
                <button 
                    onClick={()=>{setIndex(1)}}
                    style={{
                        backgroundColor : index===1 ? "#f5f5f5" : "transparent"
                    }}
                    className="border-[1px] border-neutral-100 h-3 w-3 rounded-full"
                />
                <button 
                    onClick={()=>{setIndex(2)}}
                    style={{
                        backgroundColor : index===2 ? "#f5f5f5" : "transparent"
                    }}
                    className="border-[1px] border-neutral-100 h-3 w-3 rounded-full"
                />
            </div>
        </div>
    )
}