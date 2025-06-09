import { Calendar } from "lucide-react"
import { Link } from "wouter"

export function Logo(){
    return (
        <div className={"flex flex-row items-center gap-2"}>
            <Calendar className="text-teal-500" size={30}  />
            <Link to="/" className="text-2xl font-bold hover:cursor-pointer">Mirrow</Link>
        </div>
    )
}