from flask import Flask, render_template, request, redirect, url_for, flash
import requests
from datetime import datetime
import os

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

# Use environment variable for secret key in production, fallback for development
app.secret_key = os.environ.get('SECRET_KEY', 'your-secret-key-here-change-in-production')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return app.send_static_file('sitemap.xml')

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.form
        
        # Update this webhook URL with your actual Discord webhook
        # You can also use an environment variable: os.environ.get('DISCORD_WEBHOOK_URL', 'fallback-url')
        webhook_url = "https://discord.com/api/webhooks/1312979010451669032/C4VGYrNcKN30cQhyriNjRy-j8A5yaadHuU1NHp6y-2sp0tisfaPyOE9GuoXmewM8wKv4"
        
        # Determine lead quality based on responses
        current_service = data.get('current_service', '')
        start_timeframe = data.get('start_timeframe', '')
        
        # Quality indicators
        quality_score = "🔥 HOT LEAD" if (
            current_service in ['yes-switching', 'no-ready'] and 
            start_timeframe in ['this-week', 'next-week']
        ) else "🟡 WARM LEAD" if (
            start_timeframe == 'within-month'
        ) else "❄️ COLD LEAD"
        
        # Create a rich embed message for Discord
        embed = {
            "embeds": [{
                "title": f"{quality_score} - Free Equipment Check Request!",
                "description": "**🎁 FREE EQUIPMENT CHECK REQUEST**",
                "color": 2463539 if "HOT" in quality_score else 16776960 if "WARM" in quality_score else 9807270,
                "fields": [
                    {"name": "👤 Name", "value": data.get('name', 'N/A'), "inline": True},
                    {"name": "📱 Phone", "value": data.get('phone', 'N/A'), "inline": True},
                    {"name": "📧 Email", "value": data.get('email', 'N/A'), "inline": False},
                    {"name": "📍 Address", "value": data.get('address', 'N/A'), "inline": False},
                    {"name": "🏊 Pool Type", "value": data.get('pool_type', 'N/A').replace('-', ' ').title(), "inline": True},
                    {"name": "🔄 Current Service", "value": data.get('current_service', 'N/A').replace('-', ' ').title(), "inline": True},
                    {"name": "📅 Start Timeframe", "value": data.get('start_timeframe', 'N/A').replace('-', ' ').title(), "inline": False},
                ],
                "footer": {
                    "text": "⚡ Respond within 24 hours! Priority: " + quality_score.split()[1]
                },
                "timestamp": datetime.utcnow().isoformat()
            }]
        }
        
        # Send to Discord webhook
        response = requests.post(webhook_url, json=embed)
        
        if response.status_code == 204:
            flash('🎉 Success! We\'ll contact you within 24 hours to schedule your FREE equipment check.', 'success')
        else:
            flash('🎉 Thank you! We\'ll reach out within 24 hours to schedule your free equipment check.', 'success')
            
    except Exception as e:
        print(f"Error submitting form: {e}")
        flash('🎉 Thank you! We\'ll reach out within 24 hours to schedule your free equipment check.', 'success')
    
    return redirect(url_for('home', submitted='true'))

@app.route('/quick-message', methods=['POST'])
def quick_message():
    try:
        data = request.get_json()
        phone = data.get('phone', 'N/A')
        message = data.get('message', 'N/A')
        
        # Update webhook URL
        webhook_url = "https://discord.com/api/webhooks/1207681234567890123/your-webhook-token"
        
        # Create embed for quick message
        embed = {
            "embeds": [{
                "title": "💬 Quick Question",
                "description": "**Someone has a quick question!**",
                "color": 16776960,  # Yellow color
                "fields": [
                    {"name": "📱 Phone", "value": phone, "inline": False},
                    {"name": "💬 Message", "value": message, "inline": False},
                ],
                "footer": {
                    "text": "⚡ Text them back ASAP!"
                },
                "timestamp": datetime.utcnow().isoformat()
            }]
        }
        
        # Send to Discord
        requests.post(webhook_url, json=embed)
        
        return {"status": "success", "message": "Message sent!"}, 200
        
    except Exception as e:
        print(f"Error sending quick message: {e}")
        return {"status": "success", "message": "Message sent!"}, 200

@app.route('/referral')
def referral():
    return render_template('referral.html')

@app.route('/referral', methods=['POST'])
def referral_submit():
    try:
        data = request.form
        
        # Update this webhook URL with your actual Discord webhook
        webhook_url = "https://discord.com/api/webhooks/1312979010451669032/C4VGYrNcKN30cQhyriNjRy-j8A5yaadHuU1NHp6y-2sp0tisfaPyOE9GuoXmewM8wKv4"
        
        # Create a rich embed message for Discord
        embed = {
            "embeds": [{
                "title": "💰 New Referral Submission!",
                "description": "**New referral submitted - $75 when they close!**",
                "color": 16776960,  # Yellow color
                "fields": [
                    {"name": "👤 Referrer Name", "value": data.get('referrer_name', 'N/A'), "inline": True},
                    {"name": "📱 Referrer Phone", "value": data.get('referrer_phone', 'N/A'), "inline": True},
                    {"name": "📧 Referrer Email", "value": data.get('referrer_email', 'N/A'), "inline": False},
                    {"name": "🏠 Referrer Address", "value": data.get('referrer_address', 'N/A'), "inline": False},
                    {"name": "━━━━━━━━━━━━━━━━", "value": "**REFERRAL INFORMATION**", "inline": False},
                    {"name": "👤 Referral Name", "value": data.get('referral_name', 'N/A'), "inline": True},
                    {"name": "📱 Referral Phone", "value": data.get('referral_phone', 'N/A'), "inline": True},
                    {"name": "📧 Referral Email", "value": data.get('referral_email', 'N/A'), "inline": False},
                    {"name": "🏠 Referral Address", "value": data.get('referral_address', 'N/A'), "inline": False},
                    {"name": "💳 Payment Method", "value": data.get('payment_method', 'N/A'), "inline": True},
                ],
                "footer": {
                    "text": "⚡ $75 per successful close!"
                },
                "timestamp": datetime.utcnow().isoformat()
            }]
        }
        
        # Send to Discord webhook
        response = requests.post(webhook_url, json=embed)
        
        if response.status_code == 204:
            flash('🎉 Success! Your referral has been submitted. You\'ll earn $75 when they sign up!', 'success')
        else:
            flash('🎉 Thank you! Your referral has been submitted. You\'ll earn $75 when they sign up!', 'success')
            
    except Exception as e:
        print(f"Error submitting referral form: {e}")
        flash('🎉 Thank you! Your referral has been submitted. You\'ll earn $75 when they sign up!', 'success')
    
    return redirect(url_for('referral', submitted='true'))

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True) 