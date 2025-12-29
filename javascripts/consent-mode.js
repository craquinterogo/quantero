// Google Consent Mode v2 Implementation
// Sets default consent to 'denied' before Google Analytics loads

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Default consent to 'denied' as a placeholder (before user interaction)
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500  // Wait 500ms for consent banner
});

// Listen for MkDocs Material consent events
document$.subscribe(function() {
  // Check if user has made a consent choice
  var consent = __md_get("__consent");
  
  if (consent && consent.analytics) {
    // User accepted analytics
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else if (consent && !consent.analytics) {
    // User rejected analytics
    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
});
