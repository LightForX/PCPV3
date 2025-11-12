# Pool Care Premier - Setup Guide

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
cd "Pool Care Premier"
pip install -r requirements.txt
```

### Step 2: Configure Discord Webhook (Get Lead Notifications)

1. Open Discord and go to your server
2. Click Server Settings → Integrations → Webhooks
3. Click "New Webhook"
4. Name it "Pool Care Leads"
5. Copy the Webhook URL
6. Open `app.py` in a text editor
7. Find line 21 and replace with your webhook URL:

```python
webhook_url = "https://discord.com/api/webhooks/YOUR-WEBHOOK-URL-HERE"
```

### Step 3: Run the Site
```bash
python app.py
```

Visit: **http://localhost:5000**

---

## 📧 Lead Notifications

When someone fills out your form, you'll get a Discord message with:
- 👤 Customer Name
- 📧 Email Address
- 📱 Phone Number
- 🏠 Service Address
- 💬 Service Interest
- ✨ Whether they want the FREE TRIAL

---

## 🎨 Customization Checklist

### Essential Updates (Do First):

- [ ] **Update Discord Webhook** (`app.py` line 21)
- [ ] **Update Phone Number** (`templates/base.html` lines 27, 67)
- [ ] **Update Email** (`templates/base.html` line 73)
- [ ] **Update Service Area** (`templates/base.html` line 79)
- [ ] **Change Secret Key** (`app.py` line 9) - Use a random string

### Optional Updates:

- [ ] **Add Real Testimonials** (`templates/index.html` lines 113-160)
- [ ] **Update Services List** (`templates/index.html` lines 82-110)
- [ ] **Change Colors** (`static/styles.css` lines 1-11)
- [ ] **Add Social Media Links** (`templates/base.html` lines 82-84)
- [ ] **Customize FREE TRIAL Terms** (if needed)

---

## 🎯 How to Test Lead Capture

1. Run the app: `python app.py`
2. Visit: http://localhost:5000
3. Scroll to "Get Your Free Trial" section
4. Fill out the form with test data
5. Click "Get My FREE Trial"
6. Check your Discord for the lead notification!

---

## 📱 Mobile Testing

Test on mobile devices:
1. Find your computer's IP address
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)
2. On your phone, visit: `http://YOUR-IP:5000`
3. Make sure your phone is on the same WiFi network

---

## 🚨 Troubleshooting

### "Module not found" error
```bash
pip install -r requirements.txt
```

### Discord webhook not working
- Check that the URL is correct
- Make sure you have permission to create webhooks
- Test with a simple message first

### Can't access from mobile
- Make sure firewall allows Python
- Check that you're on the same WiFi network
- Try using your computer's IP address instead of localhost

### Form not submitting
- Check browser console for errors (F12)
- Make sure all required fields are filled
- Check that Flask app is running

---

## 🌟 Key Features of Your Site

### 1. **FREE TRIAL Emphasis**
- Large badge at top of page
- Featured in hero section
- Floating button on scroll
- Pre-checked in form
- Multiple CTAs throughout

### 2. **Easy Form Access**
- "Claim Your FREE Trial" buttons everywhere
- Smooth scroll to form
- Simple, quick fields
- Mobile-optimized

### 3. **Trust Signals**
- "No Credit Card Required"
- "Fully Insured"
- "Same-Day Service"
- Customer testimonials
- Professional design

### 4. **Conversion Optimization**
- Floating CTA button (always visible)
- Multiple CTA placements
- Clear value proposition
- Social proof (testimonials)
- Simple 6-field form

---

## 📊 Tracking Leads

All leads come through Discord with full details. Consider:

1. **Create a dedicated Discord channel** for leads
2. **Set up phone notifications** for the leads channel
3. **Respond within 24 hours** (as promised on site)
4. **Keep a spreadsheet** to track conversion rates

---

## 🚀 Going Live (Production Deployment)

### Before deploying:

1. **Change Secret Key** in `app.py`:
```python
app.secret_key = 'use-a-long-random-string-here-change-this'
```

2. **Set debug to False** in `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=False)
```

3. **Choose a hosting provider:**
   - **PythonAnywhere** (Easiest) - Free tier, web interface
   - **Heroku** (Popular) - Free tier, Git integration
   - **DigitalOcean** (Professional) - $5/mo, full control

### Recommended: PythonAnywhere (Easiest)

1. Sign up at pythonanywhere.com (free)
2. Upload your files or use Git
3. Create a new web app (Flask)
4. Point it to your `app.py`
5. Done! You get a free subdomain

---

## 💡 Tips for Maximum Leads

1. **Respond Fast** - Set up Discord mobile notifications
2. **Track Sources** - Ask "How did you hear about us?" 
3. **Follow Up** - Call within 24 hours as promised
4. **Test Forms** - Submit test leads weekly to ensure it works
5. **Update Testimonials** - Add real customer reviews regularly
6. **Share Link Everywhere** - Business cards, truck, social media
7. **Run Ads** - Google Ads, Facebook Ads pointing to this site

---

## 📞 Support

Need help? Contact:
- Email: info@poolcarepremier.com
- Phone: (813) 520-1198

Good luck with your lead generation! 🏊‍♂️

