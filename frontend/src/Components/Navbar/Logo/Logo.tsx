import { Calendar } from "lucide-react"

export function Logo(){
    return (
        <div className={"flex flex-row items-center gap-2"}>
            <Calendar className="text-teal-500" size={30}  />
            <span className="text-2xl font-bold">Mirrow</span>
        </div>
    )
}