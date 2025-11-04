// translations.js - Complete translation data for LuxeGlow bilingual website
// Contains all data-translate-key mappings for English and Arabic languages

const languageContent = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_shop: "Shop", 
        nav_about: "About",
        nav_contact: "Contact",
        nav_cart: "Cart",
        
        // Search & UI
        search_placeholder: "Search products...",
        mobile_menu_title: "Menu",
        common_loading: "Loading...",
        
        // Banners
        demo_banner: '⚠️ This is a demo website owned by <a href="https://www.dacsoapp.com" target="_blank" class="underline hover:text-amber-900">dacsoapp.com</a> - For presentation purposes only',
        promo_banner: "✨ Free Shipping on Orders Above £100",
        
        // Homepage Hero Section
        hero_badge: "Dermatologist Approved",
        hero_title: 'Science Meets <span class="text-sage-600">Nature</span>',
        hero_subtitle: "Discover our premium skincare collection where cutting-edge science meets natural ingredients. Transform your daily routine into a luxurious self-care experience that delivers visible results.",
        hero_cta_shop: "Shop Collection",
        hero_cta_about: "Our Story",
        
        // Trust Indicators
        trust_customers: "Happy Customers",
        trust_rating: "Average Rating", 
        trust_cruelty_free: "Cruelty Free",
        
        // Why Choose Us Section
        section_why_choose_title: "Why Choose LuxeGlow?",
        section_why_choose_subtitle: "We're committed to delivering the highest quality skincare products with science-backed ingredients and sustainable practices.",
        
        // Feature Boxes
        feature_quality_title: "Quality Excellence",
        feature_quality_desc: "Premium skincare products with the highest quality ingredients",
        feature_customer_title: "Customer-Centric", 
        feature_customer_desc: "Designed with your skin's needs and satisfaction in mind",
        feature_innovation_title: "Innovation",
        feature_innovation_desc: "Cutting-edge research and advanced formulations",
        feature_impact_title: "Global Impact",
        feature_impact_desc: "Sustainable practices and eco-friendly packaging",
        
        // Bestsellers Section
        section_bestsellers_title: "Bestsellers",
        section_bestsellers_subtitle: "Our most loved formulations, trusted by thousands",
        
        // Products
        product_1_title: "Vitamin C Brightening Serum", 
        product_1_desc: "Powerful antioxidant formula for radiant, even-toned skin",
        product_4_title: "Gentle Foaming Cleanser",
        product_4_desc: "Soothing daily cleanser for all skin types",
        btn_add_to_cart: "Add to Cart",
        
        // Ingredients Section
        ingredients_section_title: "Powerful Ingredients",
        ingredients_section_subtitle: "Discover the science behind our premium formulations",
        ingredient_vitamin_c_title: "Vitamin C",
        ingredient_vitamin_c_desc: "Powerful antioxidant that brightens skin and reduces dark spots",
        ingredient_hyaluronic_title: "Hyaluronic Acid",
        ingredient_hyaluronic_desc: "Holds 1000x its weight in water for intense hydration",
        ingredient_retinol_title: "Retinol",
        ingredient_retinol_desc: "Gold standard anti-aging ingredient for smoother skin",
        ingredient_natural_title: "Natural Extracts",
        ingredient_natural_desc: "Botanical extracts for gentle, effective skincare",
        
        // Skincare Routine Section
        routine_section_title: "Your Perfect Skincare Routine",
        routine_section_subtitle: "Follow our expert-recommended routine for healthy, glowing skin",
        routine_step1_title: "Cleanse",
        routine_step1_desc: "Start with our gentle foaming cleanser to remove dirt and impurities",
        routine_step2_title: "Treat",
        routine_step2_desc: "Apply your targeted treatment serum for specific skin concerns",
        routine_step3_title: "Moisturize",
        routine_step3_desc: "Lock in hydration with our hyaluronic acid moisturizer",
        routine_step4_title: "Protect",
        routine_step4_desc: "Finish with SPF protection to shield from harmful UV rays",
        
        // Special Offer Section
        special_offer_badge: "Special Offer",
        special_offer_title: "Get 10% Off Your First Order",
        special_offer_subtitle: "Join our community and receive exclusive skincare tips, early access to new products, and special discounts.",
        special_offer_email_placeholder: "Enter your email address",
        special_offer_button: "Get 10% Off",
        special_offer_subscribers: "50,000+ subscribers",
        special_offer_unsubscribe: "Unsubscribe anytime",
        
        // Shop Page
        shop_hero_title: "Premium Skincare Collection",
        shop_hero_subtitle: "Discover our curated selection of high-performance skincare products, formulated with the finest ingredients for radiant, healthy skin.",
        
        // Shop Statistics
        stats_products: "Products",
        stats_categories: "Categories", 
        stats_rating: "Average Rating",
        
        // Filters & Sorting
        filter_all: "All Products",
        filter_skincare: "Skincare",
        filter_wellness: "Wellness", 
        filter_gifts: "Gift Sets",
        sort_label: "Sort by:",
        
        // About Page
        about_hero_title: "Our Story of",
        about_hero_highlight: "Radiance",
        about_hero_subtitle: "Born from a passion for natural beauty and sustainable luxury, LuxeGlow represents the perfect harmony between science and nature in premium skincare.",
        about_mission_title: "Our Mission",
        about_mission_text1: "At LuxeGlow, we believe that everyone deserves to feel confident in their own skin. Our mission is to create premium skincare products that not only deliver exceptional results but also respect our planet and its resources.",
        about_mission_text2: "We combine cutting-edge scientific research with the finest natural ingredients to create products that are both effective and sustainable. Every formula is carefully crafted to provide visible results while maintaining the highest standards of quality and environmental responsibility.",
        about_stat_research: "Years of Research",
        about_stat_customers: "Happy Customers",
        about_sustainability_title: "Sustainability at Our Core",
        about_sustainability_subtitle: "We're committed to creating a more beautiful world, inside and out. Our sustainability initiatives reflect our dedication to environmental responsibility.",
        about_feature1_title: "100% Natural Ingredients",
        about_feature1_desc: "We source only the finest natural and organic ingredients, ensuring our products are gentle on your skin and the environment.",
        about_feature2_title: "Eco-Friendly Packaging",
        about_feature2_desc: "Our packaging is made from recycled materials and is fully recyclable. We're working towards zero-waste production by 2025.",
        about_feature3_title: "Cruelty-Free",
        about_feature3_desc: "We never test on animals and are certified cruelty-free. Our products are developed using advanced in-vitro testing methods.",
        
        // About Page - Our Values Section
        about_values_title: "Our Values",
        about_values_quality_title: "Quality Excellence",
        about_values_quality_desc: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards for effectiveness and safety.",
        about_values_customer_title: "Customer-Centric",
        about_values_customer_desc: "Our customers are at the heart of everything we do. We listen, learn, and continuously improve based on your feedback and needs.",
        about_values_innovation_title: "Innovation",
        about_values_innovation_desc: "We stay at the forefront of skincare science, constantly researching and developing new formulations that deliver breakthrough results.",
        about_values_impact_title: "Global Impact",
        about_values_impact_desc: "We're committed to making a positive impact on the world, from supporting local communities to protecting our environment.",
        
        // About Page - Our Team Section
        about_team_title: "Meet Our Experts",
        about_team_subtitle: "Our team of skincare scientists, dermatologists, and beauty experts work together to create products that truly make a difference.",
        about_team_member1_name: "Dr. Sarah Chen",
        about_team_member1_title: "Chief Scientific Officer",
        about_team_member1_desc: "PhD in Dermatology with 15+ years of experience in cosmetic chemistry. Leading our research and development team.",
        about_team_member2_name: "Maria Johnson",
        about_team_member2_title: "Head of Formulation",
        about_team_member2_desc: "Master's in Cosmetic Science with expertise in natural ingredient extraction and sustainable formulation techniques.",
        about_team_member3_name: "Alex Liu",
        about_team_member3_title: "Sustainability Director",
        about_team_member3_desc: "Environmental scientist dedicated to ensuring our products and processes meet the highest sustainability standards.",
        
        // About Page - Certifications Section
        about_certifications_title: "Certifications & Awards",
        about_certifications_subtitle: "Recognized for our commitment to quality and sustainability",
        about_cert_organic: "Certified Organic",
        about_cert_cruelty_free: "Cruelty-Free",
        about_cert_award: "Beauty Award 2024",
        about_cert_eco_friendly: "Eco-Friendly",
        
        // About Page - Call to Action Section
        about_cta_title: "Join Our Journey",
        about_cta_subtitle: "Experience the difference that premium, sustainable skincare can make. Discover your radiant glow with LuxeGlow.",
        about_cta_shop_button: "Shop Our Collection",
        about_cta_contact_button: "Get in Touch",
        
        // Contact Page
        contact_hero_title: "Get in",
        contact_hero_highlight: "Touch",
        contact_hero_subtitle: "We'd love to hear from you. Whether you have questions about our products, need skincare advice, or want to share your experience, we're here to help.",
        contact_phone_title: "Call Us",
        contact_phone_desc: "Speak with our customer support team",
        contact_phone_hours: "Mon-Fri: 9AM-6PM GMT",
        contact_email_title: "Email Us",
        contact_email_desc: "Send us your questions or feedback",
        contact_email_response: "We respond within 24 hours",
        contact_chat_title: "Live Chat",
        contact_chat_desc: "Chat with us instantly",
        contact_chat_button: "Start Chat",
        contact_chat_availability: "Available 24/7",
        contact_form_title: "Send us a Message",
        contact_form_firstname: "First Name *",
        contact_form_firstname_placeholder: "Enter your first name",
        contact_form_lastname: "Last Name *",
        contact_form_newsletter: "I'd like to receive skincare tips and exclusive offers via email",
        contact_form_submit_button: "Send Message",
        
        // Contact Page - Office Information
        contact_office_title: "Visit Our Office",
        contact_office_address_title: "Address",
        contact_office_address: "Buckingham Palace<br>Westminster<br>London SW1A 1AA<br>United Kingdom",
        contact_office_hours_title: "Office Hours",
        contact_office_hours_weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        contact_office_hours_saturday: "Saturday: 10:00 AM - 4:00 PM",
        contact_office_hours_sunday: "Sunday: Closed",
        contact_office_transport_title: "Getting Here",
        contact_office_transport_tube: "Nearest Tube: Covent Garden (Piccadilly Line)",
        contact_office_transport_bus: "Bus Routes: 9, 11, 15, 23, 139",
        contact_office_transport_parking: "Parking: Limited street parking available",
        
        // Contact Page - FAQ Section
        contact_faq_title: "Frequently Asked Questions",
        contact_faq_subtitle: "Quick answers to common questions",
        contact_faq_q1: "What's your return policy?",
        contact_faq_a1: "We offer a 30-day return policy for unopened products in their original packaging. Returns are free and we'll process your refund within 5-7 business days.",
        contact_faq_q2: "How long does shipping take?",
        contact_faq_a2: "Standard delivery takes 3-5 business days within the UK. We offer express delivery (1-2 days) and next-day delivery options. Free shipping is available on orders over £100.",
        contact_faq_q3: "Are your products suitable for sensitive skin?",
        contact_faq_a3: "Yes! All our products are formulated with sensitive skin in mind. We use gentle, natural ingredients and avoid harsh chemicals. However, we recommend doing a patch test before first use.",
        contact_faq_q4: "Do you offer skincare consultations?",
        contact_faq_a4: "Absolutely! Our skincare experts are available for free consultations via phone, email, or live chat. We can help you create a personalized skincare routine based on your skin type and concerns.",
        
        // Contact Page - Newsletter Section
        contact_newsletter_title: "Stay Connected",
        contact_newsletter_subtitle: "Get the latest skincare tips, product launches, and exclusive offers",
        contact_newsletter_placeholder: "Enter your email",
        contact_newsletter_button: "Subscribe",
        
        // Checkout Page
        checkout_step: "Checkout",
        confirmation_step: "Confirmation",
        checkout_title: "Secure Checkout",
        checkout_subtitle: "Complete your order with confidence",
        shipping_info_title: "Shipping Information",
        form_firstname: "First Name *",
        form_lastname: "Last Name *",
        form_email: "Email Address *",
        
        // Checkout Page - Shipping Information
        checkout_phone: "Phone Number *",
        checkout_phone_placeholder: "+44 20 7123 4567",
        checkout_address: "Address *",
        checkout_address_placeholder: "123 Main Street",
        checkout_city: "City *",
        checkout_city_placeholder: "London",
        checkout_postal: "Postal Code *",
        checkout_postal_placeholder: "SW1A 1AA",
        checkout_country: "Country *",
        checkout_country_select: "Select Country",
        checkout_country_uk: "United Kingdom",
        checkout_country_us: "United States",
        checkout_country_ca: "Canada",
        checkout_country_au: "Australia",
        checkout_country_de: "Germany",
        checkout_country_fr: "France",
        checkout_save_address: "Save this address for future orders",
        
        // Checkout Page - Delivery Options
        checkout_delivery_title: "Delivery Options",
        checkout_delivery_standard: "Standard Delivery",
        checkout_delivery_standard_desc: "3-5 business days",
        checkout_delivery_express: "Express Delivery",
        checkout_delivery_express_desc: "1-2 business days",
        checkout_delivery_nextday: "Next Day Delivery",
        checkout_delivery_nextday_desc: "Next business day",
        
        // Checkout Page - Payment Method
        checkout_payment_title: "Payment Method",
        checkout_payment_card: "Credit/Debit Card",
        checkout_payment_card_desc: "Visa, MasterCard, American Express",
        checkout_payment_paypal_desc: "Pay securely with PayPal",
        checkout_payment_apple_desc: "Pay with Touch ID or Face ID",
        
        // Checkout Page - Card Details
        checkout_card_number: "Card Number *",
        checkout_card_number_placeholder: "1234 5678 9012 3456",
        checkout_card_expiry: "Expiry Date *",
        checkout_card_expiry_placeholder: "MM/YY",
        checkout_card_cvv: "CVV *",
        checkout_card_cvv_placeholder: "123",
        checkout_card_name: "Cardholder Name *",
        checkout_card_name_placeholder: "Name on card",
        
        // Checkout Page - Order Summary
        checkout_tax: "Tax",
        checkout_place_order: "Place Order Securely",
        checkout_secure_payment: "Your payment information is secure and encrypted",
        
        // Checkout Page - Success Modal
        checkout_success_title: "Order Placed Successfully!",
        checkout_success_message: "Thank you for your order. You will receive a confirmation email shortly.",
        checkout_view_order: "View Order Details",
        
        // Product Page
        product_name: "Vitamin C Brightening Serum",
        
        // Product Details
        product_sku: "SKU:",
        product_category: "Category:",
        product_category_skincare: "Skincare",
        product_size: "Size:",
        product_free_shipping: "Free Shipping:",
        product_yes: "Yes",
        
        // Product Tabs
        product_tab_description: "Description",
        product_tab_ingredients: "Ingredients",
        product_tab_reviews: "Reviews (127)",
        product_tab_shipping: "Shipping & Returns",
        
        // Description Tab
        product_about_title: "About This Product",
        product_about_text: "Our Vitamin C Brightening Serum is a professional-grade skincare treatment designed to transform your complexion. This potent formula combines the power of 20% L-ascorbic acid with hyaluronic acid to deliver visible results in just a few weeks.",
        product_benefits_title: "Key Benefits:",
        product_benefit_1: "Brightens and evens skin tone",
        product_benefit_2: "Reduces the appearance of dark spots and hyperpigmentation",
        product_benefit_3: "Stimulates collagen production for firmer skin",
        product_benefit_4: "Provides intense hydration without heaviness",
        product_benefit_5: "Protects against environmental damage",
        product_benefit_6: "Suitable for all skin types",
        product_how_to_use_title: "How to Use:",
        product_how_to_use_text: "Apply 2-3 drops to clean, dry skin in the morning. Gently pat into skin until fully absorbed. Follow with moisturizer and always use SPF during the day. Start with every other day and gradually increase to daily use as your skin adjusts.",
        
        // Ingredients Tab
        product_ingredients_title: "Ingredient List",
        product_active_ingredients: "Active Ingredients",
        product_ingredient_1: "L-Ascorbic Acid (20%) - Potent antioxidant that brightens skin",
        product_ingredient_2: "Hyaluronic Acid - Deep hydration and plumping",
        product_ingredient_3: "Vitamin E - Additional antioxidant protection",
        product_ingredient_4: "Ferulic Acid - Stabilizes Vitamin C and enhances efficacy",
        product_supporting_ingredients: "Supporting Ingredients",
        product_ingredient_5: "Purified Water",
        product_ingredient_6: "Glycerin",
        product_ingredient_7: "Ethoxydiglycol",
        product_ingredient_8: "Phenoxyethanol",
        product_ingredient_9: "Ethylhexylglycerin",
        product_ingredients_note: "This product is paraben-free, sulfate-free, and cruelty-free.",
        
        // Reviews Tab
        product_reviews_count: "reviews",
        product_review_1_name: "Sarah M.",
        product_review_1_text: "Absolutely love this serum! I've been using it for 3 weeks and can already see a noticeable difference in my skin's brightness. It absorbs quickly and doesn't leave any sticky residue. Worth every penny!",
        product_review_2_name: "Jessica L.",
        product_review_2_text: "This is the best Vitamin C serum I've tried. My dark spots have faded significantly and my skin looks so much more radiant. The packaging is beautiful too!",
        
        // Shipping Tab
        product_shipping_title: "Shipping & Returns",
        product_shipping_info_title: "Shipping Information",
        product_shipping_1: "Free shipping on orders over £100",
        product_shipping_2: "Standard delivery: 3-5 business days",
        product_shipping_3: "Express delivery: 1-2 business days",
        product_shipping_4: "Next day delivery available",
        product_shipping_5: "International shipping available",
        product_returns_title: "Returns Policy",
        product_returns_1: "30-day return policy",
        product_returns_2: "Items must be unopened and unused",
        product_returns_3: "Free returns on orders over £100",
        product_returns_4: "Easy online returns process",
        product_returns_5: "Refunds processed within 5-7 business days",
        product_returns_exchanges_title: "Returns & Exchanges",
        product_shipping_6: "All orders dispatched within 24 hours",
        product_returns_6: "Free returns on all orders",
        product_returns_7: "Items must be unopened and in original packaging",
        product_returns_8: "Exchanges available for different sizes",
        
        // Cart
        cart_title: "Shopping Cart",
        cart_subtitle: "Review your items before checkout",
        cart_continue_shopping: "Continue Shopping",
        cart_empty: "Your cart is empty",
        cart_empty_message: "Looks like you haven't added any items to your cart yet.",
        cart_start_shopping: "Start Shopping",
        cart_quantity: "Quantity:",
        cart_remove: "Remove",
        cart_order_summary: "Order Summary",
        cart_subtotal: "Subtotal",
        cart_shipping: "Shipping",
        cart_total: "Total",
        cart_free: "FREE",
        cart_add_more: "Add £{amount} more for free shipping",
        cart_free_shipping: "You qualify for free shipping!",
        cart_proceed_checkout: "Proceed to Checkout",
        cart_secure_checkout: "Secure checkout with",
        cart_empty_alert: "Your cart is empty!",
        cart_newsletter_title: "Stay Glowing",
        cart_newsletter_subtitle: "Get exclusive skincare tips and early access to new products",
        cart_newsletter_placeholder: "Enter your email",
        cart_newsletter_button: "Subscribe",
        
        // Wishlist
        wishlist_title: "Wishlist",
        continue_shopping: "Continue Shopping",
        view_cart: "View Cart",
        
        // Footer
        footer_quick_links: "Quick Links",
        footer_customer_care: "Customer Care",
        footer_contact_info: "Contact Info",
        
        // Notifications
        notification_added_to_cart: "Item added to cart!",
        notification_removed_from_cart: "Item removed from cart!",
        notification_cart_cleared: "Cart cleared!",
        notification_added_to_wishlist: "Added to wishlist!",
        notification_removed_from_wishlist: "Removed from wishlist!",
        notification_item_removed_from_wishlist: "Item removed from wishlist!",
        notification_invalid_email: "Please enter a valid email address.",
        notification_subscribed: "Thank you for subscribing! You'll receive 10% off your first order.",
        notification_already_in_wishlist: "Item already in wishlist!",
        
        // Shop Page
        shop_premium_skincare: "Premium Skincare",
        shop_hero_title: "Premium Skincare Collection",
        shop_hero_subtitle: "Discover our curated selection of high-performance beauty products",
        shop_hero_description: "Transform your skincare routine with our expertly formulated products. From anti-aging serums to hydrating moisturizers, find everything you need for radiant, healthy skin.",
        shop_hero_cta: "Shop Now",
        filter_all: "All Products",
        filter_skincare: "Skincare",
        filter_wellness: "Wellness",
        filter_gifts: "Gift Sets",
        sort_label: "Sort by:",
        sort_featured: "Featured",
        sort_price_low: "Price: Low to High",
        sort_price_high: "Price: High to Low",
        sort_rating: "Customer Rating",
        show_label: "Show:",
        show_12: "12 per page",
        show_24: "24 per page",
        show_48: "48 per page",
        show_all: "Show All",
        secure_payment: "Secure Payment Methods",
        showing_products: "Showing all products",
        footer_description: "Premium skincare for radiant, healthy skin. Crafted with love and the finest ingredients.",
        footer_shipping: "Shipping",
        footer_faq: "FAQ",
        footer_returns: "Returns",
        footer_size_guide: "Size Guide",
        footer_track_order: "Track Order"
    },
    
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_shop: "المتجر",
        nav_about: "من نحن", 
        nav_contact: "اتصل بنا",
        nav_cart: "السلة",
        
        // Search & UI  
        search_placeholder: "البحث عن المنتجات...",
        mobile_menu_title: "القائمة",
        common_loading: "جاري التحميل...",
        
        // Banners
        demo_banner: '⚠️ هذا موقع تجريبي مملوك لـ <a href="https://www.dacsoapp.com" target="_blank" class="underline hover:text-amber-900">dacsoapp.com</a> - لأغراض العرض فقط',
        promo_banner: "✨ شحن مجاني للطلبات فوق 100 جنيه إسترليني",
        
        // Homepage Hero Section
        hero_badge: "معتمد من أطباء الجلدية", 
        hero_title: 'العلم يلتقي <span class="text-sage-600">بالطبيعة</span>',
        hero_subtitle: "اكتشف مجموعتنا المتميزة من منتجات العناية بالبشرة حيث يلتقي العلم المتقدم بالمكونات الطبيعية. حول روتينك اليومي إلى تجربة رعاية ذاتية فاخرة تقدم نتائج مرئية.",
        hero_cta_shop: "تسوق المجموعة",
        hero_cta_about: "قصتنا",
        
        // Trust Indicators  
        trust_customers: "عملاء سعداء",
        trust_rating: "التقييم المتوسط",
        trust_cruelty_free: "خالي من القسوة", 
        
        // Why Choose Us Section
        section_why_choose_title: "لماذا تختار LuxeGlow؟",
        section_why_choose_subtitle: "نحن ملتزمون بتقديم منتجات العناية بالبشرة عالية الجودة بمكونات مدعومة علمياً وممارسات مستدامة.",
        
        // Feature Boxes
        feature_quality_title: "تميز الجودة",
        feature_quality_desc: "منتجات عناية بالبشرة متميزة بأعلى جودة من المكونات",
        feature_customer_title: "محورها العميل",
        feature_customer_desc: "مصممة مع وضع احتياجات بشرتك ورضاك في الاعتبار",
        feature_innovation_title: "الابتكار", 
        feature_innovation_desc: "بحوث رائدة وتركيبات متقدمة",
        feature_impact_title: "التأثير العالمي",
        feature_impact_desc: "ممارسات مستدامة وتغليف صديق للبيئة",
        
        // Bestsellers Section
        section_bestsellers_title: "الأكثر مبيعاً",
        section_bestsellers_subtitle: "تركيباتنا الأكثر محبة، يثق بها الآلاف",
        
        // Products
        product_1_title: "سيروم فيتامين سي للإشراق",
        product_1_desc: "تركيبة مضادة للأكسدة قوية لبشرة مشرقة ومتجانسة", 
        product_4_title: "منظف رغوي لطيف",
        product_4_desc: "منظف يومي مهدئ لجميع أنواع البشرة",
        btn_add_to_cart: "أضف إلى السلة",
        
        // Ingredients Section
        ingredients_section_title: "مكونات قوية",
        ingredients_section_subtitle: "اكتشف العلم وراء تركيباتنا المتميزة",
        ingredient_vitamin_c_title: "فيتامين سي",
        ingredient_vitamin_c_desc: "مضاد أكسدة قوي يضيء البشرة ويقلل البقع الداكنة",
        ingredient_hyaluronic_title: "حمض الهيالورونيك",
        ingredient_hyaluronic_desc: "يحتفظ بـ 1000 ضعف وزنه من الماء لترطيب مكثف",
        ingredient_retinol_title: "الريتينول",
        ingredient_retinol_desc: "المكون الذهبي لمكافحة الشيخوخة لبشرة أكثر نعومة",
        ingredient_natural_title: "المستخلصات الطبيعية",
        ingredient_natural_desc: "مستخلصات نباتية للعناية بالبشرة اللطيفة والفعالة",
        
        // Skincare Routine Section
        routine_section_title: "روتين العناية المثالي ببشرتك",
        routine_section_subtitle: "اتبع روتيننا الموصى به من الخبراء لبشرة صحية ومشرقة",
        routine_step1_title: "التنظيف",
        routine_step1_desc: "ابدأ بمنظفنا الرغوي اللطيف لإزالة الأوساخ والشوائب",
        routine_step2_title: "المعالجة",
        routine_step2_desc: "ضع سيروم العلاج المستهدف لمشاكل البشرة المحددة",
        routine_step3_title: "الترطيب",
        routine_step3_desc: "احبس الرطوبة بمرطب حمض الهيالورونيك لدينا",
        routine_step4_title: "الحماية",
        routine_step4_desc: "انهِ بحماية SPF للحماية من الأشعة فوق البنفسجية الضارة",
        
        // Special Offer Section
        special_offer_badge: "عرض خاص",
        special_offer_title: "احصل على خصم 10% على طلبك الأول",
        special_offer_subtitle: "انضم إلى مجتمعنا واحصل على نصائح حصرية للعناية بالبشرة، ووصول مبكر للمنتجات الجديدة، وخصومات خاصة.",
        special_offer_email_placeholder: "أدخل عنوان بريدك الإلكتروني",
        special_offer_button: "احصل على خصم 10%",
        special_offer_subscribers: "50,000+ مشترك",
        special_offer_unsubscribe: "إلغاء الاشتراك في أي وقت",
        
        // Shop Page
        shop_hero_title: "مجموعة العناية الفاخرة بالبشرة",
        shop_hero_subtitle: "اكتشف مجموعتنا المختارة من منتجات العناية عالية الأداء، المصنوعة بأجود المكونات لبشرة مشرقة وصحية.",
        
        // Shop Statistics
        stats_products: "منتجات",
        stats_categories: "فئات",
        stats_rating: "متوسط التقييم",
        
        // Filters & Sorting
        filter_all: "جميع المنتجات",
        filter_skincare: "عناية بالبشرة", 
        filter_wellness: "عافية",
        filter_gifts: "مجموعات هدايا",
        sort_label: "ترتيب حسب:",
        
        // About Page
        about_hero_title: "قصتنا مع",
        about_hero_highlight: "الإشراق",
        about_hero_subtitle: "وُلدت من شغف بالجمال الطبيعي والرفاهية المستدامة، تمثل LuxeGlow التناغم المثالي بين العلم والطبيعة في منتجات العناية الفاخرة بالبشرة.",
        about_mission_title: "مهمتنا",
        about_mission_text1: "في LuxeGlow، نؤمن أن كل شخص يستحق أن يشعر بالثقة في بشرته. مهمتنا هي إنتاج منتجات عناية بالبشرة متميزة لا تقدم فقط نتائج استثنائية بل تحترم أيضاً كوكبنا وموارده.",
        about_mission_text2: "نجمع بين البحث العلمي المتطور وأجود المكونات الطبيعية لإنتاج منتجات فعالة ومستدامة. كل تركيبة مصممة بعناية لتقديم نتائج مرئية مع الحفاظ على أعلى معايير الجودة والمسؤولية البيئية.",
        about_stat_research: "سنوات من البحث",
        about_stat_customers: "عملاء سعداء",
        about_sustainability_title: "الاستدامة في صميم عملنا",
        about_sustainability_subtitle: "نحن ملتزمون بخلق عالم أكثر جمالاً، من الداخل والخارج. مبادراتنا للاستدامة تعكس تفانينا في المسؤولية البيئية.",
        about_feature1_title: "100% مكونات طبيعية",
        about_feature1_desc: "نحصل فقط على أجود المكونات الطبيعية والعضوية، مما يضمن أن منتجاتنا لطيفة على بشرتك والبيئة.",
        about_feature2_title: "تغليف صديق للبيئة",
        about_feature2_desc: "تغليفنا مصنوع من مواد معاد تدويرها وقابل للتدوير بالكامل. نعمل نحو إنتاج خالٍ من النفايات بحلول 2025.",
        about_feature3_title: "خالي من القسوة",
        about_feature3_desc: "لا نختبر أبداً على الحيوانات ونحن معتمدون كخالٍ من القسوة. منتجاتنا طُورت باستخدام طرق اختبار متقدمة في المختبر.",
        
        // About Page - Our Values Section
        about_values_title: "قيمنا",
        about_values_quality_title: "تميز الجودة",
        about_values_quality_desc: "لا نتنازل أبداً عن الجودة. كل منتج يخضع لاختبارات صارمة لضمان أنه يلبي معاييرنا العالية للفعالية والأمان.",
        about_values_customer_title: "محورها العميل",
        about_values_customer_desc: "عملاؤنا في قلب كل ما نقوم به. نستمع ونتعلم ونحسن باستمرار بناءً على ملاحظاتك واحتياجاتك.",
        about_values_innovation_title: "الابتكار",
        about_values_innovation_desc: "نبقى في طليعة علم العناية بالبشرة، نبحث باستمرار ونطور تركيبات جديدة تقدم نتائج رائدة.",
        about_values_impact_title: "التأثير العالمي",
        about_values_impact_desc: "نحن ملتزمون بإحداث تأثير إيجابي على العالم، من دعم المجتمعات المحلية إلى حماية بيئتنا.",
        
        // About Page - Our Team Section
        about_team_title: "تعرف على خبرائنا",
        about_team_subtitle: "فريقنا من علماء العناية بالبشرة وأطباء الجلدية وخبراء الجمال يعملون معاً لإنشاء منتجات تحدث فرقاً حقيقياً.",
        about_team_member1_name: "د. سارة تشين",
        about_team_member1_title: "مديرة العلوم الرئيسية",
        about_team_member1_desc: "دكتوراه في طب الجلد مع أكثر من 15 عاماً من الخبرة في كيمياء مستحضرات التجميل. تقود فريق البحث والتطوير لدينا.",
        about_team_member2_name: "ماريا جونسون",
        about_team_member2_title: "رئيسة التطوير",
        about_team_member2_desc: "ماجستير في علوم مستحضرات التجميل مع خبرة في استخراج المكونات الطبيعية وتقنيات التطوير المستدامة.",
        about_team_member3_name: "أليكس ليو",
        about_team_member3_title: "مدير الاستدامة",
        about_team_member3_desc: "عالم بيئي مكرس لضمان أن منتجاتنا وعملياتنا تلبي أعلى معايير الاستدامة.",
        
        // About Page - Certifications Section
        about_certifications_title: "الشهادات والجوائز",
        about_certifications_subtitle: "معترف بنا لالتزامنا بالجودة والاستدامة",
        about_cert_organic: "معتمد عضوي",
        about_cert_cruelty_free: "خالي من القسوة",
        about_cert_award: "جائزة الجمال 2024",
        about_cert_eco_friendly: "صديق للبيئة",
        
        // About Page - Call to Action Section
        about_cta_title: "انضم إلى رحلتنا",
        about_cta_subtitle: "اختبر الفرق الذي يمكن أن تحدثه العناية بالبشرة المتميزة والمستدامة. اكتشف إشراقك المتوهج مع LuxeGlow.",
        about_cta_shop_button: "تسوق مجموعتنا",
        about_cta_contact_button: "تواصل معنا",
        
        // Contact Page
        contact_hero_title: "تواصل",
        contact_hero_highlight: "معنا",
        contact_hero_subtitle: "نحب أن نسمع منك. سواء كانت لديك أسئلة حول منتجاتنا، أو تحتاج نصائح للعناية بالبشرة، أو تريد مشاركة تجربتك، نحن هنا لمساعدتك.",
        contact_phone_title: "اتصل بنا",
        contact_phone_desc: "تحدث مع فريق دعم العملاء",
        contact_phone_hours: "الإثنين-الجمعة: 9 صباحاً-6 مساءً بتوقيت غرينتش",
        contact_email_title: "راسلنا",
        contact_email_desc: "أرسل لنا أسئلتك أو ملاحظاتك",
        contact_email_response: "نرد خلال 24 ساعة",
        contact_chat_title: "محادثة مباشرة",
        contact_chat_desc: "تحدث معنا فوراً",
        contact_chat_button: "ابدأ المحادثة",
        contact_chat_availability: "متاح 24/7",
        contact_form_title: "أرسل لنا رسالة",
        contact_form_firstname: "الاسم الأول *",
        contact_form_firstname_placeholder: "أدخل اسمك الأول",
        contact_form_lastname: "الاسم الأخير *",
        contact_form_newsletter: "أود أن أتلقى نصائح العناية بالبشرة والعروض الحصرية عبر البريد الإلكتروني",
        contact_form_submit_button: "إرسال الرسالة",
        
        // Contact Page - Office Information
        contact_office_title: "زر مكتبنا",
        contact_office_address_title: "العنوان",
        contact_office_address: "قصر باكنغهام<br>وستمنستر<br>لندن SW1A 1AA<br>المملكة المتحدة",
        contact_office_hours_title: "ساعات العمل",
        contact_office_hours_weekdays: "الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً",
        contact_office_hours_saturday: "السبت: 10:00 صباحاً - 4:00 مساءً",
        contact_office_hours_sunday: "الأحد: مغلق",
        contact_office_transport_title: "كيفية الوصول",
        contact_office_transport_tube: "أقرب محطة مترو: كوفنت جاردن (خط بيكاديللي)",
        contact_office_transport_bus: "خطوط الحافلات: 9، 11، 15، 23، 139",
        contact_office_transport_parking: "المواقف: مواقف محدودة متاحة في الشارع",
        
        // Contact Page - FAQ Section
        contact_faq_title: "الأسئلة الشائعة",
        contact_faq_subtitle: "إجابات سريعة للأسئلة الشائعة",
        contact_faq_q1: "ما هي سياسة الإرجاع لديكم؟",
        contact_faq_a1: "نحن نقدم سياسة إرجاع لمدة 30 يوماً للمنتجات غير المفتوحة في تغليفها الأصلي. الإرجاع مجاني وسنعالج استردادك خلال 5-7 أيام عمل.",
        contact_faq_q2: "كم يستغرق الشحن؟",
        contact_faq_a2: "التوصيل القياسي يستغرق 3-5 أيام عمل داخل المملكة المتحدة. نقدم توصيل سريع (1-2 يوم) وخيارات التوصيل في اليوم التالي. الشحن المجاني متاح للطلبات التي تزيد عن 100 جنيه إسترليني.",
        contact_faq_q3: "هل منتجاتكم مناسبة للبشرة الحساسة؟",
        contact_faq_a3: "نعم! جميع منتجاتنا مصممة مع وضع البشرة الحساسة في الاعتبار. نستخدم مكونات لطيفة وطبيعية ونتجنب المواد الكيميائية القاسية. ومع ذلك، ننصح بإجراء اختبار رقعة قبل الاستخدام الأول.",
        contact_faq_q4: "هل تقدمون استشارات للعناية بالبشرة؟",
        contact_faq_a4: "بالطبع! خبراء العناية بالبشرة لدينا متاحون لاستشارات مجانية عبر الهاتف أو البريد الإلكتروني أو المحادثة المباشرة. يمكننا مساعدتك في إنشاء روتين عناية بالبشرة مخصص بناءً على نوع بشرتك ومخاوفك.",
        
        // Contact Page - Newsletter Section
        contact_newsletter_title: "ابق على تواصل",
        contact_newsletter_subtitle: "احصل على أحدث نصائح العناية بالبشرة وإطلاق المنتجات والعروض الحصرية",
        contact_newsletter_placeholder: "أدخل بريدك الإلكتروني",
        contact_newsletter_button: "اشترك",
        
        // Checkout Page
        checkout_step: "الدفع",
        confirmation_step: "التأكيد",
        checkout_title: "دفع آمن",
        checkout_subtitle: "أكمل طلبك بثقة",
        shipping_info_title: "معلومات الشحن",
        form_firstname: "الاسم الأول *",
        form_lastname: "الاسم الأخير *",
        form_email: "عنوان البريد الإلكتروني *",
        
        // Checkout Page - Shipping Information
        checkout_phone: "رقم الهاتف *",
        checkout_phone_placeholder: "+44 20 7123 4567",
        checkout_address: "العنوان *",
        checkout_address_placeholder: "123 الشارع الرئيسي",
        checkout_city: "المدينة *",
        checkout_city_placeholder: "لندن",
        checkout_postal: "الرمز البريدي *",
        checkout_postal_placeholder: "SW1A 1AA",
        checkout_country: "البلد *",
        checkout_country_select: "اختر البلد",
        checkout_country_uk: "المملكة المتحدة",
        checkout_country_us: "الولايات المتحدة",
        checkout_country_ca: "كندا",
        checkout_country_au: "أستراليا",
        checkout_country_de: "ألمانيا",
        checkout_country_fr: "فرنسا",
        checkout_save_address: "احفظ هذا العنوان للطلبات المستقبلية",
        
        // Checkout Page - Delivery Options
        checkout_delivery_title: "خيارات التوصيل",
        checkout_delivery_standard: "التوصيل القياسي",
        checkout_delivery_standard_desc: "3-5 أيام عمل",
        checkout_delivery_express: "التوصيل السريع",
        checkout_delivery_express_desc: "1-2 أيام عمل",
        checkout_delivery_nextday: "التوصيل في اليوم التالي",
        checkout_delivery_nextday_desc: "اليوم التالي",
        
        // Checkout Page - Payment Method
        checkout_payment_title: "طريقة الدفع",
        checkout_payment_card: "بطاقة ائتمان/خصم",
        checkout_payment_card_desc: "فيزا، ماستركارد، أمريكان إكسبريس",
        checkout_payment_paypal_desc: "ادفع بأمان مع باي بال",
        checkout_payment_apple_desc: "ادفع ببصمة الإصبع أو التعرف على الوجه",
        
        // Checkout Page - Card Details
        checkout_card_number: "رقم البطاقة *",
        checkout_card_number_placeholder: "1234 5678 9012 3456",
        checkout_card_expiry: "تاريخ الانتهاء *",
        checkout_card_expiry_placeholder: "شهر/سنة",
        checkout_card_cvv: "رمز الأمان *",
        checkout_card_cvv_placeholder: "123",
        checkout_card_name: "اسم حامل البطاقة *",
        checkout_card_name_placeholder: "الاسم على البطاقة",
        
        // Checkout Page - Order Summary
        checkout_tax: "الضريبة",
        checkout_place_order: "تأكيد الطلب بأمان",
        checkout_secure_payment: "معلومات الدفع الخاصة بك آمنة ومشفرة",
        
        // Checkout Page - Success Modal
        checkout_success_title: "تم تأكيد الطلب بنجاح!",
        checkout_success_message: "شكراً لطلبك. ستحصل على رسالة تأكيد بالبريد الإلكتروني قريباً.",
        checkout_view_order: "عرض تفاصيل الطلب",
        
        // Product Page
        product_name: "سيروم فيتامين سي للإشراق",
        
        // Product Details
        product_sku: "رقم المنتج:",
        product_category: "الفئة:",
        product_category_skincare: "عناية بالبشرة",
        product_size: "الحجم:",
        product_free_shipping: "شحن مجاني:",
        product_yes: "نعم",
        
        // Product Tabs
        product_tab_description: "الوصف",
        product_tab_ingredients: "المكونات",
        product_tab_reviews: "التقييمات (127)",
        product_tab_shipping: "الشحن والإرجاع",
        
        // Description Tab
        product_about_title: "عن هذا المنتج",
        product_about_text: "سيروم فيتامين سي للإشراق هو علاج احترافي للعناية بالبشرة مصمم لتحويل بشرتك. تجمع هذه التركيبة القوية بين قوة 20% من حمض L-ascorbic مع حمض الهيالورونيك لتقديم نتائج مرئية في غضون أسابيع قليلة.",
        product_benefits_title: "الفوائد الرئيسية:",
        product_benefit_1: "يضيء ويوحد لون البشرة",
        product_benefit_2: "يقلل من ظهور البقع الداكنة والتصبغات",
        product_benefit_3: "يحفز إنتاج الكولاجين لبشرة أكثر حزماً",
        product_benefit_4: "يوفر ترطيباً مكثفاً دون ثقل",
        product_benefit_5: "يحمي من الأضرار البيئية",
        product_benefit_6: "مناسب لجميع أنواع البشرة",
        product_how_to_use_title: "طريقة الاستخدام:",
        product_how_to_use_text: "ضع 2-3 نقاط على بشرة نظيفة وجافة في الصباح. اربت بلطف على البشرة حتى الامتصاص الكامل. اتبع بمرطب واستخدم دائماً واقي الشمس أثناء النهار. ابدأ كل يومين وزد تدريجياً للاستخدام اليومي حسب تكيف بشرتك.",
        
        // Ingredients Tab
        product_ingredients_title: "قائمة المكونات",
        product_active_ingredients: "المكونات النشطة",
        product_ingredient_1: "حمض L-Ascorbic (20%) - مضاد أكسدة قوي يضيء البشرة",
        product_ingredient_2: "حمض الهيالورونيك - ترطيب عميق ونفخ",
        product_ingredient_3: "فيتامين E - حماية إضافية مضادة للأكسدة",
        product_ingredient_4: "حمض الفيروليك - يثبت فيتامين سي ويعزز الفعالية",
        product_supporting_ingredients: "المكونات المساندة",
        product_ingredient_5: "ماء منقى",
        product_ingredient_6: "جلسرين",
        product_ingredient_7: "إيثوكسي ديجليكول",
        product_ingredient_8: "فينوكسي إيثانول",
        product_ingredient_9: "إيثيل هكسيل جلسرين",
        product_ingredients_note: "هذا المنتج خالي من البارابين والكبريتات وخالي من القسوة.",
        
        // Reviews Tab
        product_reviews_count: "تقييم",
        product_review_1_name: "سارة م.",
        product_review_1_text: "أحب هذا السيروم بشدة! أستخدمه منذ 3 أسابيع ويمكنني بالفعل رؤية فرق ملحوظ في إشراق بشرتي. يمتص بسرعة ولا يترك أي بقايا لزجة. يستحق كل فلس!",
        product_review_2_name: "جيسيكا ل.",
        product_review_2_text: "هذا أفضل سيروم فيتامين سي جربته. البقع الداكنة لدي تلاشت بشكل كبير وبشرتي تبدو أكثر إشراقاً. التغليف جميل أيضاً!",
        
        // Shipping Tab
        product_shipping_title: "الشحن والإرجاع",
        product_shipping_info_title: "معلومات الشحن",
        product_shipping_1: "شحن مجاني للطلبات فوق 100 جنيه إسترليني",
        product_shipping_2: "التوصيل القياسي: 3-5 أيام عمل",
        product_shipping_3: "التوصيل السريع: 1-2 أيام عمل",
        product_shipping_4: "التوصيل في اليوم التالي متاح",
        product_shipping_5: "الشحن الدولي متاح",
        product_returns_title: "سياسة الإرجاع",
        product_returns_1: "سياسة إرجاع لمدة 30 يوماً",
        product_returns_2: "يجب أن تكون العناصر غير مفتوحة وغير مستخدمة",
        product_returns_3: "إرجاع مجاني للطلبات فوق 100 جنيه إسترليني",
        product_returns_4: "عملية إرجاع سهلة عبر الإنترنت",
        product_returns_5: "معالجة المبالغ المستردة خلال 5-7 أيام عمل",
        product_returns_exchanges_title: "الإرجاع والاستبدال",
        product_shipping_6: "جميع الطلبات ترسل خلال 24 ساعة",
        product_returns_6: "إرجاع مجاني لجميع الطلبات",
        product_returns_7: "يجب أن تكون العناصر غير مفتوحة وفي التغليف الأصلي",
        product_returns_8: "الاستبدال متاح للأحجام المختلفة",
        
        // Cart
        cart_title: "سلة التسوق",
        cart_subtitle: "راجع عناصرك قبل الدفع",
        cart_continue_shopping: "متابعة التسوق",
        cart_empty: "سلتك فارغة",
        cart_empty_message: "يبدو أنك لم تضيف أي عناصر إلى سلتك بعد.",
        cart_start_shopping: "ابدأ التسوق",
        cart_quantity: "الكمية:",
        cart_remove: "إزالة",
        cart_order_summary: "ملخص الطلب",
        cart_subtotal: "المجموع الفرعي",
        cart_shipping: "الشحن",
        cart_total: "المجموع",
        cart_free: "مجاني",
        cart_add_more: "أضف £{amount} أكثر للحصول على شحن مجاني",
        cart_free_shipping: "أنت مؤهل للشحن المجاني!",
        cart_proceed_checkout: "المتابعة للدفع",
        cart_secure_checkout: "دفع آمن مع",
        cart_empty_alert: "سلتك فارغة!",
        cart_newsletter_title: "ابقي مشرقة",
        cart_newsletter_subtitle: "احصلي على نصائح حصرية للعناية بالبشرة ووصول مبكر للمنتجات الجديدة",
        cart_newsletter_placeholder: "أدخل بريدك الإلكتروني",
        cart_newsletter_button: "اشتراك",
        
        // Wishlist
        wishlist_title: "قائمة الأمنيات",
        continue_shopping: "متابعة التسوق",
        view_cart: "عرض السلة",
        
        // Footer
        footer_quick_links: "روابط سريعة",
        footer_customer_care: "خدمة العملاء", 
        footer_contact_info: "معلومات الاتصال",
        
        // Notifications
        notification_added_to_cart: "تم إضافة العنصر إلى السلة!",
        notification_removed_from_cart: "تم إزالة العنصر من السلة!",
        notification_cart_cleared: "تم مسح السلة!",
        notification_added_to_wishlist: "تم إضافة إلى قائمة الأمنيات!",
        notification_removed_from_wishlist: "تم إزالة من قائمة الأمنيات!",
        notification_item_removed_from_wishlist: "تم إزالة العنصر من قائمة الأمنيات!",
        notification_invalid_email: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
        notification_subscribed: "شكراً لاشتراكك! ستحصل على خصم 10% على طلبك الأول.",
        notification_already_in_wishlist: "العنصر موجود بالفعل في قائمة الأمنيات!",
        
        // Shop Page
        shop_premium_skincare: "عناية فاخرة بالبشرة",
        shop_hero_title: "مجموعة العناية بالبشرة المتميزة",
        shop_hero_subtitle: "اكتشف مجموعتنا المختارة من منتجات الجمال عالية الأداء",
        shop_hero_description: "حوّل روتين العناية ببشرتك مع منتجاتنا المصنوعة بخبرة. من السيرومات المضادة للشيخوخة إلى المرطبات المرطبة، اعثر على كل ما تحتاجه لبشرة مشرقة وصحية.",
        shop_hero_cta: "تسوق الآن",
        filter_all: "جميع المنتجات",
        filter_skincare: "العناية بالبشرة",
        filter_wellness: "العافية",
        filter_gifts: "مجموعات الهدايا",
        sort_label: "ترتيب حسب:",
        sort_featured: "مميزة",
        sort_price_low: "السعر: من الأقل إلى الأعلى",
        sort_price_high: "السعر: من الأعلى إلى الأقل",
        sort_rating: "تقييم العملاء",
        show_label: "عرض:",
        show_12: "12 في الصفحة",
        show_24: "24 في الصفحة",
        show_48: "48 في الصفحة",
        show_all: "عرض الكل",
        secure_payment: "طرق دفع آمنة",
        showing_products: "عرض جميع المنتجات",
        footer_description: "عناية متميزة بالبشرة لبشرة مشرقة وصحية. مصنوعة بحب وبأجود المكونات.",
        footer_shipping: "الشحن",
        footer_faq: "الأسئلة الشائعة",
        footer_returns: "الإرجاع",
        footer_size_guide: "دليل المقاسات",
        footer_track_order: "تتبع الطلب"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { languageContent };
}