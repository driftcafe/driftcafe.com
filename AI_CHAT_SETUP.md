# AI Chat Feature - Setup Guide

## Getting Your Gemini API Key

1. **Go to Google AI Studio**
   - Visit: https://aistudio.google.com/app/apikey
   - Sign in with your Google account

2. **Create API Key**
   - Click **"Create API Key"**
   - Select **"Create API key in new project"** (or use existing project)
   - Copy the generated API key

3. **Add to Your Project**
   - Create a file `.env.local` in your project root:
   ```bash
   cd /Users/driftcafe/Desktop/Antigravity-repo/driftcafe.com
   cp .env.example .env.local
   ```
   - Open `.env.local` and paste your API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Restart Dev Server**
   ```bash
   npm run dev
   ```

## Testing the Chat

1. Open your browser to `http://localhost:3000`
2. Click the chat button (bottom-right corner)
3. Try these test questions:
   - **Professional**: "What's Josh's experience with AI/ML?"
   - **Off-topic**: "What's Josh's favorite ice cream?" (should redirect)
   - **Unrelated**: "How do I bake a cake?" (should redirect)

## Gemini API - Free Tier Limits

- ✅ **15 requests per minute**
- ✅ **1 million tokens per day**
- ✅ **Completely free** for your portfolio traffic

## Next Steps

Once you've tested locally and everything works:
1. Add `GEMINI_API_KEY` to Vercel environment variables
2. Merge the feature branch to main
3. Deploy to production!

---

**Need help?** The API key is free and takes ~2 minutes to set up!
