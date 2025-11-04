// =================== UNIFIED CART & WISHLIST SYSTEM =================== //

// Storage keys
const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

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
        existingItem.quantity += product.quantity || 1;
        existingItem.price = existingItem.unitPrice * existingItem.quantity;
    } else {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            unitPrice: product.price / (product.quantity || 1),
            quantity: product.quantity || 1,
            image: product.image
        };
        cart.push(cartItem);
    }
    
    setStorage(CART_KEY, cart);
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    let cart = getStorage(CART_KEY).filter(item => item.id !== id);
    setStorage(CART_KEY, cart);
    updateCartUI();
    showNotification('Item removed from cart!');
}

function updateCartUI() {
    try {
        let cart = getStorage(CART_KEY);

        // Debug: Log cart data to see what's causing NaN
        console.log('Cart data:', cart);

        // Ensure cart is an array and filter out any invalid items
        if (!Array.isArray(cart)) {
            cart = [];
        }

        // Filter out items that don't have valid quantity
        cart = cart.filter(item => {
            if (typeof item.quantity === 'number' && !isNaN(item.quantity)) {
                return true;
            } else if (typeof item.quantity === 'undefined' || item.quantity === null) {
                // Fix items without quantity by setting it to 1
                item.quantity = 1;
                return true;
            }
            return false;
        });

        // Save the cleaned cart back to localStorage
        setStorage(CART_KEY, cart);

        let totalItems = cart.reduce((sum, item) => {
            const qty = item.quantity || 1;
            return sum + (typeof qty === 'number' ? qty : 1);
        }, 0);

        // Ensure we have a valid number
        totalItems = isNaN(totalItems) ? 0 : totalItems;

        // Debug: Log the calculation
        console.log('Total items calculated:', totalItems);

        // Update all cart counters
        document.querySelectorAll('.cart-count').forEach(el => {
            if (el) {
                el.textContent = totalItems;
                el.classList.toggle('hidden', totalItems === 0);
            }
        });

        // Also update wishlist count
        updateWishlistUI();
    } catch (error) {
        console.error('Error in updateCartUI:', error);
        // Reset cart if there's an error
        setStorage(CART_KEY, '[]');
        document.querySelectorAll('.cart-count').forEach(el => {
            if (el) {
                el.textContent = '0';
                el.classList.add('hidden');
            }
        });
    }
    
    // Update cart sidebar if it exists
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems && cartTotal) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="text-stone-500 text-center py-8">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div class="flex-1">
                        <h4 class="font-medium text-sm">${item.name}</h4>
                        <p class="text-stone-600 text-sm">Qty: ${item.quantity || 1}</p>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="text-stone-400 hover:text-red-500">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `$${total.toFixed(2)}`;
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
        showNotification(`${product.name} added to wishlist!`);
    } else {
        showNotification('Item already in wishlist!');
    }
}

function removeFromWishlist(id) {
    let wishlist = getStorage(WISHLIST_KEY).filter(item => item.id !== id);
    setStorage(WISHLIST_KEY, wishlist);
    updateWishlistUI();
    showNotification('Item removed from wishlist!');
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
                        <p class="text-gray-600 text-sm">$${item.price}</p>
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

// ---------- Utility Functions ----------
function resetCart() {
    localStorage.setItem(CART_KEY, '[]');
    updateCartUI();
}

function resetWishlist() {
    localStorage.setItem(WISHLIST_KEY, '[]');
    updateWishlistUI();
}

function forceUpdateCartCount() {
    // Force update cart count - useful for debugging
    console.log('Forcing cart count update...');
    updateCartUI();
    updateWishlistUI();
}

// Make functions globally available for debugging
window.forceUpdateCartCount = forceUpdateCartCount;
window.toggleCart = toggleCart;
window.toggleWishlist = toggleWishlist;

// ---------- Immediate Initialization ----------
// Run cart update immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            updateCartUI();
            updateWishlistUI();
        }, 10); // Small delay to ensure all elements are ready
    });
} else {
    // DOM is already loaded, wait a bit for all elements
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 10);
}

// ---------- UI Functions ----------
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');

    if (sidebar) {
        sidebar.classList.toggle('translate-x-full');
        // Only toggle overlay if it exists
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }
}

function toggleWishlist() {
    const sidebar = document.getElementById('wishlist-sidebar');
    const overlay = document.getElementById('wishlist-overlay');

    if (sidebar) {
        sidebar.classList.toggle('translate-x-full');
        // Only toggle overlay if it exists
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }
}

function showNotification(message) {
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
                <p class="text-stone-600 text-sm">$${item.price}</p>
            </div>
        </div>
    `).join('');
}

// ---------- Mobile Menu Functions ----------
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('-translate-x-full');
    }
}

// ---------- Initialize on DOM Content Loaded ----------
document.addEventListener("DOMContentLoaded", () => {
    // Clear any corrupted cart data on page load
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        if (!Array.isArray(cart)) {
            localStorage.setItem(CART_KEY, '[]');
        }

        // Validate each cart item
        const validCart = cart.filter(item => {
            return item &&
                   typeof item.id === 'string' &&
                   typeof item.name === 'string' &&
                   typeof item.price === 'number' &&
                   !isNaN(item.price);
        });

        if (validCart.length !== cart.length) {
            localStorage.setItem(CART_KEY, JSON.stringify(validCart));
        }
    } catch (e) {
        localStorage.setItem(CART_KEY, '[]');
    }

    // Same validation for wishlist
    try {
        const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
        if (!Array.isArray(wishlist)) {
            localStorage.setItem(WISHLIST_KEY, '[]');
        }
    } catch (e) {
        localStorage.setItem(WISHLIST_KEY, '[]');
    }

    // Multiple update attempts to ensure elements are ready
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 50);
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 100);
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 200);
});

// Also update on window load as backup
window.addEventListener("load", () => {
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 50);
    setTimeout(() => {
        updateCartUI();
        updateWishlistUI();
    }, 100);
});
    
    // Mobile menu event listeners
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', toggleMobileMenu);
    }
});