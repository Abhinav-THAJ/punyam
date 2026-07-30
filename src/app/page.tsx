import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Play, ArrowRight } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img src="/hero_bg.png" alt="Spiritual Background" className={styles.heroBg} />
        
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.heroSubtitle}>
              <span className={styles.line}></span>
              Discover. Connect. Elevate.
              <span className={styles.line}></span>
            </div>
            <h1 className={styles.heroTitle}>A WORLD OF<br />SPIRITUALITY</h1>
            <h2 className={styles.heroTagline}>All You Need. All in Punyam.</h2>
            <p className={styles.heroDesc}>
              Punyam is your one-stop destination for authentic spiritual products, astrology services, sacred journeys, enriching literature, cultural programs and a vibrant spiritual community.
            </p>
            <div className={styles.heroActions}>
              <Link href="/shop" className="btn btn-primary">EXPLORE STORE</Link>
              <Link href="/astrology" className="btn btn-outline">BOOK CONSULTATION</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST VIDEOS SECTION */}
      <section className={`section-padding ${styles.videosSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionSubtitle}>LATEST FROM PUNYAM</div>
              <h2 className={styles.sectionTitle}>Our Latest Videos</h2>
            </div>
            <button className="btn btn-outline">VIEW ALL VIDEOS</button>
          </div>
          
          <div className="grid-4">
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <img src="/video_1.png" alt="The Power of Daily Prayers" />
                <div className={styles.videoDuration}>6:45</div>
                <div className={styles.playIcon}><Play size={24} /></div>
              </div>
              <h3 className={styles.videoTitle}>The Power of Daily Prayers</h3>
              <p className={styles.videoMeta}>2.4K views • 2 days ago</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <img src="/video_2.png" alt="Understanding Your Horoscope" />
                <div className={styles.videoDuration}>8:30</div>
                <div className={styles.playIcon}><Play size={24} /></div>
              </div>
              <h3 className={styles.videoTitle}>Understanding Your Horoscope</h3>
              <p className={styles.videoMeta}>3.1K views • 5 days ago</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <img src="/video_3.png" alt="Sacred Yatra to Kedarnath" />
                <div className={styles.videoDuration}>7:12</div>
                <div className={styles.playIcon}><Play size={24} /></div>
              </div>
              <h3 className={styles.videoTitle}>Sacred Yatra to Kedarnath</h3>
              <p className={styles.videoMeta}>4.2K views • 1 week ago</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.videoThumb}>
                <img src="/video_4.png" alt="Importance of Our Culture" />
                <div className={styles.videoDuration}>5:50</div>
                <div className={styles.playIcon}><Play size={24} /></div>
              </div>
              <h3 className={styles.videoTitle}>Importance of Our Culture</h3>
              <p className={styles.videoMeta}>1.8K views • 1 week ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className={`section-padding ${styles.exploreSection}`}>
        <div className="container">
          <div className={styles.exploreHeader}>
            <div>
              <div className={styles.sectionSubtitle}>WHAT WE OFFER</div>
              <h2 className={styles.sectionTitle}>Explore Punyam</h2>
            </div>
            <p className={styles.exploreDesc}>
              From spiritual products to life guidance, we bring together everything that enriches your spiritual journey.
            </p>
          </div>

          <div className="grid-6">
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>🛍️</div>
              <h3 className={styles.exploreCardTitle}>Punyam Store</h3>
              <p className={styles.exploreCardDesc}>Authentic spiritual products from trusted sellers across India.</p>
              <a href="/shop" className={styles.exploreLink}>EXPLORE STORE <ArrowRight size={14} /></a>
            </div>
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>✨</div>
              <h3 className={styles.exploreCardTitle}>Punyam Astrology</h3>
              <p className={styles.exploreCardDesc}>Consult with experts or check your horoscope online.</p>
              <a href="/astrology" className={styles.exploreLink}>EXPLORE ASTROLOGY <ArrowRight size={14} /></a>
            </div>
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>🤝</div>
              <h3 className={styles.exploreCardTitle}>Punyam Community</h3>
              <p className={styles.exploreCardDesc}>Join a like-minded spiritual community and make an impact.</p>
              <a href="/community" className={styles.exploreLink}>JOIN COMMUNITY <ArrowRight size={14} /></a>
            </div>
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>🏔️</div>
              <h3 className={styles.exploreCardTitle}>Punyam Yatra</h3>
              <p className={styles.exploreCardDesc}>Book spiritual journeys curated by trusted travel partners.</p>
              <a href="/yatra" className={styles.exploreLink}>EXPLORE YATRA <ArrowRight size={14} /></a>
            </div>
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>📖</div>
              <h3 className={styles.exploreCardTitle}>Punyam Literature</h3>
              <p className={styles.exploreCardDesc}>Read, learn and download spiritual books and ebooks.</p>
              <a href="/literature" className={styles.exploreLink}>EXPLORE LITERATURE <ArrowRight size={14} /></a>
            </div>
            <div className={styles.exploreCard}>
              <div className={styles.exploreIcon}>🎭</div>
              <h3 className={styles.exploreCardTitle}>Punyam Culturals</h3>
              <p className={styles.exploreCardDesc}>Celebrate our culture through events, arts and programs.</p>
              <a href="/culturals" className={styles.exploreLink}>EXPLORE CULTURALS <ArrowRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section className={`section-padding ${styles.connectSection}`}>
        <div className="container flex">
          <div className={styles.connectInfo}>
            <div className={styles.sectionSubtitle}>STAY CONNECTED</div>
            <h2 className={styles.sectionTitle}>Connect With Us</h2>
            <p>Follow us on social media and be a part of our spiritual journey.</p>
            <button className={`btn btn-outline ${styles.followBtn}`}>FOLLOW US</button>
          </div>
          <div className={styles.connectGrid}>
            <div className={styles.socialCard}>
              <FaInstagram className={styles.socialIcon} size={32} />
              <h4>Instagram</h4>
              <p>@punyam.store</p>
            </div>
            <div className={styles.socialCard}>
              <FaYoutube className={styles.socialIcon} size={32} />
              <h4>YouTube</h4>
              <p>Punyam Official</p>
            </div>
            <div className={styles.socialCard}>
              <FaFacebook className={styles.socialIcon} size={32} />
              <h4>Facebook</h4>
              <p>@punyam.store</p>
            </div>
            <div className={styles.socialCard}>
              <FaWhatsapp className={styles.socialIcon} size={32} />
              <h4>WhatsApp</h4>
              <p>Join Channel</p>
            </div>
            <div className={styles.socialCard}>
              <FaTelegram className={styles.socialIcon} size={32} />
              <h4>Telegram</h4>
              <p>Punyam Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={`section-padding ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="text-center">
            <div className={styles.sectionSubtitle}>
              <span className={styles.line}></span> TESTIMONIALS <span className={styles.line}></span>
            </div>
            <h2 className={styles.sectionTitle}>What People Say</h2>
          </div>

          <div className="grid-4" style={{ marginTop: '40px' }}>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>
                Punyam Store has everything I need for my daily pooja. Products are authentic and delivered with great care.
              </p>
              <div className={styles.testimonialAuthor}>
                <img src="/avatar_1.png" alt="Anitha R." />
                <div>
                  <h4>Anitha R.</h4>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>
                The astrology consultation was very insightful and accurate. Highly recommend the expert guidance!
              </p>
              <div className={styles.testimonialAuthor}>
                <img src="/avatar_2.png" alt="Ramesh K." />
                <div>
                  <h4>Ramesh K.</h4>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>
                Our Kedarnath yatra was beautifully organized. Truly a blessed experience.
              </p>
              <div className={styles.testimonialAuthor}>
                <img src="/avatar_1.png" alt="Vijay S." />
                <div>
                  <h4>Vijay S.</h4>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialText}>
                Love the ebooks! They are well written and very easy to understand.
              </p>
              <div className={styles.testimonialAuthor}>
                <img src="/avatar_2.png" alt="Meera Iyer" />
                <div>
                  <h4>Meera Iyer</h4>
                  <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className={styles.newsletterSection}>
        <div className="container flex-between">
          <div className={styles.newsletterInfo}>
            <div className={styles.sectionSubtitle}>BE THE FIRST TO KNOW</div>
            <h2 className={styles.sectionTitle}>Stay Updated with Punyam</h2>
            <p>Subscribe to our newsletter for the latest updates, offers and spiritual insights.</p>
          </div>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary">SUBSCRIBE</button>
          </div>
        </div>
      </section>

    </div>
  );
}
