export default function SelectInput({label, value, onChange, options=[]}) {
    return (
        <div className="flex-1 min-w-[220px]">
            <label className="block text-xs opacity-75 mb-1.5">
              {label}
            </label>
            <select 
             label={label}
             value={value}
             onChange={(e) => onChange(e.target.value)}
            >
             {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
             ))}
            </select>
        </div>
    )
}