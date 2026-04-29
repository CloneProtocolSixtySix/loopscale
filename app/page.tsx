export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-start px-6 md:px-8 relative"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <p
        className="absolute bottom-4 left-4 md:bottom-6 md:left-8 text-xs md:text-sm tracking-wide"
        style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400, fontOpticalSizing: "auto" }}
      >
        © 2026 Subcurrent AI
      </p>
      <a
        href="#"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-8 text-xs md:text-sm tracking-wide"
        style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400, fontOpticalSizing: "auto" }}
      >
      </a>
      <div className="flex flex-col items-start justify-center gap-6 w-full max-w-2xl">
        <p className="libertinus-math-regular text-black text-left text-2xl md:text-3xl max-w-2xl">
          <span style={{ textDecorationLine: "underline", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>‎ ‎ S</span>ubcurrent is a computational anthropology studio predicting agency across evolving environments.
        </p>
      </div>
    </main>
  );
}

