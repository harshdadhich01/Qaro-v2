const brands = [
  { name: "Lemme Be", domain: "lemmebe.com" },
  { name: "Mojocare", domain: "mojocare.com" },
  { name: "BeatO", domain: "beatoapp.com" },
  { name: "The Women's Company", domain: "thewomanscompany.co.in" },
  { name: "Himalayan Organics", domain: "thehimalayanorganics.in" },
  { name: "AADAR - Good Old Habits", domain: "aadar.co" },
  { name: "Team Computers", domain: "teamcomputers.com" },
  { name: "Mamaearth", domain: "mamaearth.in" },
  { name: "SPLAT", domain: "splatglobal.com" },
  { name: "Jasper Colin", domain: "jaspercolin.com" },
  { name: "Radisson", domain: "radissonhotels.com" },
  { name: "HeritageVerse", domain: "heritageverse.net" },
  { name: "Varaha Heritage", domain: "varahaheritage.com" },
  { name: "MedCords", domain: "medcords.com" },
  { name: "Aayu", domain: "aayu.app" },
];

function BrandSet({ items, duplicate = false }: { items: typeof brands; duplicate?: boolean }) {
  return (
    <div className="brand-marquee-set" aria-hidden={duplicate || undefined}>
      {items.map((brand) => (
        <div className="brand-marquee-item" key={`${duplicate ? "copy" : "main"}-${brand.name}`}>
          <span className="brand-marquee-icon" aria-hidden="true">
            <img
              src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`}
              alt=""
              width="28"
              height="28"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </span>
          <span>{brand.name}</span>
        </div>
      ))}
    </div>
  );
}

function MarqueeLane({ items, reverse = false, hidden = false }: { items: typeof brands; reverse?: boolean; hidden?: boolean }) {
  return (
    <div className="brand-marquee-window" aria-hidden={hidden || undefined}>
      <div className={`brand-marquee-track${reverse ? " is-reverse" : ""}`}>
        <BrandSet items={items} />
        <BrandSet items={items} duplicate />
      </div>
    </div>
  );
}

export function BrandMarquee() {
  const shiftedBrands = [...brands.slice(8), ...brands.slice(0, 8)];

  return (
    <section className="brand-marquee" aria-labelledby="brand-marquee-title">
      <div className="brand-marquee-intro">
        <div>
          <span className="eyebrow">Brands in motion</span>
          <h2 id="brand-marquee-title">Built alongside ambitious teams.</h2>
        </div>
        <p><strong>15</strong> brands across technology, health, consumer and culture.</p>
      </div>
      <div className="brand-marquee-lanes">
        <MarqueeLane items={brands} />
        <MarqueeLane items={shiftedBrands} reverse hidden />
      </div>
    </section>
  );
}
