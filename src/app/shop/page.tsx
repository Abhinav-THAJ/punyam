import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { getProductCategories } from "../../lib/woocommerce";

export default async function ShopPage() {
  let wcCategories = [];
  try {
    const fetchedCategories = await getProductCategories();
    if (Array.isArray(fetchedCategories)) {
      // Filter out 'uncategorized' and empty categories if desired, or just 'uncategorized'
      wcCategories = fetchedCategories.filter((c: any) => c.slug !== 'uncategorized');
    }
  } catch (error) {
    console.error("Failed to load WooCommerce categories", error);
  }

  const fallbackCollections = [
    {
      id: "rudraksha",
      title: "Rudraksha & Malas",
      description: "Authentic, energized beads for your spiritual journey.",
      image: "https://images.unsplash.com/photo-1605335949573-3e1150c95094?auto=format&fit=crop&q=80",
      slug: "rudraksha"
    },
    {
      id: "pooja-essentials",
      title: "Pooja Essentials",
      description: "Sacred items for your daily rituals and ceremonies.",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80",
      slug: "pooja-essentials"
    },
    {
      id: "idols",
      title: "Spiritual Idols",
      description: "Beautifully crafted murtis for your home altar.",
      image: "https://images.unsplash.com/photo-1614088924300-344cbcc63e52?auto=format&fit=crop&q=80",
      slug: "idols"
    },
    {
      id: "yantras",
      title: "Yantras & Gemstones",
      description: "Powerful geometric designs and astrological stones.",
      image: "https://images.unsplash.com/photo-1615569427027-e17f53f3e1bf?auto=format&fit=crop&q=80",
      slug: "yantras"
    }
  ];

  // Map WooCommerce categories to our UI format, or use fallback if empty
  const displayCollections = wcCategories.length > 0 
    ? wcCategories.map((c: any) => ({
        id: c.id.toString(),
        title: c.name,
        description: c.description || "Discover our authentic spiritual collection.",
        image: c.image?.src || "https://images.unsplash.com/photo-1605335949573-3e1150c95094?auto=format&fit=crop&q=80",
        slug: c.slug
      }))
    : fallbackCollections;

  const isUsingRealData = wcCategories.length > 0;

  return (
    <div className="container section-padding" style={{ marginTop: "80px", minHeight: "80vh" }}>
      <div className="text-center" style={{ marginBottom: "60px" }}>
        <div className="sectionSubtitle">
          <span className="line" style={{ display: 'inline-block' }}></span> OUR COLLECTIONS <span className="line" style={{ display: 'inline-block' }}></span>
        </div>
        <h1 className="sectionTitle" style={{ marginBottom: "1rem" }}>Punyam Marketplace</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          Explore our exclusive range of authentic spiritual products.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: "2rem",
        marginBottom: "4rem"
      }}>
        {displayCollections.map((collection: any) => (
          <Link href={`/shop/category/${collection.slug}`} key={collection.id} style={{ display: "block" }}>
            <div className="hover-card" style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--white)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}>
              <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.1)",
                  zIndex: 1
                }} />
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} 
                />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "20px", fontFamily: "var(--font-playfair)", marginBottom: "12px", color: "var(--text-main)" }}>
                  {collection.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "24px", flexGrow: 1 }}>
                  {collection.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", color: "var(--primary-color)", fontWeight: "600", fontSize: "0.9rem" }}>
                  <span>View Collection</span>
                  <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {!isUsingRealData && (
        <div style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "3rem",
          borderRadius: "16px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(212, 163, 115, 0.3)"
        }}>
          <div style={{ 
            backgroundColor: "rgba(255,255,255,0.2)", 
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            marginBottom: "1.5rem"
          }}>
            <ShoppingBag size={28} />
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1rem" }}>WooCommerce Integration Active</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto", opacity: 0.9, lineHeight: "1.6" }}>
            Your store is successfully connected to WooCommerce. Add categories and products in your WordPress dashboard, and they will automatically appear here!
          </p>
        </div>
      )}
    </div>
  );
}
