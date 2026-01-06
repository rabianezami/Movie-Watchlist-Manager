export default function InputText({ label, value, onChange, placeholder, type = "text" }) {
    return (
        <div className="flex-1 min-w-[220px]">
            <label className="block text-xs opacity-75 mb-2">
                {label}
            </label>
            <input
                label={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
                className="w-full p-2.5 rounded-lg border border-gray-300 outline-none bg-white"
            />
        </div>
    )
}