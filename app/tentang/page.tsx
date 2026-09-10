import Link from "next/link";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E5E5E0]">
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-[#EBEBE8]">
        <Link href="/" className="text-sm font-medium text-[#6A6A60] hover:text-[#1A1A1A] transition-colors">
          ← Kembali
        </Link>
        <Link href="/" className="flex items-center gap-3">
          <span className="font-medium tracking-tight text-sm uppercase text-[#4A4A45]">
            SMA Negeri 1 Nusantara
          </span>
          <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" />
        </Link>
      </header>

      <section className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8 my-auto">
        <div className="border-b border-[#EBEBE8] pb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-[#111111] mb-2">
            Tentang Sekolah
          </h1>
          <p className="text-sm text-[#7A7A70]">Profil Singkat SMA Negeri 1 Nusantara</p>
        </div>

        <div className="space-y-6 text-[#4A4A45] leading-relaxed text-sm sm:text-base">
          <p>
            SMA Negeri 1 Nusantara didirikan dengan komitmen memberikan pendidikan unggul berbasis karakter dan teknologi modern. Sekolah kami berfokus pada pengembangan kecerdasan intelektual, emosional, dan spiritual peserta didik.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 border border-[#E2E2DF] bg-white rounded-[8px]">
              <h3 className="font-semibold text-[#111111] mb-1">Visi</h3>
              <p className="text-xs text-[#5A5A52]">
                Menjadi lembaga pendidikan terdepan dalam mencetak generasi berprestasi, berkarakter mulia, dan berdaya saing global.
              </p>
            </div>
            <div className="p-4 border border-[#E2E2DF] bg-white rounded-[8px]">
              <h3 className="font-semibold text-[#111111] mb-1">Misi</h3>
              <p className="text-xs text-[#5A5A52]">
                Menyelenggarakan pembelajaran berkualitas, memanfaatkan teknologi terpadu, serta membina iklim sekolah yang inklusif dan disiplin.
              </p>
            </div>
          </div>

          <p>
            Melalui sistem informasi terpadu ini, kami menghubungkan seluruh ekosistem sekolah secara efisien, transparan, dan terstruktur.
          </p>
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#EBEBE8] text-xs text-[#7A7A70] text-center">
        &copy; 2026 SMA Negeri 1 Nusantara.
      </footer>
    </main>
  );
}
