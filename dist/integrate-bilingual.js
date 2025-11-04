const fs = require('fs');
const path = require('path');

// HTML files to update
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

function integrateBilingual(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add RTL CSS link
        if (!content.includes('rtl-support.css')) {
            content = content.replace(
                /<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/6\.4\.0\/css\/all\.min\.css">/,
                '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n    <link rel="stylesheet" href="css/rtl-support.css">'
            );
        }
        
        // Add translation scripts
        if (!content.includes('translations.js')) {
            content = content.replace(
                /<script src="js\/protection\.js"><\/script>/,
                '<script src="js/protection.js"></script>\n    <script src="translations.js"></script>\n    <script src="language-switcher.js"></script>'
            );
        }
        
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
        
        // Add translation keys to navigation links
        content = content.replace(
            /<a href="index\.html"[^>]*>Home<\/a>/g,
            '<a href="index.html" class="text-luxe-stone hover:text-luxe-amber transition-colors" data-translate-key="nav_home">Home</a>'
        );
        
        content = content.replace(
            /<a href="shop\.html"[^>]*>Shop<\/a>/g,
            '<a href="shop.html" class="text-luxe-stone hover:text-luxe-amber transition-colors" data-translate-key="nav_shop">Shop</a>'
        );
        
        content = content.replace(
            /<a href="about\.html"[^>]*>About<\/a>/g,
            '<a href="about.html" class="text-luxe-stone hover:text-luxe-amber transition-colors" data-translate-key="nav_about">About</a>'
        );
        
        content = content.replace(
            /<a href="contact\.html"[^>]*>Contact<\/a>/g,
            '<a href="contact.html" class="text-luxe-stone hover:text-luxe-amber transition-colors" data-translate-key="nav_contact">Contact</a>'
        );
        
        // Add translation keys to common buttons
        content = content.replace(
            /placeholder="Search products\.\.\."/g,
            'placeholder="Search products..." data-translate-key="search_placeholder"'
        );
        
        content = content.replace(
            /<span>Add to Cart<\/span>/g,
            '<span data-translate-key="btn_add_to_cart">Add to Cart</span>'
        );
        
        content = content.replace(
            /<span>Continue Shopping<\/span>/g,
            '<span data-translate-key="btn_continue_shopping">Continue Shopping</span>'
        );
        
        content = content.replace(
            /<span>Proceed to Checkout<\/span>/g,
            '<span data-translate-key="btn_proceed_checkout">Proceed to Checkout</span>'
        );
        
        content = content.replace(
            /<span>Place Order<\/span>/g,
            '<span data-translate-key="btn_place_order">Place Order</span>'
        );
        
        // Add translation keys to page titles
        if (filePath.includes('cart.html')) {
            content = content.replace(
                /<h1[^>]*>Shopping Cart<\/h1>/g,
                '<h1 class="text-3xl font-bold text-luxe-stone" data-translate-key="cart_title">Shopping Cart</h1>'
            );
        }
        
        if (filePath.includes('shop.html')) {
            content = content.replace(
                /<h1[^>]*>Shop<\/h1>/g,
                '<h1 class="text-3xl font-bold text-luxe-stone" data-translate-key="nav_shop">Shop</h1>'
            );
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Integrated bilingual support in: ${filePath}`);
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Process all HTML files
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        integrateBilingual(filePath);
    }
});

console.log('Bilingual integration completed for all HTML files!');
