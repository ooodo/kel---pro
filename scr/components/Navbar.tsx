import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="KEL" width={48} height={48} />
        <div>
          <h1 className="font-bold">KEL</h1>
          <p className="text-xs text-gray-400">طارق الزوار</p>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="#portfolio">المشاريع</Link>
        <Link href="#services">الخدمات</Link>
        <Link href="#contact">تواصل</Link>
        <Link href="/admin">لوحة الإدارة</Link>
      </nav>
    </header>
  );
}
