export default function Events() {
  const events = [
    {
      day: '15',
      month: 'Sep',
      title: 'Deep Vibes Session',
      location: 'Moscú Club',
      time: '23:00 - 05:00',
      genres: 'House • Tech House'
    },
    {
      day: '22',
      month: 'Sep',
      title: 'Afro Tech Night',
      location: 'Creta Club',
      time: '22:00 - 04:00',
      genres: 'Afro Tech • House'
    },
    {
      day: '29',
      month: 'Sep',
      title: 'Groove Sessions',
      location: 'Groove Club',
      time: '23:30 - 06:00',
      genres: 'Tech House • Afro'
    }
  ];

  return (
    <section id="events" className="py-24 px-4 bg-[#0a0e27]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5] mb-2">
          Próximos Eventos
        </h2>
        <p className="text-center text-[#a8adb8] mb-16">
          Dónde encontrarme próximamente
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx}
              className="bg-[#141829] border border-[#60a5fa]/20 rounded-lg p-6 hover:border-[#60a5fa] transition group"
            >
              <div className="flex gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#60a5fa] to-[#06ffa5] p-4 rounded-lg text-center min-w-20">
                  <div className="text-2xl font-bold text-white">{event.day}</div>
                  <div className="text-xs text-white/80">{event.month}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#e4e7eb] mb-1">{event.title}</h3>
                  <p className="text-sm text-[#a8adb8]">Lugar: {event.location}</p>
                  <p className="text-sm text-[#a8adb8]">Horario: {event.time}</p>
                  <p className="text-xs text-[#60a5fa] font-semibold mt-2">{event.genres}</p>
                </div>
              </div>
              <a 
                href="#booking"
                className="text-[#60a5fa] hover:text-[#06ffa5] transition font-semibold text-sm group-hover:translate-x-2 duration-300"
              >
                → Ver detalles
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
