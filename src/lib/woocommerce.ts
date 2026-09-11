export const getWoocommerceApiUrl = (endpoint: string) => {
  const storeUrl = process.env.WC_STORE_URL;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!storeUrl || !consumerKey || !consumerSecret) {
    throw new Error('WooCommerce credentials are not set in environment variables.');
  }

  // Construct URL with query parameters for authentication to avoid CORS/Auth issues in some setups
  // Though for Next.js server-side fetch, Basic Auth headers are better.
  return `${storeUrl}/wp-json/wc/v3/${endpoint}`;
};

export const getWoocommerceAuthHeader = () => {
  const consumerKey = process.env.WC_CONSUMER_KEY || '';
  const consumerSecret = process.env.WC_CONSUMER_SECRET || '';
  
  const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  return {
    Authorization: `Basic ${token}`,
    'Content-Type': 'application/json',
  };
};

export async function getProductCategories() {
  try {
    const url = getWoocommerceApiUrl('products/categories');
    
    // Disable caching to show new products instantly
    const res = await fetch(url, {
      headers: getWoocommerceAuthHeader(),
      next: { revalidate: 0 } 
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching WooCommerce categories:', error);
    return [];
  }
}

export async function getProducts(categoryId?: number) {
  try {
    let endpoint = 'products?status=publish';
    if (categoryId) {
      endpoint += `&category=${categoryId}`;
    }
    
    const url = getWoocommerceApiUrl(endpoint);
    
    const res = await fetch(url, {
      headers: getWoocommerceAuthHeader(),
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching WooCommerce products:', error);
    return [];
  }
}

export async function getProductById(id: number) {
  try {
    const url = getWoocommerceApiUrl(`products/${id}`);
    
    const res = await fetch(url, {
      headers: getWoocommerceAuthHeader(),
      next: { revalidate: 0 }
    });
    
    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error(`Error fetching WooCommerce product ${id}:`, error);
    return null;
  }
}

export async function createWoocommerceOrder(orderData: any) {
  try {
    const url = getWoocommerceApiUrl('orders');
    
    const res = await fetch(url, {
      method: 'POST',
      headers: getWoocommerceAuthHeader(),
      body: JSON.stringify(orderData)
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('WooCommerce order creation failed:', errorText);
      throw new Error(`Failed to create WooCommerce order: ${res.statusText}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error creating WooCommerce order:', error);
    throw error;
  }
}
