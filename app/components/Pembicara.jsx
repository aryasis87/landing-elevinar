import Link from 'next/link';
import { PEMBICARA } from '@/lib/acara';
import Sorot from './Sorot';

export default function Pembicara() {
  return (
    <section id="pembicara" className="relative scroll-mt-16 overflow-hidden bg-stage py-20 md:py-28">
      <div aria-hidden="true" className="spotlight-soft absolute inset-x-0 top-0 h-96" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="cue mb-5 text-spot">Di balik layar</p>
          <h2 className="text-[2rem] leading-[1.08] font-extrabold md:text-[2.8rem]">
            Tiga orang yang terbiasa membuat orang lain mendengar
          </h2>
          <p className="mt-5 leading-relaxed">
            Bukan motivator. Sutradara, analis, dan penyiar — masing-masing membawakan satu babak,
            lalu duduk bersama di babak terakhir.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {PEMBICARA.map((p) => (
            <li key={p.slug}>
              <article className="flex h-full flex-col items-center border border-chalk/12 bg-stage-2 px-6 pt-9 pb-7 text-center">
                <Sorot inisial={p.inisial} />
                <p className="cue mt-6 text-spot">Babak {p.babak}</p>
                <h3 className="mt-2 text-xl font-extrabold">{p.nama}</h3>
                <p className="mt-1 text-sm text-chalk/80">{p.peran}</p>
                <p className="mt-4 text-sm leading-relaxed">{p.ringkas}</p>
                <blockquote className="mt-5 border-t border-chalk/12 pt-5 text-sm leading-relaxed text-chalk italic">
                  “{p.kutipan}”
                </blockquote>
                <Link
                  href={`/pembicara/${p.slug}`}
                  className="cue mt-auto pt-6 text-spot underline decoration-spot/40 underline-offset-[6px] hover:decoration-spot"
                >
                  Profil {p.nama.split(' ')[0]}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
