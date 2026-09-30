'use client';

export default function CetakButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cue border border-chalk/25 px-5 py-3 text-chalk transition-colors hover:border-spot hover:text-spot print:hidden"
    >
      Cetak buku acara
    </button>
  );
}
