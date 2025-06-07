export const Container = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="max-w-6xl mx-auto bg-neutral-200 h-screen top-0 inset-0">
            {children}
        </div>
    )
}