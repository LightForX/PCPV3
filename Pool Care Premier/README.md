# Pool Care Premier - Lead Generation Website

A modern, conversion-optimized website for pool cleaning services in Tampa Bay, FL.

## 🎯 Features

### Lead Generation Optimized
- **FREE First Cleaning Offer** - Prominent, eye-catching lead magnet
- **Simplified Contact Form** - Just 4 fields to maximize conversions
- **Multiple CTAs** - Strategically placed call-to-action buttons throughout
- **Trust Signals** - Testimonials, guarantees, and social proof
- **Mobile-First Design** - Fully responsive for all devices

### Professional Design
- Clean, modern light blue & white color scheme
- Smooth animations and transitions
- Accessibility-focused (WCAG compliant)
- SEO optimized with LocalBusiness schema
- Fast loading with optimized assets

### Smart Features
- **Discord Webhook Integration** - Instant lead notifications
- **Phone Number Formatting** - Auto-formats as users type
- **Form Validation** - Real-time feedback for better UX
- **Scroll Animations** - Engaging entrance effects
- **Floating CTA** - Persistent call-to-action button

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Installation

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set Up Discord Webhook** (Optional but recommended)
   - See [WEBHOOK_SETUP.md](WEBHOOK_SETUP.md) for detailed instructions
   - Update the webhook URL in `app.py` (line 22)

3. **Run the Application**
   ```bash
   python app.py
   ```

4. **Open Your Browser**
   - Navigate to: `http://localhost:5000`
   - The site is now running locally!

## 📝 Customization Guide

### Update Contact Information

**Phone Number**: Search and replace `(813) 520-1198` in:
- `templates/base.html` (header & footer)
- `templates/index.html` (if present)

**Email**: Update in `templates/base.html` footer section

**Service Areas**: Update in `templates/base.html` footer

### Update Branding

**Company Name**: Search and replace `Pool Care Premier` throughout

**Colors**: Edit CSS variables in `static/styles.css`:
```css
:root {
    --primary-blue: #2563eb;    /* Main brand color */
    --light-blue: #3b82f6;      /* Secondary color */
    /* ... other colors ... */
}
```

**Logo**: Update the icon in `templates/base.html`:
```html
<i class="fas fa-swimming-pool"></i> <!-- Replace with your icon -->
```

### Update Content

**Hero Section**: Edit in `templates/index.html`:
- Main headline
- Subheadline
- Benefits list

**Services**: Update the service items in the "What's Included" section

**Testimonials**: Replace with real customer reviews

**Footer**: Update service areas, links, and copyright year

## 📊 Lead Notifications

### Discord Webhook Setup
1. Follow instructions in [WEBHOOK_SETUP.md](WEBHOOK_SETUP.md)
2. Each form submission sends a rich notification with:
   - Customer name
   - Phone number
   - Email address
   - Location
   - Timestamp
   - Reminder to respond within 24 hours

### Alternative: Email Notifications
To use email instead of Discord:
1. Install Flask-Mail: `pip install Flask-Mail`
2. Update `app.py` to send emails instead of Discord webhooks
3. Configure SMTP settings

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust, professionalism
- **Secondary**: Light Blue (#3b82f6) - Clean, fresh
- **Accents**: White & off-white backgrounds
- **Dark**: Used for footer contrast

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300-800 for various elements
- Modern, clean, highly readable

### Layout
- **Max Width**: 1400px for optimal readability
- **Spacing**: Consistent padding and margins
- **Grid**: CSS Grid for services and testimonials
- **Flexbox**: For navigation and CTAs

## 📱 Mobile Optimization

- Touch-friendly buttons (min 48px height)
- Hamburger menu for mobile navigation
- 16px input font size (prevents zoom on iOS)
- Optimized images and lazy loading
- Responsive grid layouts

## 🔒 Security

- CSRF protection (Flask built-in)
- Environment variable support for secrets
- Secure form handling
- Input validation and sanitization

### Production Deployment

Set environment variables:
```bash
export SECRET_KEY="your-random-secret-key"
export DISCORD_WEBHOOK_URL="your-webhook-url"
```

## 🎯 Conversion Optimization Tips

### What's Working:
✅ FREE offer prominently displayed
✅ Simple 4-field form
✅ Multiple CTAs throughout page
✅ Trust signals (testimonials, guarantees)
✅ 24-hour response promise
✅ No credit card required
✅ Mobile-optimized experience

### To Increase Conversions Further:
- Add real customer photos to testimonials
- Include before/after pool photos
- Add video testimonials
- Implement live chat
- A/B test headlines and CTAs
- Add limited-time bonuses
- Include service guarantee details

## 📈 Analytics

To track performance, add:
1. **Google Analytics** - Add tracking code to `templates/base.html`
2. **Facebook Pixel** - For retargeting campaigns
3. **Heat mapping** - Tools like Hotjar or Crazy Egg
4. **A/B Testing** - Google Optimize or similar

## 🛠️ Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **Notifications**: Discord Webhooks

## 📞 Support

For questions or issues:
- Review the code comments
- Check the WEBHOOK_SETUP.md guide
- Verify all dependencies are installed
- Ensure Python version is 3.7+

## 📄 License

This is a custom-built website for Pool Care Premier. All rights reserved.

---

**Made with 💙 for maximum lead generation**

Last Updated: October 2024
