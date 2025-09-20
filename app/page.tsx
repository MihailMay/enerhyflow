// app/page.tsx
export default function Home() {
  const features = [
    { icon: "🏋️", title: "Сучасний інвентар" },
    { icon: "👨‍🏫", title: "Професійні тренери" },
    { icon: "⏰", title: "Гнучкий графік" },
    { icon: "💪", title: "Індивідуальні тренування" },
  ];

  return (
    <main className="container">
      <h1 className="title">Наші переваги</h1>

      {/* Блок з перевагами */}
      <section className="advantages">
        <div className="advantages-list">
          {features.map((f, i) => (
            <div key={i} className="card brown">
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
            </div>
          ))}
        </div>
        <img
          src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
          alt="Training"
          className="main-image"
        />
      </section>

      {/* Два великі блоки */}
      <section className="two-cols">
        <div className="card gray">
          <h3>Індивідуальні тренування</h3>
          <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
        </div>
        <div className="column-images">
          <img
            src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
            alt="Training"
          />
          <img
            src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
            alt="Training"
          />
        </div>
      </section>

      {/* Рандомні коментарі */}
      <h2 className="subtitle">Рандомні коментарі</h2>
      <section className="comments">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="card black">
              <span>👤 Індивідуальні</span>
              <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
            </div>
          ))}
      </section>

      {/* Коло з картинкою */}
      <h2 className="subtitle">Зміни себе вже сьогодні!</h2>
      <div className="circle-image">
        <img
          src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
          alt="Sport"
        />
        <div className="circle-text">
          <h3>Індивідуальні</h3>
          <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
        </div>
      </div>

      {/* Нижні два блоки */}
      <section className="bottom-blocks">
        <div className="card black">
          <span>👤 Індивідуальні</span>
          <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
        </div>
        <img
          src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
          alt="Training"
        />
        <img
          src="https://interatletika.com.ua/upload/iblock/9cc/poleznye_zanyatiya_sportom_na_svezhem_vozdukhe.jpg"
          alt="Training"
        />
        <div className="card black">
          <span>👤 Індивідуальні</span>
          <p>«EnergyFlow» – ваш надійний партнер у світі спорту.</p>
        </div>
      </section>
    </main>
  );
}
