'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventPlace: '',
    genre: '',
    message: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        eventName: '',
        eventDate: '',
        eventPlace: '',
        genre: '',
        message: '',
        email: '',
        phone: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="booking" className="py-24 px-4 bg-[#0a0e27]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5] mb-2">
          Booking & Contacto
        </h2>
        <p className="text-center text-[#a8adb8] mb-16">
          Reserva tu evento con KAELO
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Nombre del Evento
              </label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#60a5fa] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Fecha Deseada
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] focus:outline-none focus:border-[#60a5fa] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Lugar
              </label>
              <input
                type="text"
                name="eventPlace"
                value={formData.eventPlace}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#60a5fa] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Género Preferido
              </label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] focus:outline-none focus:border-[#60a5fa] transition"
              >
                <option value="">Selecciona un género</option>
                <option value="house">House</option>
                <option value="techhouse">Tech House</option>
                <option value="afrotech">Afro Tech</option>
                <option value="mix">Mezcla</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Detalles del Evento
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#60a5fa] transition resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Tu Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#60a5fa] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#e4e7eb] mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg text-[#e4e7eb] placeholder-[#6b7280] focus:outline-none focus:border-[#60a5fa] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#60a5fa] to-[#06ffa5] text-[#0a0e27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#60a5fa]/40 transition transform hover:scale-105 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? '✓ Booking Enviado' : 'Enviar Booking'}
            </button>

            {submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center text-green-400 text-sm">
                ¡Gracias por tu reserva! Nos contactaremos pronto.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-[#60a5fa] mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email Booking
              </h3>
              <a 
                href="mailto:kaelo.ar@gmail.com" 
                className="text-[#a8adb8] hover:text-[#06ffa5] transition"
              >
                kaelo.ar@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[#60a5fa] mb-3 flex items-center gap-2">
                <span className="text-2xl">📸</span> Instagram
              </h3>
              <a 
                href="https://instagram.com/kaelo.ar" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a8adb8] hover:text-[#06ffa5] transition"
              >
                @kaelo.ar
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[#60a5fa] mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span> Ubicación
              </h3>
              <p className="text-[#a8adb8]">Buenos Aires, Argentina</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#60a5fa] mb-3 flex items-center gap-2">
                <span className="text-2xl">🕐</span> Disponibilidad
              </h3>
              <p className="text-[#a8adb8]">Jueves a Domingo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
