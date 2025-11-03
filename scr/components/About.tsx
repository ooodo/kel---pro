import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <h3 className="text-2xl font-semibold">حول طارق</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div>
          <p className="leading-relaxed">
            طارق الزوار, العمر 18, اليمن. مطور ومصمم ومهتم بالذكاء الاصطناعي وتطبيقاته التجارية.
          </p>
          <ul className="mt-4 space-y-2">
            <li>مهارات: AI, Web, Design, Marketing</li>
            <li>قابل للعمل عن بعد ولنماذج الدفع المختلفة</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">نبذة بالإنجليزية</h4>
          <p className="mt-2">
            Tareq Alzuwar, 18, Yemen. Focused on AI systems, web development and UI design.
          </p>
        </div>
      </div>
    </section>
  );
}
