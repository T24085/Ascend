import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Shop', href: '#collections' },
  { label: 'Collections', href: '#collections' },
  { label: 'Train', href: '#train' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
];

const heroFeatures = [
  { label: 'Premium quality', icon: 'bolt' },
  { label: 'Built for performance', icon: 'shield' },
  { label: 'Worldwide shipping', icon: 'globe' },
  { label: 'Limited drops', icon: 'box' },
];

const philosophyPoints = [
  {
    title: 'Mind',
    text: 'Stay focused. Push beyond limits.',
    icon: 'triangle',
  },
  {
    title: 'Body',
    text: 'Train with intensity. Build without limits.',
    icon: 'arm',
  },
  {
    title: 'Soul',
    text: 'Stay disciplined. Never stop evolving.',
    icon: 'heart',
  },
];

const productCards = [
  { title: 'Ascend Oversized Tee', price: '$44.00', tone: 'amber' },
  { title: 'Ascend Hoodie', price: '$89.00', tone: 'violet' },
  { title: 'Performance Shorts', price: '$49.00', tone: 'blue' },
  { title: 'Core Dad Hat', price: '$32.00', tone: 'teal' },
];

const footerLinks = [
  { label: 'Shop', href: '#collections' },
  { label: 'Collections', href: '#collections' },
  { label: 'Train', href: '#train' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

const heroImage = new URL('../Hero Banner.png', import.meta.url).href;
const philosophyImage = new URL('../1st Section Banner.png', import.meta.url).href;
const featuresImage = new URL('../4th Banner Strip.png', import.meta.url).href;
const lifestyleImage = new URL('../5th strip center image.png', import.meta.url).href;
const logoImage = new URL('../Website Logo 1.png', import.meta.url).href;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!elements.length) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const brandMark = useMemo(
    () => (
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__inner" />
      </span>
    ),
    [],
  );

  return (
    <div className="page-shell">
      <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''} ${menuOpen ? 'topbar--menu-open' : ''}`}>
        <a className="brand" href="#top" aria-label="Ascend Performance home">
          {brandMark}
          <span className="brand-copy">
            <span className="brand-copy__name">ASCEND</span>
            <span className="brand-copy__tag">PERFORMANCE</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions" aria-label="Utility">
          <IconButton label="Account">
            <UserIcon />
          </IconButton>
          <IconButton label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton label="Cart">
            <CartIcon />
            <span className="cart-badge">0</span>
          </IconButton>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero section" id="top" style={{ '--hero-image': `url(${heroImage})` }}>
          <div className="hero__copy" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <p className="hero__kicker" data-reveal style={{ '--reveal-delay': '120ms' }}>
              DISCIPLINE TRANSFORMS.
            </p>
            <h1 className="hero__title" data-reveal style={{ '--reveal-delay': '180ms' }}>
              <span>TRAIN LIKE A</span>
              <span>WARRIOR</span>
            </h1>
            <p className="hero__description" data-reveal style={{ '--reveal-delay': '260ms' }}>
              Performance streetwear built for those who push limits and break barriers.
            </p>
            <div className="hero__actions" data-reveal style={{ '--reveal-delay': '340ms' }}>
              <a className="button button--primary" href="#collections">
                SHOP COLLECTION
              </a>
              <a className="button button--secondary" href="#train">
                EXPLORE TRAINING
              </a>
            </div>
            <div className="hero__feature-grid" data-reveal style={{ '--reveal-delay': '420ms' }}>
              {heroFeatures.map((feature, index) => (
                <div
                  key={feature.label}
                  className="feature-chip"
                  data-reveal
                  style={{ '--reveal-delay': `${520 + index * 90}ms` }}
                >
                  <span className="feature-chip__icon" aria-hidden="true">
                    <FeatureIcon kind={feature.icon} />
                  </span>
                  <span className="feature-chip__label">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true" data-reveal style={{ '--reveal-delay': '180ms' }}>
            <div className="hero__edge-label">LEVEL UP EVERY DAY</div>
            <div className="hero__stat">100%</div>
          </div>
        </section>

        <section className="philosophy section" id="about" style={{ '--philosophy-image': `url(${philosophyImage})` }}>
          <div className="philosophy__content" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <div className="section-label" data-reveal style={{ '--reveal-delay': '160ms' }}>
              OUR PHILOSOPHY
            </div>
            <h2>POWER IS EARNED. GROWTH IS A CHOICE.</h2>
            <p data-reveal style={{ '--reveal-delay': '240ms' }}>
              Every rep. Every decision. Every day. We create gear for those who choose to level up
              mentally and physically.
            </p>
            <a className="button button--dark" href="#journal" data-reveal style={{ '--reveal-delay': '320ms' }}>
              OUR STORY
            </a>
          </div>

          <div className="philosophy__points" data-reveal style={{ '--reveal-delay': '180ms' }}>
            {philosophyPoints.map((point, index) => (
              <div
                key={point.title}
                className="principle"
                data-reveal
                style={{ '--reveal-delay': `${220 + index * 110}ms` }}
              >
                <span className="principle__icon" aria-hidden="true">
                  <FeatureIcon kind={point.icon} />
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="collection section" id="collections">
          <div className="collection__lead" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <div className="section-label section-label--gold" data-reveal style={{ '--reveal-delay': '120ms' }}>
              FEATURED COLLECTION
            </div>
            <h2>NEW DROPS. NEXT LEVEL STYLE.</h2>
            <a className="button button--primary button--compact" href="#contact" data-reveal style={{ '--reveal-delay': '200ms' }}>
              VIEW ALL PRODUCTS
            </a>
          </div>

          <div className="collection__rail" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <button className="rail-arrow" type="button" aria-label="Previous products">
              <ChevronLeft />
            </button>
            <div className="product-grid">
              {productCards.map((product, index) => (
                <article
                  className={`product-card product-card--${product.tone}`}
                  key={product.title}
                  data-reveal
                  style={{ '--reveal-delay': `${180 + index * 110}ms` }}
                >
                  <div className="product-card__art">
                    <span className="product-card__logo" aria-hidden="true">
                      <span className="product-card__mark" />
                    </span>
                  </div>
                  <div className="product-card__meta">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
            <button className="rail-arrow" type="button" aria-label="Next products">
              <ChevronRight />
            </button>
          </div>
        </section>

        <section className="feature-strip section" id="journal" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <img src={featuresImage} alt="" />
        </section>

        <section className="community section" id="train">
          <div className="community__left" data-reveal style={{ '--reveal-delay': '80ms' }}>
            <div className="section-label" data-reveal style={{ '--reveal-delay': '120ms' }}>
              JOIN THE MOVEMENT
            </div>
            <h2>WE RISE TOGETHER.</h2>
            <p data-reveal style={{ '--reveal-delay': '200ms' }}>
              More than a brand. We&apos;re a community of warriors who push, grow, and ascend to the
              highest version of themselves.
            </p>
            <a className="button button--primary button--compact" href="#contact" data-reveal style={{ '--reveal-delay': '260ms' }}>
              JOIN THE COMMUNITY
            </a>
            <div className="social-row" aria-label="Social links" data-reveal style={{ '--reveal-delay': '340ms' }}>
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <YoutubeIcon />
              </SocialIcon>
              <SocialIcon label="TikTok">
                <TiktokIcon />
              </SocialIcon>
              <SocialIcon label="Discord">
                <DiscordIcon />
              </SocialIcon>
            </div>
          </div>

          <div className="community__center" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <img src={lifestyleImage} alt="" />
          </div>

          <div className="community__right" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <div className="section-label section-label--gold" data-reveal style={{ '--reveal-delay': '260ms' }}>
              LATEST DROP
            </div>
            <h2>ASCEND COLLECTION</h2>
            <p data-reveal style={{ '--reveal-delay': '340ms' }}>
              Tap into your potential. Unleash your inner warrior.
            </p>
            <a className="button button--primary button--compact" href="#collections" data-reveal style={{ '--reveal-delay': '420ms' }}>
              SHOP NOW
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <a className="footer__brand" href="#top" aria-label="Ascend Performance home">
          <img src={logoImage} alt="" />
        </a>
        <nav className="footer__nav" aria-label="Footer">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="footer__meta">
          (c) 2024 Ascend Performance
          <br />
          All rights reserved.
        </p>
      </footer>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} id="mobile-menu">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="mobile-menu__actions">
          <a className="button button--primary button--compact" href="#collections">
            SHOP COLLECTION
          </a>
          <a className="button button--secondary button--compact" href="#train">
            EXPLORE TRAINING
          </a>
        </div>
      </div>
    </div>
  );
}

function IconButton({ label, children }) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  );
}

function SocialIcon({ label, children }) {
  return (
    <a className="social-icon" href="#contact" aria-label={label}>
      {children}
    </a>
  );
}

function FeatureIcon({ kind }) {
  switch (kind) {
    case 'bolt':
      return <BoltIcon />;
    case 'shield':
      return <ShieldIcon />;
    case 'globe':
      return <GlobeIcon />;
    case 'box':
      return <CubeIcon />;
    case 'triangle':
      return <TriangleIcon />;
    case 'arm':
      return <ArmIcon />;
    case 'heart':
      return <HeartIcon />;
    default:
      return null;
  }
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 10-14h-6l0-6Z" fill="none" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 20 5v6c0 5-3.2 8.7-8 11-4.8-2.3-8-6-8-11V5l8-3Z" fill="none" />
      <path d="m8.8 12 2.1 2.2 4.4-5.1" fill="none" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" />
      <path
        d="M3 12h18M12 3c2.5 2.7 3.5 5.4 3.5 9S14.5 19.3 12 22m0-19c-2.5 2.7-3.5 5.4-3.5 9S9.5 19.3 12 22"
        fill="none"
      />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" fill="none" />
    </svg>
  );
}

function TriangleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 15H4l8-15Z" fill="none" />
      <path d="M12 8v7" fill="none" />
    </svg>
  );
}

function ArmIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 15c1.8-1.8 3.7-2.7 5.5-2.7 2.6 0 3.8 1.4 5.5 3.5V20h-3v-1.5H9V20H6v-3.2L8 15Z"
        fill="none"
      />
      <path d="M9 9.5 11.2 7 14 9.2" fill="none" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-7-4.5-9.2-8.8C.8 8.4 2.7 5 6.3 5c1.9 0 3.2 1 3.7 2 0 0 1.2-2 3.7-2 3.6 0 5.5 3.4 3.5 7.2C19 16.5 12 21 12 21Z"
        fill="none"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" />
      <path d="M5 20c1.7-4 12.3-4 14 0" fill="none" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" />
      <path d="m16 16 4 4" fill="none" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h2l2.2 10.5h9.3l1.8-7.5H7.4" fill="none" />
      <circle cx="10" cy="19" r="1.2" />
      <circle cx="18" cy="19" r="1.2" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5 8.5 12l6 7" fill="none" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.5 5 6 7-6 7" fill="none" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" />
      <circle cx="12" cy="12" r="3.5" fill="none" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" fill="none" />
      <path d="m11 10 4 2-4 2v-4Z" fill="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 5c1.2 2.6 3.1 4 6 4v4.2c-1.8 0-3.4-.4-4.8-1.2V18c0 2.9-2.3 5-5.2 5S4 20.8 4 18s2.3-5 5.2-5c.6 0 1.1.1 1.6.2V5h2.2Z"
        fill="none"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 7.5C9.3 6.5 14.7 6.5 17 7.5c.7 1.2 1.2 2.7 1.4 4.2-1 1.4-2.4 2.3-4 2.9l-.8-1.3c.4-.1.8-.3 1.1-.5-.2-.1-.4-.2-.7-.3l-.7.9c-1.3.4-2.6.4-3.9 0l-.7-.9c-.2.1-.5.2-.7.3.3.2.7.4 1.1.5l-.8 1.3c-1.6-.6-3-1.5-4-2.9.2-1.5.7-3 1.4-4.2Z"
        fill="none"
      />
      <circle cx="9.5" cy="12" r=".9" />
      <circle cx="14.5" cy="12" r=".9" />
    </svg>
  );
}

export default App;
