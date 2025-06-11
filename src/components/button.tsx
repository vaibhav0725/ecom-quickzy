export const CartButton = ({children}:{children:React.ReactNode}) => {
    return (
        <button className="flex gap-3 border-[1px] border-neutral-800 rounded-2xl px-10 py-5 w-[210px] items-center justify-center">
            {children}
        </button>
    )
}