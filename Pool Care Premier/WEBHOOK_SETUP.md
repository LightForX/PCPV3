# Discord Webhook Setup Guide

This guide will help you set up Discord notifications for new leads.

## Step 1: Create a Discord Webhook

1. Open your Discord server
2. Go to **Server Settings** → **Integrations** → **Webhooks**
3. Click **"New Webhook"**
4. Give it a name (e.g., "Pool Care Leads")
5. Select the channel where you want to receive notifications
6. Click **"Copy Webhook URL"**

## Step 2: Update Your App

1. Open `app.py`
2. Find line 18 (the webhook_url line):
   ```python
   webhook_url = "https://discord.com/api/webhooks/1207681234567890123/your-webhook-token"
   ```
3. Replace the entire URL with your copied webhook URL
4. Save the file

## Step 3: Test It

1. Go to your website
2. Fill out the contact form
3. Check your Discord channel - you should receive a notification with the lead details!

## Example Webhook URL Format

```
https://discord.com/api/webhooks/{webhook_id}/{webhook_token}
```

## What You'll Receive

Each lead notification includes:
- 👤 Name
- 📱 Phone Number
- 📧 Email Address
- 📍 Location (City/ZIP)
- ⚡ Reminder to respond within 24 hours

## Troubleshooting

- **Not receiving notifications?** Double-check the webhook URL is correct
- **Getting errors?** Make sure the webhook channel still exists and hasn't been deleted
- **Testing locally?** The webhook will work even when running on localhost

## Security Note

Keep your webhook URL private! Anyone with the URL can send messages to your Discord channel.

