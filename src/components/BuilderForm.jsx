function BuilderForm() {
  return (
    <div>

      <label className="block font-semibold mb-2">
        Name
      </label>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border rounded-lg p-3 mb-4"
      />

      <label className="block font-semibold mb-2">
        Stack / Role
      </label>

      <input
        type="text"
        placeholder="Frontend Developer"
        className="w-full border rounded-lg p-3 mb-6"
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Generate Builder ID
      </button>

    </div>
  );
}

export default BuilderForm;