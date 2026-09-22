'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">Book a Performance</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Ready to bring the energy to your event</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[var(--txt-2)] font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[var(--txt-2)] font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[var(--txt-2)] font-semibold mb-2">Event Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
                placeholder="Tell me about your event..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[var(--gold-2)] text-[var(--bg)] font-bold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Send Inquiry
            </button>
            {submitted && (
              <p className="text-green-500 text-center font-semibold">Message sent! I'll get back to you soon.</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-l-4 border-[var(--gold-2)] pl-6 py-2">
              <h3 className="text-xl font-bold text-[var(--txt-1)] mb-2">Email</h3>
              <a href="mailto:kaelo.ar@gmail.com" className="text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 transition text-lg">
                kaelo.ar@gmail.com
              </a>
            </div>

            <div className="border-l-4 border-[var(--gold-2)] pl-6 py-2">
              <h3 className="text-xl font-bold text-[var(--txt-1)] mb-2">Based In</h3>
              <p className="text-[var(--txt-3)] text-lg">Buenos Aires, Argentina</p>
            </div>

            <div className="border-l-4 border-[var(--gold-2)] pl-6 py-2">
              <h3 className="text-xl font-bold text-[var(--txt-1)] mb-4">Follow</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/kaelo.ar" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-pink-500 transition text-lg font-semibold">
                  Instagram
                </a>
                <a href="https://soundcloud.com/kaelo" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-orange-500 transition text-lg font-semibold">
                  SoundCloud
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-green-500 transition text-lg font-semibold">
                  Spotify
                </a>
              </div>
            </div>

            <div className="bg-[var(--bg-2)] border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[var(--txt-1)] mb-3">Booking Info</h3>
              <p className="text-[var(--txt-3)]">Available for festivals, clubs, private events, and corporate gatherings. Flexible with setup requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
