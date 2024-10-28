import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <div className=" m-auto w-[80%] mt-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="font-Montserrat font-bold text-2xl">BrandName</Link>
                    </div>
                    <div className="font-Montserrat font-bold text-sm flex">
                        <Link href="/" className="px-6 py-4 hover:bg-white hover:text-[#252B42] rounded-md">Home</Link>
                        <Link href="/about" className="px-6 py-4 hover:bg-white hover:text-[#252B42] rounded-md">Product</Link>
                        <Link href="/contact" className="px-6 py-4 hover:bg-white hover:text-[#252B42] rounded-md">Pricing</Link>
                        <Link href="/contact" className="px-6 py-4 hover:bg-white hover:text-[#252B42] rounded-md">Contact</Link>
                    </div>
                    <div className="font-Montserrat font-bold text-sm">
                        <Link href="/login" className=" mx-3 px-6 py-4 hover:bg-white hover:text-[#252B42] rounded-md">Login</Link>
                        <Link href="/login" className="px-6 py-4 rounded-md bg-[#23A6F0] hover:bg-[#4c60b4] hover:text-white">JOIN US</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}