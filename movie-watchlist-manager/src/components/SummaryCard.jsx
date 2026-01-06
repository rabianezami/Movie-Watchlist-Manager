export default function SummaryCard({ label, value }) {
     return (
        <div className="border border-gray-200 rounded-xl p-3 min-w-[130px] bg-white">
            <div className="text-xs opacity-70">{label}</div>
            <div className="text-xl font-extrabold mt-1">{value}</div>
        </div>
    )
}