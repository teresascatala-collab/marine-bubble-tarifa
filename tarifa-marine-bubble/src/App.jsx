import React from "react";
import { motion } from "framer-motion";
import { MapPin, Leaf, WifiOff, Cable, Wind, ShieldCheck, Droplets, CalendarClock, Mail, Link as LinkIcon } from "lucide-react";

const CONFIG = {
  propertyName: "Tarifa Marine Bubble",
  tagline: "Tu refugio saludable en Tarifa — ideal para estancias largas (hasta 30 noches)",
  locationShort: "Tarifa, Cádiz (España)",
  airbnbUrl: "https://www.airbnb.co.uk/rooms/1320907344488931878",
  bookingUrl: "https://www.booking.com/hotel/es/atico-ayuntamiento.es.html",
  basePricePerNight: "150 € / noche",
  discountInfo: "Descuentos para estancias largas según temporada (hasta 30 noches)",
  contactEmail: "hola@ejemplo.com",
  gallery: [
    "/images/living.jpg",
    "/images/bedroom.jpg",
    "/images/kitchen.jpg",
    "/images/terrace.jpg",
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.040281873522!2d-5.603!3d36.012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c9f6b7b1c04f1%3A0x5c4a!2sTarifa!5e0!3m2!1ses!2ses!4v1710000000000",
};

const Feature = ({ icon: Icon, title, children }) => (
  <div className="flex gap-3 items-start">
    <div className="p-2 rounded-2xl shadow bg-white/70 backdrop-blur">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">{CONFIG.propertyName}</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">Espacio</a>
            <a href="#amenities" className="hover:opacity-70">Servicios</a>
            <a href="#pricing" className="hover:opacity-70">Precios</a>
            <a href="#booking" className="hover:opacity-70">Reserva</a>
            <a href="#contact" className="hover:opacity-70">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {CONFIG.propertyName}
            </h1>
            <p className="mt-3 text-lg text-slate-600">{CONFIG.tagline}</p>
            <p className="mt-2 flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4" /> {CONFIG.locationShort}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="px-5 py-3 rounded-2xl shadow bg-slate-900 text-white hover:opacity-90">Consultar disponibilidad</a>
              <a href={CONFIG.airbnbUrl} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl shadow bg-white border hover:bg-slate-50 flex items-center gap-2"><LinkIcon className="w-4 h-4"/>Airbnb</a>
              <a href={CONFIG.bookingUrl} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl shadow bg-white border hover:bg-slate-50 flex items-center gap-2"><LinkIcon className="w-4 h-4"/>Booking</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow">
            <img src={CONFIG.gallery[0]} alt="Hero" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Un espacio sano y armónico</h2>
            <p className="text-slate-700 leading-relaxed">
              Vivienda diseñada bajo principios de <strong>feng shui</strong> y bienestar. Sin Wi‑Fi para reducir la exposición a
              radiación electromagnética; en su lugar, encontrarás <strong>puertos Ethernet</strong> en todas las habitaciones para
              una conexión estable y rápida por cable. Ideal para <strong>teletrabajo</strong> y estancias largas.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Feature icon={WifiOff} title="Sin Wi‑Fi">
                Apostamos por un entorno de baja exposición. Conexión por cable disponible.
              </Feature>
              <Feature icon={Cable} title="Ethernet en todas las habitaciones">
                Conecta tu portátil o router por cable para máxima estabilidad.
              </Feature>
              <Feature icon={Wind} title="Ambiente saludable">
                Ventilación cruzada y confort natural. (Añade aquí detalles de luz, orientación, materiales…)
              </Feature>
              <Feature icon={ShieldCheck} title="Tranquilidad y seguridad">
                Edificio y vecindario seguros. (Añade normas de convivencia, acceso, etc.)
              </Feature>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow">
            <img src={CONFIG.gallery[1]} alt="About" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="amenities" className="py-16 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Servicios y equipamiento</h2>
          <p className="text-slate-700 mb-8">Completa la lista con lo que tengas en el anuncio (cocina, A/A, lavadora, etc.).</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Feature icon={Droplets} title="Agua">
              No hay sistema de filtrado instalado actualmente.
            </Feature>
            <Feature icon={CalendarClock} title="Estancias flexibles">
              Hasta 30 noches, con descuentos según duración y temporada.
            </Feature>
          </div>
        </div>
      </section>

      <section className="py-16 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONFIG.gallery.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow">
                <img src={src} alt={`Foto ${i + 1}`} className="w-full h-40 md:h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Precios y condiciones</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li><strong>Precio base:</strong> {CONFIG.basePricePerNight}</li>
              <li><strong>Descuentos:</strong> {CONFIG.discountInfo}</li>
              <li><strong>Estancia máxima:</strong> 30 noches</li>
              <li><strong>Política:</strong> añade aquí cancelación/depósito/horarios check‑in & check‑out</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={CONFIG.airbnbUrl} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl shadow bg-slate-900 text-white hover:opacity-90">Ver en Airbnb</a>
              <a href={CONFIG.bookingUrl} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl shadow bg-white border hover:bg-slate-50">Ver en Booking</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow">
            <img src={CONFIG.gallery[2]} alt="Pricing" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 border-t">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Reserva directa</h2>
          <p className="text-slate-700 mb-6">Rellena el formulario y te responderemos con la disponibilidad y el precio final.</p>

          <form
            name="reserva"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-3xl shadow"
          >
            <input type="hidden" name="form-name" value="reserva" />
            <p className="hidden">
              <label>
                No rellenar: <input name="bot-field" />
              </label>
            </p>
            <input name="nombre" placeholder="Tu nombre" className="border rounded-xl px-4 py-3" required />
            <input name="email" type="email" placeholder="Tu email" className="border rounded-xl px-4 py-3" required />
            <input name="entrada" type="date" className="border rounded-xl px-4 py-3" required />
            <input name="salida" type="date" className="border rounded-xl px-4 py-3" required />
            <input name="personas" type="number" min={1} placeholder="Nº de personas" className="border rounded-xl px-4 py-3" required />
            <textarea name="mensaje" placeholder="Mensaje (horarios, peticiones…)" className="border rounded-xl px-4 py-3 md:col-span-2" rows={4}></textarea>
            <button className="md:col-span-2 px-5 py-3 rounded-2xl shadow bg-slate-900 text-white hover:opacity-90">Enviar consulta</button>
            <div className="md:col-span-2 text-xs text-slate-500 flex items-start gap-2 mt-2">
              <Mail className="w-4 h-4 mt-0.5" />
              <p>
                También puedes reservar a través de Airbnb o Booking si lo prefieres. Los enlaces están arriba.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 border-t bg-white" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ubicación</h2>
          <div className="rounded-3xl overflow-hidden shadow">
            <iframe
              src={CONFIG.mapsEmbed}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Mapa Tarifa"
            />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} {CONFIG.propertyName}. Estancias máximas de 30 noches. Espacio libre de Wi‑Fi.
          </div>
          <div className="flex gap-3 md:justify-end">
            <a href={CONFIG.airbnbUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">Airbnb</a>
            <a href={CONFIG.bookingUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">Booking</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
