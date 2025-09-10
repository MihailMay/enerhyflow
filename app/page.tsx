// app/page.tsx
import { Dumbbell, Users, Clock, User } from "lucide-react";

export default function Home() {
const advantages = [
  { icon: "🏋️", title: "Сучасний інвентар" },
  { icon: "👨‍🏫", title: "Професійні тренери" },
  { icon: "⏰", title: "Гнучкий графік" },
  { icon: "🙋‍♂️", title: "Індивідуальні тренування" },
];


  return (
    <main className="p-8 space-y-16">
      {/* Наші переваги */}
      <section>
        <h2 className="text-center text-2xl font-bold mb-6">Наші переваги</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-amber-900 text-white p-4 rounded-xl shadow"
              >
                <div className="text-xl">{adv.icon}</div>
                <div>
                  <h3 className="font-semibold">{adv.title}</h3>
                  <p className="text-sm">«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="/img/treadmill.jpg"
            alt="Тренування"
            className="rounded-xl shadow"
          />
        </div>
      </section>

      {/* Індивідуальні тренування */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="bg-gray-500 text-white p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Індивідуальні тренування</h3>
          <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
        </div>
        <div className="grid gap-4">
          <img src="/img/gym1.jpg" alt="Зал" className="rounded-xl" />
          <img src="/img/gym2.jpg" alt="Тренажери" className="rounded-xl" />
        </div>
      </section>

      {/* Рандомні коментарі */}
      <section>
        <h2 className="text-center text-2xl font-bold mb-6">Рандомні коментарі</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-black text-white p-4 rounded-xl shadow flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-semibold">
                <User /> Індивідуальні
              </div>
              <p className="text-sm">«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
