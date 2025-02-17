import { useState } from "react";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* About Vinceville Link (Triggers Modal) */}
      <button
        onClick={() => setIsOpen(true)}
        className="block px-2 py-2 text-gray-800 hover:bg-gray-100 rounded transition"
      >
        About Vinceville
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold text-gray-800">About Vinceville</h2>
            <p className="mt-2 text-gray-600">
              Vinceville is a platform dedicated to connecting artists and buyers, offering a space for unique artistic expression.
            </p>

            {/* Close Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
