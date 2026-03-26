export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <a
        href="#"
        className="absolute top-4 right-4 md:top-6 md:right-8 text-xs md:text-sm uppercase tracking-wide"
        style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}
      >
        Case Studies
      </a>
      <img
        src="/generalintellection.svg"
        alt="General Intellection"
        className="absolute top-4 left-4 md:top-6 md:left-8 w-8 md:w-12 h-auto"
      />
      <p
        className="absolute bottom-4 left-4 md:bottom-6 md:left-8 text-xs md:text-sm uppercase tracking-wide"
        style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}
      >
        © 2026 General Intellection
      </p>
      <a
        href="#"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-8 text-xs md:text-sm uppercase tracking-wide"
        style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 400 }}
      >
        Inquiries
      </a>
      <div className="flex flex-col items-center justify-center gap-6">
        <p
          className="text-black text-center text-2xl md:text-3xl max-w-2xl"
          style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400 }}
        >
          At General Intellection, we develop and apply predictive understanding native to complex human systems.
        </p>
      </div>
    </main>
  );
}
