import { Link } from "wouter";

type Props = {
    children?: React.ReactNode;
    classname?: string;
}

export function TealButton({children, classname}:Props) {
    return (
        <Link to="/signup" className={`flex flex-row bg-teal-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-600 hover:cursor-pointer transition duration-200 ${classname}`}>
            {children}
        </Link>
    )
}