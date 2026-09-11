import { prisma } from "@/lib/prisma";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  let totalStudents = 0;
  let grade10Count = 0;
  let grade11Count = 0;
  let grade12Count = 0;

  try {
    totalStudents = await prisma.user?.count({
      where: { role: "USER" },
    }) || 0;

    grade10Count = await prisma.user?.count({
      where: {
        role: "USER",
        class: { grade: 10 },
      },
    }) || 0;

    grade11Count = await prisma.user?.count({
      where: {
        role: "USER",
        class: { grade: 11 },
      },
    }) || 0;

    grade12Count = await prisma.user?.count({
      where: {
        role: "USER",
        class: { grade: 12 },
      },
    }) || 0;
  } catch (err) {
    console.error("Error fetching student counts:", err);
  }

  const kelasStats = [
    {
      title: "Kelas 10",
      value: grade10Count,
      description: "Peserta didik aktif pada tingkat 10.",
      tag: "Kelas 10",
    },
    {
      title: "Kelas 11",
      value: grade11Count,
      description: "Peserta didik aktif pada tingkat 11.",
      tag: "Kelas 11",
    },
    {
      title: "Kelas 12",
      value: grade12Count,
      description: "Peserta didik aktif pada tingkat 12.",
      tag: "Kelas 12",
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto text-center">
      {/* Header Banner */}
      <div className="flex flex-col items-center gap-4 pb-6 border-b border-[#EBEBE8]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#EBEBE8] bg-white text-xs font-medium text-[#5A5A52]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57]" />
          Portal Akademik Resmi &bull; Administrator
        </div>
        <h1 className="text-3xl font-semibold text-[#111111] tracking-tight">
          Dashboard Utama Admin
        </h1>
        <p className="text-sm text-[#5A5A52] max-w-xl font-normal leading-relaxed">
          Pusat kendali ringkasan data kependidikan siswa dan direktori alumni SMA Negeri X.
        </p>
      </div>

      <div className="space-y-6">
        {/* Alumni Card (Full width) */}
        <div className="group p-8 bg-white border border-[#E2E2DF] rounded-[10px] hover:border-[#1A1A1A] transition-all flex flex-col items-center gap-4 shadow-sm">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-medium text-white bg-[#1A1A1A] uppercase tracking-wider">
            Direktori Lulusan
          </span>
          <div className="space-y-2 max-w-lg">
            <h3 className="text-lg font-semibold text-[#111111]">Alumni Sekolah</h3>
            <h2 className="text-4xl font-semibold text-[#111111] tracking-tight">
              3,500 <span className="text-base font-normal text-[#6A6A60]">Siswa</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6A6A60] leading-relaxed pt-1">
              Akumulasi data seluruh lulusan terdahulu yang tersimpan pada basis data resmi sekolah.
            </p>
          </div>
        </div>

        {/* Total Siswa Aktif Card (Full width) */}
        <div className="group p-8 bg-white border border-[#E2E2DF] rounded-[10px] hover:border-[#1A1A1A] transition-all flex flex-col items-center gap-4 shadow-sm">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-medium text-white bg-[#3B7A57] uppercase tracking-wider">
            Total Aktif
          </span>
          <div className="space-y-2 max-w-lg">
            <h3 className="text-lg font-semibold text-[#111111]">Siswa Aktif</h3>
            <h2 className="text-4xl font-semibold text-[#111111] tracking-tight">
              {totalStudents} <span className="text-base font-normal text-[#6A6A60]">Siswa</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6A6A60] leading-relaxed pt-1">
              Jumlah keseluruhan peserta didik yang terdaftar resmi dan aktif mengikuti kegiatan belajar mengajar semester ini.
            </p>
          </div>
        </div>

        {/* 3 Non-clickable Cards for Kelas 10, 11, 12 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {kelasStats.map((item, i) => (
            <div
              key={i}
              className="group p-6 bg-white border border-[#E2E2DF] rounded-[10px] flex flex-col items-center gap-3 shadow-sm"
            >
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium text-white bg-[#5A5A52] uppercase tracking-wider">
                {item.tag}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <h2 className="text-2xl font-semibold text-[#111111] tracking-tight">
                  {item.value}
                </h2>
                <p className="text-[10px] text-[#6A6A60] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* System Footer */}
        <div className="p-6 bg-white border border-[#E2E2DF] rounded-[10px] shadow-sm space-y-2 max-w-xl mx-auto">
          <h3 className="text-sm font-semibold text-[#111111]">Status Sistem Terpadu</h3>
          <p className="text-xs text-[#5A5A52] leading-relaxed">
            Data siswa akan diperbarui secara otomatis ketika admin melakukan entri data baru ke dalam sistem akademik.
          </p>
        </div>
      </div>
    </div>
  );
}
