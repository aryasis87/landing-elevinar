/* Pengganti foto pembicara: inisial yang berdiri di bawah kerucut lampu sorot.
   Pembicara di purwarupa ini fiktif, jadi tidak memakai wajah orang sungguhan. */
export default function Sorot({ inisial, ukuran = 'md' }) {
  const kelas = ukuran === 'lg' ? 'h-56 w-56 text-6xl' : 'h-36 w-36 text-4xl';
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-end justify-center overflow-hidden rounded-full border border-chalk/12 bg-stage ${kelas}`}
    >
      <div className="spotlight absolute inset-0" />
      <span className="relative mb-[18%] font-[family-name:var(--font-archivo)] font-extrabold tracking-tight text-spot">
        {inisial}
      </span>
      <span className="absolute inset-x-[22%] bottom-[12%] h-[3px] rounded-full bg-spot/40 blur-[2px]" />
    </div>
  );
}
