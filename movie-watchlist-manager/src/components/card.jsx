export default function Card({title, right, children}) {
  return (
    <section className="border border-gray-200 rounded-xl bg-white mb-3.5">
        <div className="p-3.5 pb-0 flex justify-betwen gap-3 flex-wrap items-center">
            <h2 className="m-0 text-lg">{title}</h2>
            {right ? <div>{right}</div> : null}
        </div>
        <div className="p-3.5">
            {children}
        </div>
    </section>
  )
}