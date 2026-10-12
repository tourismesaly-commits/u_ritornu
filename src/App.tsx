import { useEffect, useState, type ReactNode } from "react"
import { NavLink } from "react-router"
import poolHero from "./imports/optimized/pool.webp"
import residenceBalconyHero from "./imports/optimized/residence-balcony.webp"
import residenceCourtyard from "./imports/optimized/residence-courtyard.webp"

 
const WHATSAPP =
  "https://wa.me/221774980186?text=Bonjour%20U%20Ritornu%2C%20je%20souhaite%20r%C3%A9server%20une%20chambre."

const images = {
  logo: "https://hercules-cdn.com/file_dpSC0t59std69nkxgF2Kkxzk",
  residence: "https://hercules-cdn.com/file_EhhxeHOvn0LIAaB7F24GEt4b",
  pool: "https://hercules-cdn.com/file_KZFoSZzPVCjVfSxe4c5fwkve",
}

const heroSlides = [
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764327/residence-facade-portrait.png",
    alt: "Vue lumineuse de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764295/ChatGPT_Image_Sep_26__2026__10_23_12_PM.png",
    alt: "Piscine de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764337/IMG_8456.JPG.jpg",
    alt: "Balcons et jardin de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764327/residence-facade-portrait.png",
    alt: "Façade et jardin de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764325/residence-courtyard.png",
    alt: "Cour intérieure de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791763256/ChatGPT_Image_Oct_7_2026_01_43_02_PM.png",
    alt: "Chambre bleue et cuisine de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_40_21_PM.png",
    alt: "Chambre et salle de bain de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_36_52_PM.png",
    alt: "Chambre rouge et cuisine de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_30_20_PM.png",
    alt: "Suite bleue et espace repas de la résidence U Ritornu",
  },
  {
    src: "https://res.cloudinary.com/r13aojto/image/upload/v1791764325/residence-courtyard.png",
    alt: "Suite bleue avec accès au balcon de la résidence U Ritornu",
  },
]

const roomGallery = [
  "https://res.cloudinary.com/r13aojto/image/upload/v1791763256/ChatGPT_Image_Oct_7_2026_01_43_02_PM.png",
  "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_40_21_PM.png",
  "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_36_52_PM.png",
  "https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_30_20_PM.png",
  "https://res.cloudinary.com/r13aojto/image/upload/v1791764325/residence-courtyard.png",
]

function Icon({ children, size = 20 }: { children: ReactNode, size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
    >
      {children}
    </svg>
  )
}

function MessageIcon() {
  return (
    <Icon size={17}>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A8 8 0 1 1 21 15Z" />
    </Icon>
  )
}

function WhatsAppButton({
  children,
  compact = false,
  className = "",
}: {
  children: ReactNode
  compact?: boolean
  className?: string
}) {
  return (
    <a
      className={`whatsapp ${compact ? "whatsapp--compact" : ""} ${className}`}
      href={WHATSAPP}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageIcon />
      {children}
    </a>
  )
}

const rooms = [
  {
    name: "Chambre Baobab",
    people: "2 pers.",
    area: "30 m²",
    price: "30 000 CFA",
    color: "green",
    initialSlide: 0,
  },
  {
    name: "Chambre Téranga",
    people: "2 pers.",
    area: "30 m²",
    price: "30 000 CFA",
    color: "yellow",
    initialSlide: 1,
  },
  {
    name: "Chambre Kora",
    people: "2 pers.",
    area: "30 m²",
    price: "30 000 CFA",
    color: "red",
    initialSlide: 2,
  },
]

const amenities = [
  {
    icon: "ac",
    title: "Chambre climatisée",
    text: "Profitez d'une chambre fraîche et confortable tout au long de votre séjour.",
  },
  {
    icon: "pool",
    title: "Accès piscine",
    text: "Détendez-vous au bord de la piscine, accessible pendant toute la durée du séjour.",
  },
  {
    icon: "waves",
    title: "Plage de Saly",
    text: "L'océan Atlantique et ses longues plages de sable doré tout proches.",
  },
  {
    icon: "sun",
    title: "Piscine et terrasse",
    text: "Un coin de fraîcheur sous les palmiers, ouvert toute l'année.",
  },
  {
    icon: "wifi",
    title: "Wifi fibre",
    text: "Un espace de travail confortable dans chaque chambre.",
  },
]

const nearby = [
  {
    time: "5 min",
    title: "Plage de Saly",
    image:
      "https://images.unsplash.com/photo-1644772088209-c71d5c59f719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    time: "15 min",
    title: "Port de pêche de Mbour",
    image:
      "https://images.unsplash.com/photo-1761471420566-5ca748e79afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    time: "40 min",
    title: "Safari Parc de Bandia",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
]

function AmenityIcon({ name }: { name: string }) {
  if (name === "ac")
    return (
      <Icon size={25}>
        <path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5l-15.6 11M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4 2-4 2M20 10l-4 2 4 2" />
      </Icon>
    )
  if (name === "pool")
    return (
      <Icon size={25}>
        <path d="M2 16c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 8 0M2 21c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 8 0M7 13V5a2 2 0 0 1 4 0v8M7 9h4" />
      </Icon>
    )
  if (name === "key")
    return (
      <Icon size={25}>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 9-9m-2 2 2 2m-5 1 2 2" />
      </Icon>
    )
  if (name === "waves")
    return (
      <Icon size={25}>
        <path d="M2 6c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 5 2M2 12c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 5 2M2 18c2.5 2 5 2 7.5 0s5-2 7.5 0 5 2 5 2" />
      </Icon>
    )
  if (name === "music")
    return (
      <Icon size={25}>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </Icon>
    )
  if (name === "sun")
    return (
      <Icon size={25}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </Icon>
    )
  if (name === "wifi")
    return (
      <Icon size={25}>
        <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a14 14 0 0 1 20 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </Icon>
    )
  return (
    <Icon size={25}>
      <path d="M3 2v20M8 2v8a2 2 0 0 1-4 0V2m12 0v20m0-20a5 5 0 0 1 5 5v5h-5" />
    </Icon>
  )
}

function FlagBar() {
  return (
    <div aria-hidden="true" className="flag-bar">
      <span />
      <span />
      <span />
    </div>
  )
}

function RoomCarousel({
  name,
  initialSlide,
}: {
  name: string
  initialSlide: number
}) {
  const [current, setCurrent] = useState(initialSlide)

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % roomGallery.length),
      5000,
    )
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="room-image">
      <img
        alt={`${name} — vue ${current + 1}`}
        className="room-carousel-image active"
        decoding="async"
        key={roomGallery[current]}
        loading="lazy"
        src="{roomGallery[0]}"
      />
      <div className="room-carousel-nav">
        <button
          aria-label={`Photo précédente de ${name}`}
          onClick={() =>
            setCurrent(
              (value) => (value - 1 + roomGallery.length) % roomGallery.length,
            )
          }
          type="button"
        >
          ‹
        </button>
        <div>
          {roomGallery.map((image, index) => (
            <button
              aria-label={`Afficher la photo ${index + 1} de ${name}`}
              className={current === index ? "active" : ""}
              key={image}
              onClick={() => setCurrent(index)}
              type="button"
            />
          ))}
        </div>
        <button
          aria-label={`Photo suivante de ${name}`}
          onClick={() =>
            setCurrent((value) => (value + 1) % roomGallery.length)
          }
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export type SitePage = "home" | "chambres" | "residence" | "contact"

export default function App({ page = "home" }: { page?: SitePage }) {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (page !== "home") return

    const timer = window.setInterval(
      () => setSlide((value) => (value + 1) % heroSlides.length),
      6000,
    )
    return () => window.clearInterval(timer)
  }, [page])

  useEffect(() => {
    if (page !== "home") return

    const nextImage = new Image()
    nextImage.src = heroSlides[(slide + 1) % heroSlides.length].src
  }, [page, slide])

  return (
    <main className={`page page--${page}`}>
      <header className="site-header">
        <div className="header-inner">
          <NavLink
            aria-label="Retour à l'accueil"
            className="brand"
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            <span>
              <i>U RI</i>
              <b>TO</b>
              <em>RNU</em>
            </span>
          </NavLink>
          <nav className="desktop-nav">
            <NavLink to="/chambres">Chambres</NavLink>
            <NavLink to="/residence">Résidence</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="header-actions">
            <WhatsAppButton compact>Nous écrire</WhatsAppButton>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <NavLink onClick={() => setMenuOpen(false)} to="/chambres">
            Chambres
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/residence">
            Résidence
          </NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">
            Contact
          </NavLink>
          <WhatsAppButton compact>Nous écrire</WhatsAppButton>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          alt={heroSlides[slide].alt}
          className="hero-image active"
          decoding="async"
          fetchPriority={slide === 0 ? "high" : "auto"}
          key={heroSlides[slide].src}
          loading={slide === 0 ? "eager" : "lazy"}
          src={heroSlides[slide].src}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            Chambres d'hôtes - Malicounda, Saly
          </p>
          <div className="hero-brand-art">
            <img
              alt="U Ritornu, Sénégal et Corse"
              decoding="async"
              fetchPriority="high"
              src="https://res.cloudinary.com/r13aojto/image/upload/v1791764318/uritorne-transparent.png"
            />
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#chambres">
              Découvrir les chambres
            </a>
            <WhatsAppButton>Réserver sur WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Image précédente"
            onClick={() =>
              setSlide((slide - 1 + heroSlides.length) % heroSlides.length)
            }
            type="button"
          >
            ‹
          </button>
          <div className="dots">
            {heroSlides.map((item, index) => (
              <button
                aria-label={`Afficher l'image ${index + 1}`}
                className={slide === index ? "active" : ""}
                key={item.src}
                onClick={() => setSlide(index)}
                type="button"
              />
            ))}
          </div>
          <button
            aria-label="Image suivante"
            onClick={() => setSlide((slide + 1) % heroSlides.length)}
            type="button"
          >
            ›
          </button>
        </div>
      </section>

      <section className="section return-section" id="retour">
        <div className="return-logo">
          <img
            alt="Logo U Ritornu, chambres d'hôtes à Saly"
            decoding="async"
            loading="lazy"
            src={images.logo}
          />
        </div>
        <div>
          <p className="eyebrow">Le sens du nom</p>
          <h2>
            « U Ritornu » : <i>le retour</i>
          </h2>
          <p className="muted">
            En langue corse, <strong>U Ritornu</strong> signifie « le retour ».
            Notre emblème, la tête de Maure, est un symbole fort de la Corse,
            ici posé sur la terre de la teranga.
          </p>
          <p className="muted">
            Deux îles, deux traditions d'accueil, une même idée : celle qu'on
            revient toujours là où l'on s'est senti chez soi. Chaque séjour à
            Saly est pensé pour que vous repartiez avec l'envie de revenir.
          </p>
          <FlagBar />
        </div>
      </section>

      <FlagBar />

      <section className="section" id="chambres">
        <p className="eyebrow">Nos chambres</p>
        <h2>Des chambres pensées pour votre confort</h2>
        <div className="room-grid">
          {rooms.map((room) => (
            <article
              className={`room-card room-card--${room.color}`}
              key={room.name}
            >
              <div className="room-image-wrap">
                <RoomCarousel
                  initialSlide={room.initialSlide}
                  name={room.name}
                />
              </div>
              <div className="room-body">
                <div className="room-meta">
                  <span>
                    <Icon size={16}>
                      <circle cx="9" cy="7" r="4" />
                      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2m0-17a4 4 0 0 1 0 7" />
                    </Icon>
                    {room.people}
                  </span>
                  <span>
                    <Icon size={16}>
                      <path d="M15 3h6v6m0-6-7 7M9 21H3v-6m0 6 7-7" />
                    </Icon>
                    {room.area}
                  </span>
                </div>
                <div className="room-bottom">
                  <p>
                    <strong>{room.price}</strong>
                    <small>par nuit</small>
                  </p>
                  <WhatsAppButton compact>Nous écrire</WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="residence">
        <p className="eyebrow">Notre maison</p>
        <h2>Découvrez la résidence</h2>
        <div className="residence-grid">
          <figure>
            <img
              alt="La résidence U Ritornu"
              decoding="async"
              loading="lazy"
              src={images.residence}
            />
            <figcaption>
              <h3>La résidence</h3>
              <p>Pierre, bois et jardin tropical</p>
            </figcaption>
          </figure>
          <figure>
            <img
              alt="Piscine de la résidence U Ritornu"
              decoding="async"
              loading="lazy"
              src={images.pool}
            />
            <figcaption>
              <h3>La piscine</h3>
              <p>Un coin de fraîcheur à partager</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="teranga-section" id="teranga">
        <div className="section">
          <div className="teranga-heading">
            <div>
              <p className="eyebrow">La teranga</p>
              <h2>Ici, l'étranger devient un membre de la famille</h2>
            </div>
            <p className="muted">
              La teranga est l'art sénégalais de l'hospitalité : partager,
              accueillir et prendre soin. C'est notre promesse, enrichie d'une
              touche de technologie.
            </p>
          </div>
          <div className="amenity-grid">
            {amenities.map((item) => (
              <article className="amenity-card" key={item.title}>
                <span className="amenity-icon">
                  <AmenityIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="saly">
        <p className="eyebrow">Autour de nous</p>
        <h2>Saly, la Petite-Côte à portée de main</h2>
        <p className="nearby-intro muted">
          La résidence est également située près de la sortie de l'autoroute à
          péage de Malicounda.
        </p>
        <div className="nearby-grid">
          {nearby.map((item) => (
            <article className="nearby-card" key={item.title}>
              <img
                alt={item.title}
                decoding="async"
                loading="lazy"
                src="https://res.cloudinary.com/r13aojto/image/upload/v1791763382/ChatGPT_Image_Oct_7_2026_01_30_20_PM.png"
              />
              <div>
                <p>
                  <Icon size={16}>
                    <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </Icon>
                  {item.time}
                </p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FlagBar />

      <footer id="contact">
        <div className="footer-glow" />
        <div className="section footer-grid">
          <div>
            <h2>
              Prêt à vivre la <i>teranga</i> ?
            </h2>
            <p className="muted">
              Écrivez-nous pour vos réservations.
            </p>
            <WhatsAppButton className="footer-button">
              Réserver sur WhatsApp
            </WhatsAppButton>
          </div>
          <ul>
            <li>
              <Icon>
                <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </Icon>
              Malicounda, Saly, Mbour - Sénégal
            </li>
            {["+221 77 498 01 86", "+221 78 161 96 89"].map((phone) => (
              <li key={phone}>
                <Icon>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </Icon>
                {phone}
              </li>
            ))}
            <li>
              <Icon>
                <rect height="16" rx="2" width="20" x="2" y="4" />
                <path d="m22 7-9 5.7a2 2 0 0 1-2 0L2 7" />
              </Icon>
              contact@uritornu.com
            </li>
          </ul>
          <div className="footer-map">
            <iframe
              allowFullScreen
              aria-label="Carte de Malicounda, Saly, Sénégal"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Malicounda%2C%20Saly%2C%20S%C3%A9n%C3%A9gal&output=embed"
              title="Localisation de U Ritornu à Malicounda, Saly"
            />
          </div>
          <p className="copyright">
            © 2026 U Ritornu - Résidence de chambres d'hôtes, Saly
          </p>
        </div>
      </footer>
    </main>
  )
}
