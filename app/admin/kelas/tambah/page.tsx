"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";

function TambahKelasContent() {
  const searchParams = useSearchParams();
  const grade = searchParams.get("grade") || "10";

  const [classNameSuffix, setClassNameSuffix] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!classNameSuffix.trim()) return;
    setSuccessMessage(
      `Kelas berhasil ditambahkan: Kelas ${grade} ${classNameSuffix.toUpperCase()}`
    );
    setClassNameSuffix("");
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <div className="flex flex-col items-center gap-4 pb-6 border-b border-[#EBEBE8]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#EBEBE8] bg-white text-xs font-medium text-[#5A5A52]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57]" />
          Manajemen Kelas &bull; Tingkat {grade}
        </div>
        <h1 className="text-3xl font-semibold text-[#111111] tracking-tight">
          Tambah Rombongan Belajar
        </h1>
        <p className="text-sm text-[#5A5A52] max-w-md font-normal leading-relaxed">
          Tingkat kelas telah dikunci otomatis ke Kelas {grade}. Silakan masukkan penamaan kelas (contoh: A, 1, atau IPA 1).
        </p>
      </div>

      <div className="p-8 bg-white border border-[#E2E2DF] rounded-[10px] shadow-sm text-left space-y-6">
        {successMessage && (
          <div className="p-4 bg-[#F0FDF4] border border-[#DCFCE7] text-[#166534] rounded-[6px] text-xs font-medium">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A45] mb-2">
              Tingkat Kelas (Terkunci)
            </label>
            <input
              type="text"
              disabled
              value={`Kelas ${grade}`}
              className="w-full px-4 py-3 bg-[#F4F4F0] border border-[#E2E2DF] rounded-[6px] text-sm text-[#7A7A70] cursor-not-allowed font-medium"
            />
          </div>

          <div>
            <label
              htmlFor="suffix"
              className="block text-xs font-semibold uppercase tracking-wider text-[#4A4A45] mb-2"
            >
              Nama / Kode Kelas (Sufiks)
            </label>
            <input
              id="suffix"
              type="text"
              required
              value={classNameSuffix}
              onChange={(e) => setClassNameSuffix(e.target.value)}
              placeholder="Contoh: A, 1, atau IPA 1"
              className="w-full px-4 py-3 bg-[#FBFBFA] border border-[#E2E2DF] rounded-[6px] text-sm text-[#1A1A1A] placeholder-[#9A9A90] focus:outline-none focus:border-[#1A1A1A] transition-colors"
            />
            <p className="text-[11px] text-[#7A7A70] mt-1.5">
              Hasil akhir sistem: <span className="font-semibold text-[#111111]">Kelas {grade} {classNameSuffix.toUpperCase()}</span>
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-[#1A1A1A] hover:bg-[#333333] text-white font-medium text-xs rounded-[6px] transition-all cursor-pointer"
            >
              Simpan Kelas Baru
            </button>
            <Link
              href="/admin/dashboard"
              className="py-3 px-4 border border-[#E2E2DF] hover:bg-[#F8F8F6] text-[#1A1A1A] font-medium text-xs rounded-[6px] transition-all text-center"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function TambahKelasPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-sm text-[#6A6A60]">Memuat form kelas...</div>}>
      <TambahKelasContent />
    </Suspense>
  );
}
