function PrimaryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-orange-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
    >
      Generate Builder Card
    </button>
  );
}

export default PrimaryButton;