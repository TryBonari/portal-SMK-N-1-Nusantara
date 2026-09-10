import Link from "next/link";

export default function ManajemenKelasPage() {
  const grades = [
    { grade: 10, title: "Tingkat Kelas 10" },
    { grade: 11, title: "Tingkat Kelas 11" },
    { grade: 12, title: "Tingkat Kelas 12" },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto bg-[#FBFBFA] min-h-screen">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#EBEBE8]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#EBEBE8] bg-white text-xs font-medium text-[#5A5A52] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57]" />
            Manajemen Akademik &bull; Rombongan Belajar
          </div>
          <h1 className="text-3xl font-semibold text-[#111111] tracking-tight">
            Manajemen Kelas
          </h1>
          <p className="text-sm text-[#5A5A52] mt-1 max-w-xl font-normal leading-relaxed">
            Kelola daftar rombongan belajar dan penambahan kelas per tingkat.
          </p>
        </div>
        <Link
          href="/admin/kelas/tambah?grade=10"
          className="px-4 py-3 bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-medium rounded-[6px] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
        >
          <span>+ Tambah Kelas Baru</span>
        </Link>
      </div>

      {/* Grades Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {grades.map((item) => (
          <div
            key={item.grade}
            className="group p-6 bg-white border border-[#E2E2DF] rounded-[10px] hover:border-[#1A1A1A] transition-all flex flex-col justify-between gap-6 shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-medium text-[#7A7A70] uppercase tracking-wider">
                  Tingkatan
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium text-white bg-[#1A1A1A]">
                  Kelas {item.grade}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6A6A60]">
                  Daftar kelas dan rekapitulasi siswa aktif tingkat {item.grade}.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#F0F0EC]">
              <div className="py-6 text-center text-xs text-[#9A9A90] border border-dashed border-[#E2E2DF] rounded-[6px] bg-[#FBFBFA]">
                Belum ada kelas terdaftar.
              </div>
              <Link
                href={`/admin/kelas/tambah?grade=${item.grade}`}
                className="w-full py-2.5 px-3 border border-[#E2E2DF] text-center text-xs font-medium text-[#1A1A1A] hover:bg-[#F8F8F6] hover:border-[#1A1A1A] rounded-[6px] transition-all block"
              >
                + Tambah Kelas {item.grade} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
