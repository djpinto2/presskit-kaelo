export default function Services() {
  const services = [
    {
      icon: '🎧',
      title: 'DJ para Eventos',
      description: 'Cobertura completa para bodas, cumpleaños y eventos corporativos'
    },
    {
      icon: '🎵',
      title: 'Sesiones en Clubs',
      description: 'Presentaciones regulares en los mejores venues de Buenos Aires'
    },
    {
      icon: '🎛️',
      title: 'Producción',
      description: 'Equipamiento profesional y sonido de alta calidad garantizado'
    },
    {
      icon: '🎶',
      title: 'Playlist Personalizada',
      description: 'Curaría setlists adaptados a la temática de tu evento'
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#141829]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5] mb-2">
          Servicios
        </h2>
        <p className="text-center text-[#a8adb8] mb-16">
          Lo que ofrezco
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg p-6 hover:border-[#60a5fa] transition group text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-[#e4e7eb] mb-3">{service.title}</h3>
              <p className="text-sm text-[#a8adb8]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
