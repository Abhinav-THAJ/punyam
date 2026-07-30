import { getPosts } from "../../lib/wordpress";
import Link from "next/link";

export default async function ShopPage() {
  // Simulating fetching products from WordPress Headless Backend
  const products = await getPosts();

  return (
    <div className="container section-padding" style={{ marginTop: "80px", minHeight: "60vh" }}>
      <div className="text-center" style={{ marginBottom: "40px" }}>
        <div className="sectionSubtitle">
          <span className="line" style={{ display: 'inline-block' }}></span> MARKETPLACE <span className="line" style={{ display: 'inline-block' }}></span>
        </div>
        <h1 className="sectionTitle">Punyam Store</h1>
      </div>

      <div className="grid-4">
        {/* Placeholder for products that will come from WP backend */}
        {products.map((item: any) => (
          <div key={item.id} style={{ border: "1px solid var(--border-color)", borderRadius: "8px", padding: "16px", textAlign: "center", backgroundColor: "var(--white)", display: "flex", flexDirection: "column" }}>
            <Link href={`/shop/${item.id}`} style={{ display: "block", height: "200px", borderRadius: "4px", marginBottom: "16px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
              <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={item.image} alt={item.title.rendered} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </Link>
            <Link href={`/shop/${item.id}`}>
              <h3 style={{ fontSize: "15px", fontFamily: "var(--font-playfair)", marginBottom: "8px", minHeight: "40px", color: "var(--text-main)" }}>{item.title.rendered}</h3>
            </Link>
            <p style={{ color: "var(--primary-color)", fontWeight: "600", marginTop: "auto", marginBottom: "16px" }}>{item.price}</p>
            <Link href={`/shop/${item.id}`} className="btn btn-outline" style={{ width: "100%", fontSize: "11px", padding: "8px", display: "inline-block", textAlign: "center" }}>
              VIEW DETAILS
            </Link>
          </div>
        ))}
      </div>
      

    </div>
  );
}
