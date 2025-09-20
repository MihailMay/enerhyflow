export default function Home() {
  const features = [
    { icon: "🏋️", title: "Сучасний інвентар" },
    { icon: "👨‍🏫", title: "Професійні тренери" },
    { icon: "⏰", title: "Гнучкий графік" },
    { icon: "💪", title: "Індивідуальні тренування" },
  ];

  const comments = [
    "Najlepsza siłownia w mielicie! Profesjonalni trenerzy, nowoczesny sprzęt i przyjazna atmosfera. Zawsze czuję się zmotywowany i osiągam swoje cele. Gorąco polecam!",
    "Chodzę tutaj od ponad roku i efekty są niesamowite. Trenerzy zawsze służą pomocą, zajęcia są ciekawe, a siłownia czysta i dobrze zorganizowana. Czuję się zdrowszy i pełen energii",
    "Czysto, dobrze zorganizowane i najwyższej klasy sprzęt. Personel jest miły i zawsze gotowy do pomocy. Uwielbiam zajęcia grupowe dają dużo motywacji!",
    "Elastyczne godziny otwarcia pozwalają mi trenować nawet po pracy. Trenerzy są uważni i dają świetne wskazówki. Każdy trening przynosi satysfakcję!",
    "Trenerzy naprawdę dbają o postępy każdego. Schudkam 10 kg w 3 miesiące dzięki ich programowi. Atmosfera motywuje i wspiera. Czuję się silniejsza i pewniejsza siebie",
    "Atmosfera siłowni motywuje do osiągania celów. Duży wybor sprzęту i zajęć sprawia, że każdy trening jest ciekawy. Zawsze wychodzę pełен energii!"
  ];

  return (
    <main className="container">
      <h1 className="title">Наші переваги</h1>

      {/* Блок з перевагами */}
      <section className="advantages">
        <div className="advantages-list">
          {features.map((f, i) => (
            <div key={i} className="card dark-brown">
              <span className="icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>«EnergyFlow» допоможе вам досягти ваших спортивних цілей легко та ефективно.</p>
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
        <div className="card gray-brown">
          <h3>Індивідуальні тренування</h3>
          <p>
            Кожен тренер «EnergyFlow» підбирає програму спеціально для вас. Ми враховуємо ваш рівень підготовки,
            фізичні особливості та цілі. Ви зможете покращити витривалість, силу та гнучкість у комфортному та
            безпечному середовищі.
          </p>
        </div>
        <div className="column-images">
          <img className="columnimage1"
            src="https://kartinki.pics/uploads/posts/2021-03/1616080959_15-p-sportzal-krasivie-foto-18.jpg"
            alt="Training"
          />
        </div>
      </section>

      {/* Рандомні коментарі */}
      <h2 className="subtitle">Реальні відгуки наших клієнтів</h2>
      <section className="comments">
        {comments.map((c, i) => (
          <div key={i} className="card black">
            <span>👤 Клієнт</span>
            <p>{c}</p>
          </div>
        ))}
      </section>

      {/* Коло з картинкою */}
      <h2 className="subtitle">Зміни себе вже сьогодні!</h2>
      <div className="circle-image">
        <img
          src="https://static.tildacdn.com/tild3961-6236-4630-b266-353563303964/WhatsApp_Image_2021-.jpeg"
          alt="Sport"
        />
        <div className="circle-text">
          <h3>Індивідуальні тренування</h3>
          <p>Програма підлаштована під ваші потреби та ритм життя.</p>
        </div>
      </div>

      {/* Нижні два блоки */}
      <section className="bottom-blocks">
        <div className="bottom-row">
          <div className="cardblacklast">
            <span>👤 Персональний підхід</span>
            <p>
              Наші тренери приділяють увагу кожному клієнту. Ми стежимо за технікою виконання вправ та
              адаптуємо програму залежно від вашого прогресу. Ви завжди отримаєте підтримку та мотивацію.
            </p>
          </div>
          <img className="cardimg"
            src="https://img.championat.com/i/p/y/1631097555885234001.jpg"
            alt="Training"
          />
        </div>

        <div className="bottom-row">
          <img className="cardimg"
            src="https://feromon.ua/wp-content/uploads/2021/07/IMG_9515-1024x683.jpg"
            alt="Training"
          />
          <div className="cardblacklast">
            <span>👤 Результати помітні вже через місяць</span>
            <p>
              Завдяки регулярним тренуванням та персоналізованій програмі ви швидко помітите зміни у своїй фізичній формі,
              підвищення енергії та загальне покращення самопочуття. EnergyFlow робить спорт приємним та ефективним.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
