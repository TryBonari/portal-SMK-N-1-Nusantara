import Link from "next/link";

export default function KontakPage() {
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
            Kontak & Informasi
          </h1>
          <p className="text-sm text-[#7A7A70]">Hubungi kami untuk pertanyaan dan bantuan teknis portal.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-5 border border-[#E2E2DF] bg-white rounded-[8px]">
            <h3 className="font-semibold text-[#111111] mb-2">Alamat Sekolah</h3>
            <p className="text-[#5A5A52] leading-relaxed">
              Jl. Pendidikan No. 45, Kebayoran Baru<br />
              Jakarta Selatan, 12180
            </p>
          </div>

          <div className="p-5 border border-[#E2E2DF] bg-white rounded-[8px]">
            <h3 className="font-semibold text-[#111111] mb-2">Kontak Layanan</h3>
            <p className="text-[#5A5A52] leading-relaxed">
              Telepon: (021) 789-0123<br />
              Email: info@sman1nusantara.sch.id
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-[#EBEBE8] text-xs text-[#7A7A70] text-center">
        &copy; 2026 SMA Negeri 1 Nusantara.
      </footer>
    </main>
  );
}
