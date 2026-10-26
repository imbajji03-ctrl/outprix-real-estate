// Outprix Real Estate - Conversion & Event Tracking (GA4 & GTM dataLayer)
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Track WhatsApp Clicks across all links
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      el.addEventListener('click', function () {
        var label = (el.innerText || '').trim() || 'Floating WhatsApp';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'whatsapp_click',
          contact_method: 'whatsapp',
          click_label: label,
          target_url: el.href
        });
        if (typeof gtag === 'function') {
          gtag('event', 'whatsapp_click', {
            event_category: 'Contact',
            event_label: label,
            target_url: el.href
          });
        }
      });
    });

    // 2. Track Phone Call Clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        var phone = el.href.replace('tel:', '');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'phone_call_click',
          contact_method: 'phone',
          phone_number: phone
        });
        if (typeof gtag === 'function') {
          gtag('event', 'phone_call_click', {
            event_category: 'Contact',
            event_label: phone
          });
        }
      });
    });

    // 3. Track CTA Booking Modal Opens
    document.querySelectorAll('button[onclick*="openBookingModal"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var btnText = (btn.innerText || '').trim() || 'Book Strategy Call';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'open_booking_modal',
          button_text: btnText
        });
        if (typeof gtag === 'function') {
          gtag('event', 'open_booking_modal', {
            event_category: 'Engagement',
            event_label: btnText
          });
        }
      });
    });
  });
})();
