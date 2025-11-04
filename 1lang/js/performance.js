(function () {
    'use strict';

    function enhanceImage(img) {
        if (!img || img.dataset.lazyProcessed === 'true') return;

        if (img.dataset.critical === 'true') {
            img.loading = 'eager';
            img.decoding = 'sync';
            img.setAttribute('fetchpriority', 'high');
        } else {
            if (!img.hasAttribute('loading')) {
                img.loading = 'lazy';
            }
            if (!img.hasAttribute('decoding')) {
                img.decoding = 'async';
            }
        }

        img.dataset.lazyProcessed = 'true';
    }

    function processImages(root) {
        (root.querySelectorAll ? root.querySelectorAll('img') : []).forEach(enhanceImage);
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        processImages(document);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            processImages(document);
        });
    }

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType !== 1) return;
                if (node.tagName === 'IMG') {
                    enhanceImage(node);
                } else {
                    processImages(node);
                }
            });
        });
    });

    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        window.addEventListener('load', function () {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
})();
