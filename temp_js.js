// =================== UNIFIED CART & WISHLIST SYSTEM =================== //

// Storage keys
const CART_KEY = "cartItems";
const WISHLIST_KEY = "wishlistItems";

// ---------- Storage Helpers ----------
function getStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function setStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// ---------- Cart Functions ----------
function addToCart(product) {
    let cart = getStorage(CART_KEY);
    
    // Check if product already exists
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.qty += product.qty || 1;
        existingItem.price = existingItem.unitPrice * existingItem.qty;
    } else {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            unitPrice: product.price / (product.qty || 1),
            qty: product.qty || 1,
            image: product.image
        };
        cart.push(cartItem);
    }
    
    setStorage(CART_KEY, cart);
    updateCartUI();
    showNotification('notification_added_to_cart');
}

function removeFromCart(id) {
    let cart = getStorage(CART_KEY).filter(item => item.id !== id);
    setStorage(CART_KEY, cart);
    updateCartUI();
    showNotification('notification_removed_from_cart');
}

function updateCartUI() {
    let cart = getStorage(CART_KEY);
    let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    // Update all cart counters
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalItems;
        el.classList.toggle('hidden', totalItems === 0);
    });
    
    // Update cart sidebar if it exists
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems && cartTotal) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-stone-500 text-center py-8">Your cart is empty</p>';
            cartTotal.textContent = '£0.00';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-medium text-sm">${item.name}</h4>
                        <p class="text-stone-600 text-sm">Qty: ${item.qty}</p>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="text-stone-400 hover:text-red-500">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `£${total.toFixed(2)}`;
        }
    }
}

// ---------- Wishlist Functions ----------
function addToWishlist(product) {
    let wishlist = getStorage(WISHLIST_KEY);
    
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        setStorage(WISHLIST_KEY, wishlist);
        updateWishlistUI();
        showNotification('notification_added_to_wishlist');
    } else {
        showNotification('notification_already_in_wishlist');
    }
}

function removeFromWishlist(id) {
    let wishlist = getStorage(WISHLIST_KEY).filter(item => item.id !== id);
    setStorage(WISHLIST_KEY, wishlist);
    updateWishlistUI();
    showNotification('notification_item_removed_from_wishlist');
}

function updateWishlistUI() {
    let wishlist = getStorage(WISHLIST_KEY);
    let count = wishlist.length;
    
    // Update all wishlist counters
    document.querySelectorAll('.wishlist-count').forEach(el => {
        el.textContent = count;
        el.classList.toggle('hidden', count === 0);
    });
    
    // Update wishlist sidebar if it exists
    const wishlistItems = document.getElementById('wishlist-items');
    
    if (wishlistItems) {
        if (wishlist.length === 0) {
            wishlistItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your wishlist is empty</p>';
        } else {
            wishlistItems.innerHTML = wishlist.map(item => `
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-medium text-sm">${item.name}</h4>
                        <p class="text-gray-600 text-sm">£${item.price}</p>
                    </div>
                    <button onclick="removeFromWishlist('${item.id}')" class="text-gray-400 hover:text-red-500">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    }
    
    // Update wishlist heart icons
    document.querySelectorAll('.wishlist-icon').forEach(icon => {
        const productId = icon.closest('[data-product-id]')?.getAttribute('data-product-id');
        if (productId && wishlist.some(item => item.id === productId)) {
            icon.classList.remove('text-gray-500');
            icon.classList.add('text-red-500');
        } else {
            icon.classList.remove('text-red-500');
            icon.classList.add('text-gray-500');
        }
    });
}

// ---------- UI Functions ----------
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
    }
}

function toggleWishlist() {
    const sidebar = document.getElementById('wishlist-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');
    }
}

function showNotification(messageKey) {
    // Get current language
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Get translated message with fallback
    let message = messageKey; // Default fallback
    
    // Try to get translation if languageContent is available
    if (typeof languageContent !== 'undefined' && languageContent[currentLang] && languageContent[currentLang][messageKey]) {
        message = languageContent[currentLang][messageKey];
    } else {
        // Fallback to hardcoded English messages if translations not loaded
        const fallbackMessages = {
            'notification_added_to_cart': 'Item added to cart!',
            'notification_removed_from_cart': 'Item removed from cart!',
            'notification_cart_cleared': 'Cart cleared!',
            'notification_added_to_wishlist': 'Added to wishlist!',
            'notification_removed_from_wishlist': 'Removed from wishlist!',
            'notification_item_removed_from_wishlist': 'Item removed from wishlist!',
            'notification_invalid_email': 'Please enter a valid email address.',
            'notification_subscribed': 'Thank you for subscribing! You\'ll receive 10% off your first order.',
            'notification_already_in_wishlist': 'Item already in wishlist!'
        };
        message = fallbackMessages[messageKey] || messageKey;
    }
    
    // Remove existing notification
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-check"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ---------- Search Functions ----------
function toggleSearch() {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
        overlay.classList.toggle('hidden');
        if (!overlay.classList.contains('hidden')) {
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.focus();
        }
    }
}

function searchProducts(event) {
    const query = event.target.value.toLowerCase();
    const results = document.getElementById('search-results');
    
    if (!results) return;
    
    if (query.length < 2) {
        results.innerHTML = '';
        return;
    }
    
    // Mock search results
    const mockResults = [
        { name: 'Vitamin C Serum', price: 89, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
        { name: 'Hyaluronic Moisturizer', price: 75, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
        { name: 'Retinol Cream', price: 95, image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
    ];
    
    const filteredResults = mockResults.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    
    results.innerHTML = filteredResults.map(item => `
        <div class="flex items-center space-x-3 p-2 hover:bg-stone-50 rounded cursor-pointer">
            <img src="${item.image}" alt="${item.name}" class="w-10 h-10 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-medium">${item.name}</h4>
                <p class="text-stone-600 text-sm">£${item.price}</p>
            </div>
        </div>
    `).join('');
}

// ---------- Mobile Menu Functions ----------
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
    if (overlay) {
        overlay.classList.toggle('hidden');
    }
}

// ---------- Initialize ----------
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    updateWishlistUI();
});