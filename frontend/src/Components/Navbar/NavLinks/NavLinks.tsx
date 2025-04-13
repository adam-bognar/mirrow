export function NavLinks() {
    return (
        <div className="flex items-center pt-1">
            <ul className="flex flex-row gap-5 text-md font-semibold">
                <li className="hover:text-black text-gray-500 cursor-pointer">Features</li>
                <li className="hover:text-black text-gray-500 cursor-pointer">Businesses</li>
                <li className="hover:text-black text-gray-500 cursor-pointer">Pricing</li>
            </ul>
        </div>
    )
}