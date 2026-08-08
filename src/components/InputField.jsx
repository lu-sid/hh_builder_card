function InputField({
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm px-5 py-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
    />
  );
}

export default InputField;