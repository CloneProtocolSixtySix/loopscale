import Link from 'next/link';

export default function FoundersNote() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F4EE' }}>
      <div className="max-w-2xl w-full px-6 py-16 mx-auto space-y-6">
        <h1 className="text-3xl font-normal flex items-center">
          <img src="/lightship.svg" alt="Lightship Logo" className="mr-2" width="28" height="28" />
          lightship
        </h1>
        <h2 className="text-xl font-normal serif">A research-driven intelligence studio</h2>
        <p className="text-base mono">
        At Lightship, we develop and apply tools that solve complex problems at the intersection of design, data, and decision.</p>

        <div className="my-8 mono">_____________________________________________________________</div>

        <h3 className="text-base mono">Product:</h3>
        <p className="text-xl font-normal serif">Introducing Field Analyst (FA)</p>
        <p className="text-base mono">FA consists of a bespoke set of language models capable of navigating noise by mitigating industry uncertainty with academic integrity and matching research projects to sector-specific commercialization and investment opportunities.</p>

        <p className="text-base mono">Demo in Playground (coming soon)↗</p>
        <p className="text-base mono">Case Studies↗</p>
        <p className="text-base mono">
          <Link href="/foundersNote" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
            Founder’s Note
          </Link>
        </p>

        <div className="my-8 mono">_____________________________________________________________</div>

        <p className="text-xs mono">© 2025 Lightship · Inquiries hello@lightship.xyz · @lightship</p>
      </div>
    </main>
  );
}