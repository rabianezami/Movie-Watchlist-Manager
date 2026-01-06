import SummaryCard from "./SummaryCard"

export default function Summary({ total, watched, unwatched, allWatched }) {
    return (
        <div className="mb-4 space-y3">
            <div className="flex gap-3 flex-wrap">
                <SummaryCard label="Total Movies" value={total} />
                <SummaryCard label="Wached"  value={watched} />
                <SummaryCard label="Unwatched" value={unwatched} />
            </div>

            {allWatched && (
                <div className="rounded-lg p-3 mt-2 bg-green-50 text-green-800 text-sm">
                    You watched everything!
                </div>
            )}
        </div>
    )
}

