// ========================================
// SUBTLE ANTI-THEFT PROTECTION SYSTEM
// © 2024 dacsoapp.com - All Rights Reserved
// ========================================

(function() {
    'use strict';
    
    // Only activate protection after page is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // Disable right-click context menu (but allow on input fields)
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable developer tools shortcuts (but don't block completely)
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.shiftKey && e.key === 'J')) {
                e.preventDefault();
                // Show a subtle warning instead of blocking completely
                console.log('%c© dacsoapp.com - Demo Website', 'color: #92400e; font-weight: bold;');
                return false;
            }
        });
        
        // Disable text selection (but allow on input fields)
        document.addEventListener('selectstart', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable drag on images only
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        });
        
        // Console warning (subtle)
        console.log('%c© dacsoapp.com - Demo Website', 'color: #92400e; font-weight: bold;');
        console.log('%cThis is a demonstration website for presentation purposes only.', 'color: #666; font-size: 12px;');
        
        // Add copyright notice to page (subtle, in corner)
        const copyrightNotice = document.createElement('div');
        copyrightNotice.innerHTML = '© dacsoapp.com';
        copyrightNotice.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: rgba(146, 64, 14, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 10000;
            pointer-events: none;
            font-family: Arial, sans-serif;
            font-weight: bold;
        `;
        document.body.appendChild(copyrightNotice);
        
        // Add CSS to prevent text selection (but allow on inputs)
        const style = document.createElement('style');
        style.textContent = `
            * {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            
            input, textarea {
                -webkit-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
            }
        `;
        document.head.appendChild(style);
        
        // Add meta tags for additional protection
        const meta1 = document.createElement('meta');
        meta1.name = 'robots';
        meta1.content = 'noindex, nofollow, noarchive, nosnippet';
        document.head.appendChild(meta1);
        
        const meta2 = document.createElement('meta');
        meta2.name = 'copyright';
        meta2.content = '© 2024 dacsoapp.com';
        document.head.appendChild(meta2);
        
    });
    
})();
