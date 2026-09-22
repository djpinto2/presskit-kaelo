export default function Gallery() {
  const gradients = [
    'from-pink-600 to-purple-600',
    'from-blue-600 to-cyan-400',
    'from-orange-500 to-yellow-400',
    'from-cyan-400 to-blue-300',
    'from-purple-600 to-blue-600',
    'from-yellow-400 to-orange-500'
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-[#0a0e27]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5] mb-2">
          Galería
        </h2>
        <p className="text-center text-[#a8adb8] mb-16">
          Momentos en la pista
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gradients.map((gradient, idx) => (
            <div
              key={idx}
              className={`aspect-square bg-gradient-to-br ${gradient} rounded-lg hover:shadow-2xl hover:shadow-[#60a5fa]/40 transition transform hover:scale-105 cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
