# Blog Avatar Setup

## How to Add Your Avatar Image

1. **Get your avatar image** (profile photo)
   - Recommended size: 200x200 pixels or larger
   - Format: JPG, PNG, or WebP
   - Should be a square image for best results

2. **Add the image to your blog:**
   ```bash
   # Place your avatar image here:
   blog/static/images/avatar.jpg
   ```

3. **Update hugo.toml:**
   
   Open `blog/hugo.toml` and uncomment the avatar line:
   
   ```toml
   [params.avatar]
     url = "/images/avatar.jpg"  # Uncomment this line
   ```

4. **Rebuild and test:**
   ```bash
   cd blog
   hugo server -D
   ```
   
   Visit http://localhost:1313 to see your avatar!

## Current Status

- ✅ Avatar configuration is ready
- ⏳ Waiting for you to add avatar image
- 📁 Place image at: `blog/static/images/avatar.jpg`

## Alternative: Use a URL

If you already have an avatar hosted somewhere (GitHub, LinkedIn, etc.):

```toml
[params.avatar]
  url = "https://your-image-url.com/avatar.jpg"
```

This will use the external image directly.
