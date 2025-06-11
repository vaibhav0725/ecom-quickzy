import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="w-full py-2 px-10">
        <nav className="flex items-center justify-between px-4 py-2 border-[1px] border-neutral-800 rounded-2xl">
            <h1 className="text-2xl text-neutral-100 font-bold tracking-tighter">QuickBuy</h1>
            <div className="flex gap-5 text-white">
                {
                    navLinks.map((link,idx)=>(
                        <Link href={link.href} key={idx}>{link.name}</Link>
                    ))
                }
            </div>
        </nav>
    </div>
  )
}