import { FaLocationDot } from "react-icons/fa6";

function Header() {
  return (
    <div className="text-center">

      <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2">

        <FaLocationDot className="text-sky-600" />

        <span className="text-sky-700 font-medium">
            HH Goa 2026
        </span>

      </div>

      <h1 className="mt-8 text-5xl font-bold text-slate-900">
        Create Your{" "}
        <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
          Builder ID
        </span>
      </h1>

      <p className="mt-5 text-slate-500 max-w-md mx-auto">
        Upload your photo and instantly generate a beautiful Builder Card to share with the community.
      </p>

    </div>
  );
}

export default Header;