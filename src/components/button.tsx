"use client";
import toast, { Toaster } from 'react-hot-toast';

export const CartButton = ({children}:{children:React.ReactNode}) => {
    const notify = () => toast('This Is Just A Dummy Website 😉');
    return (
        <>
            <button onClick={notify} className="flex gap-3 border-[1px] border-neutral-800 rounded-2xl px-10 py-5 w-[210px] items-center justify-center hover:bg-neutral-100 hover:cursor-pointer hover:text-neutral-950">
            {children}
            </button>
            <Toaster/>
        </>
    )
}