import Link from "next/link";

export const metadata = { title: "Kursi tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-stage px-6 pt-16">
      <div aria-hidden="true" className="spotlight absolute inset-x-0 top-0 h-[28rem]" />
      <div className="relative text-center">
        <p className="cue text-spot">404 · Lampu padam</p>
        <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">Tidak ada pertunjukan di sini</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed">Halaman yang Anda cari tidak ada atau sudah dipindah ke babak lain.</p>
        <Link href="/" className="mt-8 inline-flex bg-spot px-7 py-3.5 text-sm font-bold text-stage hover:bg-spot-soft">Kembali ke panggung</Link>
      </div>
    </main>
  );
}
