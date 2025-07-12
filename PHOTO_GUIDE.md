# 📸 How to Add Photos to Peri's Gallery

## Quick Start

1. **Add your photos to the `public/images/` folder**
2. **Update the image filenames in the code** (see below)
3. **Restart the development server** if needed

## Step-by-Step Instructions

### 1. Prepare Your Photos
- **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- **Recommended size**: 800x600px or similar aspect ratio
- **File size**: Keep under 2MB for faster loading

### 2. Add Photos to the Project
```bash
# Copy your photos to the images folder
cp /path/to/your/photos/* peri-pup-hub/public/images/
```

### 3. Update the Photo Gallery
The photos are configured in `src/components/PeriPhotoGallery.jsx`. Each photo object has an `image` property:

```javascript
{
  id: 1,
  title: "First Mud Puddle Adventure",
  date: "October 12, 2023",
  location: "Backyard",
  description: "The day I discovered that mud is both fun...",
  mood: "Adventurous",
  likes: 42,
  image: "/images/your-photo-filename.jpg" // ← Update this line
}
```

### 4. Current Photo Placeholders
The gallery is set up for these photos (update the filenames to match your actual photos):

- `mud-adventure.jpg` - First Mud Puddle Adventure
- `squirrel-standoff.jpg` - The Great Squirrel Standoff  
- `sunbathing.jpg` - Sunbathing Queen
- `treat-mission.jpg` - Treat Discovery Mission
- `couch-comfort.jpg` - Couch Comfort Expert
- `garden-party.jpg` - Garden Party Host
- `rainy-day.jpg` - Rainy Day Philosophy
- `birthday.jpg` - Birthday Celebrations

### 5. Customize Your Photos
You can also:
- **Add new photos**: Add new objects to the `photos` array
- **Change descriptions**: Update the `description` field
- **Modify dates/locations**: Update `date` and `location` fields
- **Adjust moods**: Change the `mood` field

## Example: Adding a New Photo

1. **Add your photo file**:
   ```bash
   cp peri-sleeping.jpg peri-pup-hub/public/images/
   ```

2. **Add to the photos array** in `PeriPhotoGallery.jsx`:
   ```javascript
   {
     id: 9,
     title: "Afternoon Nap Time",
     date: "April 15, 2024",
     location: "Master Bedroom",
     description: "My daily power nap in the most luxurious spot in the house. The humans think I'm sleeping, but I'm actually recharging my fabulousness.",
     mood: "Peaceful",
     likes: 112,
     image: "/images/peri-sleeping.jpg"
   }
   ```

## Fallback Behavior
- If a photo file is missing, the gallery will show a camera emoji (📷) instead
- This ensures the app always works, even without all photos

## Tips
- **Use descriptive filenames**: `peri-birthday-party.jpg` instead of `IMG_001.jpg`
- **Optimize images**: Compress photos for faster loading
- **Keep aspect ratios consistent**: Similar dimensions work best
- **Backup your photos**: Keep originals in a separate folder

## Need Help?
If you have trouble adding photos, you can:
1. Start with just 1-2 photos to test
2. Check the browser console for any errors
3. Make sure filenames match exactly (case-sensitive)
4. Restart the development server after adding photos

Happy photo adding! 🐩📸 