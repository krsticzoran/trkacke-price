import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Image
        src="/images/coming-soon.png"
        alt="Coming Soon"
        width={300}   // prilagodi veličinu po potrebi
        height={300}
        priority
      />
      <h1 className="mt-6 text-3xl font-semibold text-gray-800">
        Trkačke priče - uskoro!
      </h1>
      <p className="mt-2 text-gray-600 max-w-md text-center">
        Radimo na novom sajtu gde ćemo deliti priče, iskustva i savete za trkače.
        Prati nas i budi spreman za lansiranje!
      </p>
    </main>
  )
}
