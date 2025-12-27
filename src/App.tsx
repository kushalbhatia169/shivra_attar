/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.css";
import { CATEGORY_OPTIONS, GENDER_OPTIONS, PRODUCTS } from "./products"
import logo from "./assets/images/shivra_logo-preview.png"
import { HERO_BACKGROUNDS } from "./hero";
import { GIFTING_PRODUCTS } from "./gift_section";
import { useEffect, useMemo, useState } from "react";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <a href="#home" className="nav-brand">
          <img
            src={logo}
            alt="Shivra Attars"
            className="logo-image"
          />
          <span className="logo-text">Shivra Attars</span>
        </a>
      </div>
      <nav className="nav-right">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#gifting">Gifting</a>
        <a href="#about">About Us</a>
        <a href="#contact" className="nav-cta">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export function HomeSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setBgIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const currentBg = HERO_BACKGROUNDS[bgIndex];

  return (
    <section
      id="home"
      className="section hero hero-with-bg hero-single"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">From Kannauj, India’s Attar City</p>
          <h1>
            Crafting pure organic attars through traditional distillation and
            ethically sourced botanicals — keeping nature&apos;s essence alive
            in every drop.
          </h1>
          <p className="hero-sub">
            Handcrafted, chemical-free and rooted in centuries-old distillation
            from the perfume capital of India.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn primary">
              Shop Attars
            </a>
            <a href="#gifting" className="btn ghost">
              Explore Gift Boxes
            </a>
          </div>
          <div className="hero-meta">
            <span>100% natural oils</span>
            <span>Alcohol-free attars</span>
            <span>Made in Kannauj</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const [showHint, setShowHint] = useState(false);

  const handlePriceClick = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 1800); // hide after 1.8s
  };

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="product-tagline">{product.tag}</p>

        <p className="product-meta">
          Quantity: {product.qty} •{" "}
          <button
            type="button"
            className="price price-clickable"
            onClick={handlePriceClick}
          >
            ---₹
          </button>
        </p>

        {showHint && (
          <p className="price-hint price-hint-pop">
            Click ⬇️ below to enquire price 
          </p>
        )}

        <a href="#contact" className="btn full">
          Enquire
        </a>
      </div>
    </div>
  );
}

function ProductsSection() {
  const [category, setCategory] = useState("All");
  const [gender, setGender] = useState("All");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        category === "All" ? true : p.category === category;
      const matchGender = gender === "All" ? true : p.gender === gender;
      return matchCategory && matchGender;
    });
  }, [category, gender]);

  return (
    <section id="products" className="section">
      <div className="section-header">
        <h2>Attars, Dhoop & Aromatic Essentials</h2>
        <p>
          Pure attars, slow-burning dhoop and ritual essentials crafted in
          Kannauj, curated for everyday wear and gifting.
        </p>
      </div>

      {/* Filters */}
      <div className="product-filters">
        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-pills">
            {CATEGORY_OPTIONS.map((c) => (
              <button
                key={c}
                type="button"
                className={
                  "filter-pill" + (category === c ? " active" : "")
                }
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">For</span>
          <div className="filter-pills">
            {GENDER_OPTIONS.map((g) => (
              <button
                key={g}
                type="button"
                className={"filter-pill" + (gender === g ? " active" : "")}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-results">
            No products match this combination yet. Try a different filter.
          </p>
        )}
      </div>
    </section>
  );
}


function GiftingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GIFTING_PRODUCTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GIFTING_PRODUCTS.length - 1 : prev - 1
    );
  };

  const currentGift = GIFTING_PRODUCTS[currentIndex];

  return (
    <section id="gifting" className="section gifting">
      <div className="gifting-inner">
        <div className="gifting-copy">
          <h2>Gifting, Curated With Fragrance</h2>
          <p>
            Thoughtfully designed gift boxes that celebrate rituals, memories
            and the timeless art of Indian perfumery — perfect for weddings,
            festivities and intimate celebrations.
          </p>
          <ul className="gifting-list">
            <li>Customisable attar trios and discovery sets</li>
            <li>Handwritten note and eco-conscious packaging</li>
            <li>Bulk & corporate gifting options on request</li>
          </ul>
          <a href="#contact" className="btn primary">
            Enquire for Gifting
          </a>
        </div>

        <div className="gifting-visual">
          <div className="gifting-carousel">
            <button
              type="button"
              className="gift-arrow gift-arrow-left"
              onClick={handlePrev}
              aria-label="Previous gift option"
            >
              ‹
            </button>

            <div className="gifting-card">
              <div className="gifting-image-wrap">
                <img src={currentGift.image} alt={currentGift.title} />
              </div>
              <div className="gifting-body">
                <h3>{currentGift.title}</h3>
                <p className="gifting-description">{currentGift.description}</p>
                <p className="gifting-note">{currentGift.note}</p>
                <button className="btn full">
                  <a href="#contact" className="btn primary">
                    Enquire on WhatsApp
                  </a>
              </button>
              </div>

              {/* dots INSIDE the card, at bottom */}
              <div className="gift-dots">
                {GIFTING_PRODUCTS.map((gift, index) => (
                  <button
                    key={gift.id}
                    type="button"
                    className={
                      "gift-dot" + (index === currentIndex ? " active" : "")
                    }
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`View ${gift.title}`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="gift-arrow gift-arrow-right"
              onClick={handleNext}
              aria-label="Next gift option"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="about-layout">
        <div className="about-copy">
          <h2>Rooted in Kannauj&apos;s Fragrance Heritage</h2>
          <p>
            Rooted in the timeless fragrance heritage of Kannauj, Uttar
            Pradesh — the world-renowned Attar City of India — our brand is
            dedicated to preserving and elevating the art of natural perfumery.
            We humbly carry this legacy forward with every bottle we craft.
          </p>
          <p>
            We specialize in pure, natural attars and fragrances, including
            incense sticks, rose water, sandalwood blends and other aromatic
            creations inspired by nature. Our foundation is built on science,
            tradition and authenticity.
          </p>
          <p>
            Led by a founder with 15+ years of research and development
            experience in the oil segment and an M.Sc. in Biotechnology, each
            formulation blends scientific precision with traditional wisdom,
            ensuring products that are aromatic, pure, safe and thoughtfully
            developed.
          </p>
          <p>
            We source the finest natural ingredients and follow time-honoured
            distillation techniques passed down through generations of Kannauj
            artisans. Our fragrances are chemical-free, long-lasting and deeply
            connected to nature — crafted to soothe the mind and uplift the
            soul.
          </p>
          <p>
            For us, fragrance is more than a scent; it is a memory, an emotion
            and a reflection of purity. Through our creations, we invite you to
            experience the authentic essence of Kannauj, crafted with care,
            integrity and passion.
          </p>
        </div>
        <div className="about-side">
          <div className="about-badge">Handcrafted in Kannauj</div>
          <ul className="about-points">
            <li>Small-batch production</li>
            <li>Ethically sourced botanicals</li>
            <li>Alcohol and phthalate free</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const WHATSAPP_NUMBER = "918800692657"; // Your number without +91

  const handleQuickEnquiry = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const text = encodeURIComponent(
      `Quick Enquiry from Shivra Attars Website\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    // Open WhatsApp Web/Mobile with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    
    // Optional: reset form after opening WhatsApp
    form.reset();
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>
          For orders, bulk gifting or custom fragrance enquiries, reach out on
          email, WhatsApp or social.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-block">
          <h3>Say Hello</h3>
          <p>
            Email:{" "}
            <a href="mailto:kalpataru.monikapatel@gmail.com">
              kalpataru.monikapatel@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/918800692657" target="_blank" rel="noreferrer">
              +91 8800 692 657
            </a>
          </p>
        </div>

        <div className="contact-block">
          <h3>Social</h3>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/reel/DRmgIaTibUG/?igsh=dHVqdWI4ZWVrZnox"
              target="_blank"
              rel="noreferrer"
            >
              @kalptaruofficial
            </a>
          </p>
          <p>
            Youtube:{" "}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Our Page
            </a>
          </p>
        </div>

        <div className="contact-block">
          <h3>Addresses</h3>
          <p>
            Manufacturing: Bagiya Fazal Imam, Kannauj, Uttar Pradesh, India
          </p>
          <p>Registered Office: Noida, Uttar Pradesh, India</p>
        </div>

        <div className="contact-block">
          <h3>Quick Enquiry</h3>
          <form className="contact-form" onSubmit={handleQuickEnquiry}>
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea 
              name="message" 
              rows={3}
              placeholder="Tell us about your enquiry..." 
              required 
            />
            <button type="submit" className="btn full">
              Send to WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


// Meta Pixel placeholder (just include in your real index.html head)
/*
  In index.html:

  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src='https://connect.facebook.net/en_US/fbevents.js';
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  </script>
*/

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shivra Attars. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomeSection />
        <ProductsSection />
        <GiftingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}





