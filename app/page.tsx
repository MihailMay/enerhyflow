import { Dumbbell, Users, Clock, User } from "lucide-react";

export default function Home() {
  const advantages = [
    { 
      icon: "🔩",
      title: "Сучасний інвентар",
      description: "Новітнє обладнання від провідних світових брендів для ефективних тренувань"
    },
    { 
      icon: "🎓",
      title: "Професійні тренери",
      description: "Сертифіковані фахівці з багаторічним досвідом роботи та індивідуальним підходом"
    },
    { 
      icon: "⏱️",
      title: "Гнучкий графік",
      description: "Працюємо з 6:00 до 23:00 без вихідних, щоб ви могли тренуватися у зручний час"
    },
    { 
      icon: "💪",
      title: "Індивідуальні тренування",
      description: "Персональні програми, розроблені спеціально під ваші цілі та можливості"
    },
  ];

  const comments = [
    "Найкращий спортзал у місті! Професійні тренери та сучасне обладнання.",
    "Відвідую вже рік. Результат вражаючий! Персональний підхід до кожного клієнта.",
    "Чистота, порядок, якісне обладнання. Рекомендую всім друзям!",
    "Гнучкий графік роботи дозволяє тренуватися після роботи. Дуже зручно!",
    "Тренери допомагають досягти мети. Вже скинув 10 кг за 3 місяці!",
    "Атмосфера спонукає до тренувань. Завжди виходжу повним енергії!"
  ];

  return (
    <main className="p-8 space-y-16">
      {/* Наші переваги */}
      <section>
        <h2>Наші переваги</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <div key={i} className="advantage-card">
                <div className="card-icon">{adv.icon}</div>
                <div>
                  <h3>{adv.title}</h3>
                  <p className="text-sm">{adv.description}</p>
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
        <div className="training-card">
          <h3>Індивідуальні тренування</h3>
          <p>
            Персональні заняття з досвідченими тренерами, які розроблять 
            програму спеціально для вас. Індивідуальний підхід, контроль 
            техніки виконання вправ та мотивація для досягнення найкращих результатів.
          </p>
        </div>
        <div className="grid gap-4">
          <img 
            src="/img/gym1.jpg" 
            alt="Зал" 
            className="rounded-xl shadow" 
          />
          <img 
            src="/img/gym2.jpg" 
            alt="Тренажери" 
            className="rounded-xl shadow" 
          />
        </div>
      </section>

      {/* Рандомні коментарі */}
      <section>
        <h2>Відгуки наших клієнтів</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {comments.map((comment, i) => (
            <div key={i} className="comment-card">
              <div className="flex items-center gap-2 font-semibold">
                <span className="card-icon">👤</span>
                Клієнт {i + 1}
              </div>
              <p className="text-sm">"{comment}"</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}