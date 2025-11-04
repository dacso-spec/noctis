// =================== UNIFIED CART & WISHLIST SYSTEM =================== //
(function () {
  const CART_KEY = 'cart';
  const WISHLIST_KEY = 'wishlist';

  // --- utils ---
  const safeParse = (s, fb) => { try { return JSON.parse(s); } catch { return fb; } };
  const currency = n => `$${(Number(n)||0).toFixed(2)}`;

  const normalizeProduct = (p) => {
    if (!p) return null;
    if (typeof p === 'string') return { id: p, name: p, price: 0, image: '', qty: 1 };
    return {
      id: p.id ?? String(p.sku ?? p.ID ?? p),
      name: p.name ?? p.title ?? 'Item',
      price: Number(p.price ?? p.cost ?? 0),
      image: p.image ?? p.img ?? '',
      qty: Number(p.qty ?? p.quantity ?? 1),
    };
  };

  const normalizeList = (list, isCart=false) => {
    if (!Array.isArray(list)) return [];
    const items = list.map(normalizeProduct).filter(Boolean);

    if (isCart) {
      // merge duplicates by id
      const m = new Map();
      for (const it of items) {
        const cur = m.get(it.id);
        if (cur) cur.qty += it.qty || 1;
        else m.set(it.id, { ...it, qty: it.qty || 1 });
      }
      return [...m.values()];
    }

    // wishlist unique by id
    const seen = new Set(), out = [];
    for (const it of items) if (!seen.has(it.id)) { seen.add(it.id); out.push(it); }
    return out;
  };

  const load = (key, isCart=false) => normalizeList(safeParse(localStorage.getItem(key), []), isCart);
  const save = (key, arr, isCart=false) => localStorage.setItem(key, JSON.stringify(normalizeList(arr, isCart)));

  // --- state accessors ---
  const getCart = () => load(CART_KEY, true);
  const setCart = (arr) => save(CART_KEY, arr, true);

  const getWishlist = () => load(WISHLIST_KEY, false);
  const setWishlist = (arr) => save(WISHLIST_KEY, arr, false);

  // --- notification system ---
  function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    if (!notification || !text) return;
    
    text.textContent = message;
    notification.classList.remove('hidden');
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 300);
    }, 3000);
  }

  // --- mutations ---
  function addToCart(product, qty=1) {
    const p = normalizeProduct({ ...product, qty });
    if (!p) return;
    const cart = getCart();
    const i = cart.findIndex(x => x.id === p.id);
    if (i >= 0) cart[i].qty += p.qty || 1;
    else cart.push(p);
    setCart(cart);
    updateCartUI();
    updateBadges(); // immediate update (no timeout)
    showNotification(`${p.name} added to cart!`);
  }

  function removeFromCart(id, removeAll=false) {
    const cart = getCart();
    const i = cart.findIndex(x => x.id === id);
    if (i < 0) return;
    if (removeAll || cart[i].qty <= 1) cart.splice(i,1);
    else cart[i].qty -= 1;
    setCart(cart);
    updateCartUI(); updateBadges();
  }

function addToWishlist(product) {
    const p = normalizeProduct(product);
    if (!p) return;
    const wl = getWishlist();
    if (!wl.some(x => x.id === p.id)) wl.push({ id: p.id, name: p.name, price: p.price, image: p.image });
    setWishlist(wl);
    updateWishlistUI();
    updateBadges(); // immediate update (no timeout)
}

function removeFromWishlist(id) {
    setWishlist(getWishlist().filter(x => x.id !== id));
    updateWishlistUI();
    updateBadges(); // immediate update (no timeout)
  }

  // --- UI helpers ---
  function updateBadges() {
    const cNum = getCart().reduce((n, i) => n + (i.qty || 1), 0);
    const wNum = getWishlist().length;

    document.querySelectorAll('[data-badge="cart"]').forEach(el => {
      el.textContent = String(cNum);
      el.classList.toggle('hidden', cNum === 0);
    });

    document.querySelectorAll('[data-badge="wishlist"]').forEach(el => {
      el.textContent = String(wNum);
      el.classList.toggle('hidden', wNum === 0);
    });
  }

  function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!list && !totalEl) return;
    const cart = getCart();

    if (list) {
      list.innerHTML = cart.length === 0
        ? '<p class="text-stone-500 text-center py-8">Your cart is empty</p>'
        : cart.map(i => `
          <div class="flex items-center gap-3 py-2">
            <img src="${i.image}" alt="${i.name}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1">
              <div class="text-sm font-medium">${i.name}</div>
              <div class="text-xs text-stone-600">${i.qty} × ${currency(i.price)}</div>
                    </div>
            <button class="text-red-500 text-xs" onclick="removeFromCart('${i.id}', true)">Remove</button>
                </div>
            `).join('');
    }

    if (totalEl) {
      const total = cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
      totalEl.textContent = currency(total);
    }
  }

  function updateWishlistUI() {
    const list = document.getElementById('wishlist-items');
    if (!list) return;
    const wl = getWishlist();
    list.innerHTML = wl.length === 0
      ? '<p class="text-stone-500 text-center py-8">Your wishlist is empty</p>'
      : wl.map(p => `
        <div class="flex items-center gap-3 py-2">
          <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-cover rounded">
            <div class="flex-1">
            <div class="text-sm font-medium">${p.name}</div>
            <div class="text-xs text-stone-600">${currency(p.price)}</div>
            </div>
          <button class="text-red-500 text-xs" onclick="removeFromWishlist('${p.id}')">Remove</button>
        </div>
    `).join('');
}

  // --- sidebars ---
  function toggleCart() {
    const s = document.getElementById('cart-sidebar');
    const o = document.getElementById('cart-overlay');
    if (s) s.classList.toggle('translate-x-full');
    if (o) o.classList.toggle('hidden');
    if (s && !s.classList.contains('translate-x-full')) updateCartUI();
  }
  function toggleWishlist() {
    const s = document.getElementById('wishlist-sidebar');
    const o = document.getElementById('wishlist-overlay');
    if (s) s.classList.toggle('translate-x-full');
    if (o) o.classList.toggle('hidden');
    if (s && !s.classList.contains('translate-x-full')) updateWishlistUI();
  }

  // --- init + cross-page sync ---
  function init() {
    // migrate any legacy storage (IDs-only etc.)
    setCart(getCart());
    setWishlist(getWishlist());

    // Update UI
    updateBadges();
    updateCartUI(); updateWishlistUI();

    // if another tab/page changes storage, live-update badges/sidebars here too
    window.addEventListener('storage', (e) => {
      if (e.key === CART_KEY) { updateBadges(); updateCartUI(); }
      if (e.key === WISHLIST_KEY) { updateBadges(); updateWishlistUI(); }
    });
  }

  // expose to inline onclicks / other scripts
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.addToWishlist = addToWishlist;
  window.removeFromWishlist = removeFromWishlist;
  window.toggleCart = toggleCart;
  window.toggleWishlist = toggleWishlist;
  window.updateCartUI = updateCartUI;
  window.updateWishlistUI = updateWishlistUI;
  window.updateBadges = updateBadges;
  window.showNotification = showNotification;
  window.getCart = getCart;
  window.setCart = setCart;
  window.getWishlist = getWishlist;
  window.setWishlist = setWishlist;

  document.addEventListener('DOMContentLoaded', init);
})();