import Link from 'next/link';
import { ACARA, BABAK, JEDA, pembicaraBySlug } from '@/lib/acara';

/* Susunan acara ditulis seperti program pertunjukan: tiap sesi adalah babak
   dengan jam tayang, sinopsis, dan siapa yang berdiri di bawah lampu. */
export default function Babak() {
  return (
    <section id="babak" className="scroll-mt-16 bg-stage-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end">
          <div>
            <p className="cue mb-5 text-spot">Susunan babak · {ACARA.hari}</p>
            <h2 className="text-[2rem] leading-[1.08] font-extrabold md:text-[2.8rem]">
              Empat babak, satu hari, tidak ada yang molor
            </h2>
          </div>
          <p className="leading-relaxed">
            Pintu dibuka {ACARA.pintu}. Tiap babak berdurasi 105 menit — 80 menit materi, 25 menit
            tanya jawab — dan ditutup tepat pada jamnya, meski masih ada tangan yang terangkat.
          </p>
        </div>

        <ol className="border-t border-chalk/12">
          {BABAK.map((b) => {
            const p = b.pembicara === 'semua' ? null : pembicaraBySlug(b.pembicara);
            return (
              <li key={b.kode}>
                <article className="grid gap-6 border-b border-chalk/12 py-9 md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,0.75fr)] md:gap-10">
                  <div>
                    <p className="cue text-spot">Babak {b.kode}</p>
                    <p className="mt-3 font-[family-name:var(--font-archivo)] text-3xl font-extrabold tabular-nums text-chalk">
                      {b.mulai}
                    </p>
                    <p className="cue mt-1.5">sampai {b.selesai}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold md:text-2xl">{b.judul}</h3>
                    <p className="mt-3 leading-relaxed">{b.sinopsis}</p>
                    <p className="mt-4 text-sm text-chalk/85">
                      Di bawah lampu:{' '}
                      {p ? (
                        <Link href={`/pembicara/${p.slug}`} className="font-semibold text-spot underline decoration-spot/40 underline-offset-4 hover:decoration-spot">
                          {p.nama}
                        </Link>
                      ) : (
                        <span className="font-semibold text-chalk">ketiga pembicara</span>
                      )}
                    </p>
                  </div>
                  <div className="border-l-2 border-spot/40 pl-5">
                    <p className="cue mb-3 text-spot">Dibawa pulang</p>
                    <ul className="space-y-2 text-sm leading-relaxed text-chalk/90">
                      {b.bawa.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </article>
                {b.kode === JEDA.setelah && (
                  <div className="flex items-center gap-4 border-b border-chalk/12 bg-curtain/25 px-5 py-4">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-curtain" />
                    <p className="cue text-chalk">
                      {JEDA.mulai}–{JEDA.selesai} · {JEDA.judul}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm">Tata tertib penonton, susunan kredit, dan apa yang dikirim setelah tirai turun ada di buku acara.</p>
          <Link
            href="/buku-acara"
            className="cue shrink-0 border border-chalk/25 px-5 py-3 text-chalk transition-colors hover:border-spot hover:text-spot"
          >
            Buka buku acara
          </Link>
        </div>
      </div>
    </section>
  );
}
