import { ArrowDownUp } from "lucide-react"

export const SortPopap = () => {
    return (
        <div>
            <div className="inline-flex items-center gap-1 bg-gray-50 px-5 h-12.5 rounded-2xl cursor-pointer">
                <b><ArrowDownUp size={16} /></b>
                <span className="mr-2">Sorting:</span>
                <span className="text-orange-400">rating</span>
            </div>
        </div>
    )
}