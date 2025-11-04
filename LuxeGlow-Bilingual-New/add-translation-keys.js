const fs = require('fs');
const path = require('path');

// Translation mappings for common text elements
const translationMappings = {
    // Navigation
    'Home': 'nav_home',
    'Shop': 'nav_shop',
    'About': 'nav_about',
    'Contact': 'nav_contact',
    'Cart': 'nav_cart',
    'Wishlist': 'nav_wishlist',
    'Search': 'nav_search',
    'Menu': 'nav_menu',
    
    // Common buttons and actions
    'Add to Cart': 'btn_add_to_cart',
    'Add to Wishlist': 'btn_add_to_wishlist',
    'Remove from Wishlist': 'btn_remove_from_wishlist',
    'Continue Shopping': 'btn_continue_shopping',
    'Proceed to Checkout': 'btn_proceed_checkout',
    'Place Order': 'btn_place_order',
    'Subscribe': 'btn_subscribe',
    'Close': 'btn_close',
    'Save': 'btn_save',
    'Cancel': 'btn_cancel',
    
    // Product related
    'Price': 'product_price',
    'Quantity': 'product_quantity',
    'Out of Stock': 'product_out_of_stock',
    'In Stock': 'product_in_stock',
    'Quick View': 'product_quick_view',
    'Remove': 'product_remove',
    
    // Cart and checkout
    'Shopping Cart': 'cart_title',
    'Your cart is empty': 'cart_empty',
    'Subtotal': 'cart_subtotal',
    'Shipping': 'cart_shipping',
    'Total': 'cart_total',
    'FREE': 'cart_free',
    'Order Summary': 'cart_order_summary',
    'Billing Information': 'checkout_billing',
    'Shipping Information': 'checkout_shipping',
    'Payment Information': 'checkout_payment',
    
    // Search and filters
    'Search products...': 'search_placeholder',
    'Search': 'search_title',
    'Filter': 'filter_title',
    'Sort by': 'sort_by',
    
    // Newsletter
    'Stay Glowing': 'newsletter_title',
    'Get exclusive skincare tips and early access to new products': 'newsletter_subtitle',
    'Enter your email': 'newsletter_placeholder',
    'Thank you for subscribing!': 'newsletter_success',
    
    // Footer
    'Quick Links': 'footer_quick_links',
    'Customer Care': 'footer_customer_care',
    'Contact Info': 'footer_contact_info',
    'Follow Us': 'footer_follow_us',
    
    // Common text
    'Loading...': 'common_loading',
    'Error': 'common_error',
    'Success': 'common_success',
    'Yes': 'common_yes',
    'No': 'common_no'
};

function addTranslationKeys(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add language toggle button if not present
        if (!content.includes('lang-toggle-btn')) {
            // Find the wishlist button and add language toggle before it
            const wishlistPattern = /(<!-- Wishlist -->\s*<button[^>]*wishlist[^>]*>)/;
            if (wishlistPattern.test(content)) {
                const languageToggle = `                    <!-- Language Toggle -->
                    <button id="lang-toggle-btn" class="text-luxe-stone hover:text-luxe-amber transition-colors flex items-center space-x-2 px-3 py-2 rounded-lg border border-stone-200 hover:border-luxe-amber">
                        <i class="fas fa-globe text-lg"></i>
                        <span id="current-lang" class="text-sm font-medium">AR / EN</span>
                    </button>
                    
                    `;
                content = content.replace(wishlistPattern, languageToggle + '$1');
            }
        }
        
        // Add translation keys to matching text
        for (const [text, key] of Object.entries(translationMappings)) {
            // Escape special regex characters
            const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            // Create patterns for different HTML contexts
            const patterns = [
                // Text in navigation links
                new RegExp(`(<a[^>]*class="[^"]*hover:text-luxe-amber[^"]*"[^>]*>)${escapedText}(</a>)`, 'g'),
                // Text in buttons
                new RegExp(`(<button[^>]*>)${escapedText}(</button>)`, 'g'),
                // Text in spans
                new RegExp(`(<span[^>]*>)${escapedText}(</span>)`, 'g'),
                // Text in headings
                new RegExp(`(<h[1-6][^>]*>)${escapedText}(</h[1-6]>)`, 'g'),
                // Text in paragraphs
                new RegExp(`(<p[^>]*>)${escapedText}(</p>)`, 'g'),
                // Text in divs
                new RegExp(`(<div[^>]*>)${escapedText}(</div>)`, 'g'),
                // Placeholder text
                new RegExp(`placeholder="${escapedText}"`, 'g')
            ];
            
            patterns.forEach(pattern => {
                content = content.replace(pattern, (match, tag1, tag2) => {
                    if (tag2) {
                        // For patterns with opening and closing tags
                        return `${tag1}${text}${tag2}`.replace(tag1, tag1.replace('>', ` data-translate-key="${key}">`));
                    } else if (match.includes('placeholder=')) {
                        // For placeholder attributes
                        return `placeholder="${text}" data-translate-key="${key}"`;
                    } else {
                        // For simple text patterns
                        return match.replace(text, `<span data-translate-key="${key}">${text}</span>`);
                    }
                });
            });
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added translation keys to: ${filePath}`);
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all HTML files
const htmlFiles = [
    'index.html',
    'shop.html',
    'cart.html',
    'checkout.html',
    'confirmation.html',
    'product.html',
    'about.html',
    'contact.html',
    '404.html'
];

htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        addTranslationKeys(filePath);
    }
});

console.log('Translation keys added to all HTML files!');
