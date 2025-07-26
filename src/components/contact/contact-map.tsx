export function ContactMap() {
  return (
    <section className="bg-[#140921]">
      <div className="w-full h-[600px] relative">
        {/* Map Container */}
        <div className="w-full h-full bg-[#E5E3DF] relative overflow-hidden">
          {/* Map Tiles Pattern */}
          <div className="absolute inset-0">
            {/* Create a grid pattern to simulate map tiles */}
            <div className="grid grid-cols-8 grid-rows-3 w-full h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-300 bg-gradient-to-br from-gray-200 to-gray-300"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=256&width=256&text=Map+Tile+${
                      i + 1
                    }')`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 left-4 bg-white rounded shadow-lg">
            <a
              href="#"
              className="block px-3 py-1 text-xs text-blue-600 hover:text-blue-800"
            >
              View larger map
            </a>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-16 right-6 bg-white rounded shadow-lg">
            <button className="block w-10 h-10 flex items-center justify-center border-b border-gray-200 hover:bg-gray-50">
              <span className="text-gray-600 text-lg font-bold">+</span>
            </button>
            <button className="block w-10 h-10 flex items-center justify-center hover:bg-gray-50">
              <span className="text-gray-600 text-lg font-bold">−</span>
            </button>
          </div>

          {/* Satellite Toggle */}
          <button
            className="absolute bottom-12 left-4 w-10 h-10 bg-white border-2 border-white rounded shadow-lg hover:bg-gray-50"
            title="Toggle satellite view"
            aria-label="Toggle satellite view"
          >
            <div className="w-full h-full bg-[#E5E3DF] rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm opacity-80" />
            </div>
          </button>

          {/* Google Logo */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-white px-2 py-1 rounded shadow text-xs font-bold text-gray-700">
              Google
            </div>
          </div>

          {/* Footer Links */}
          <div className="absolute bottom-0 right-0 bg-white/70 px-2 py-1 text-xs space-x-2">
            <button className="text-black hover:underline">
              Keyboard shortcuts
            </button>
            <span className="text-black">Map data ©2025 Google</span>
            <button className="text-black hover:underline">Terms</button>
            <button className="text-black hover:underline">
              Report a map error
            </button>
          </div>

          {/* Location Marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
