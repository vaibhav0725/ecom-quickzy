export const Container = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="max-w-7xl mx-auto bg-neutral-950 min-h-screen top-0 inset-0">
            {children}
        </div>
    )
}