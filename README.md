# SecureCube Landing Page

Professional risk assessment app landing page optimized for iOS devices with full multilingual support.

## Features

### 🎨 iOS-Optimized Design
- Native iOS design language with SF Pro Display font
- Smooth animations and transitions
- Touch-optimized interactions
- Responsive layout for all Apple devices (iPhone, iPad, Mac, Apple Vision Pro)
- Pull-to-refresh prevention
- Floating phone mockup animation
- Enhanced shadows and depth

### 🌍 Multilingual Support (17 Languages)
The landing page is fully localized in the following languages:

1. **English** (en) - Default
2. **Finnish** (fi) - Suomi
3. **Swedish** (sv) - Svenska
4. **Norwegian** (no) - Norsk
5. **Russian** (ru) - Русский
6. **Polish** (pl) - Polski
7. **German** (de) - Deutsch
8. **Italian** (it) - Italiano
9. **French** (fr) - Français
10. **Spanish** (es) - Español
11. **Portuguese** (pt) - Português
12. **Brazilian Portuguese** (pt-BR) - Português (BR)
13. **Turkish** (tr) - Türkçe
14. **Korean** (ko) - 한국어
15. **Chinese** (zh) - 简体中文
16. **Japanese** (ja) - 日本語
17. **Arabic** (ar) - العربية

### 🚀 Key Improvements

#### Design Enhancements
- **Apple-style aesthetics**: Clean, modern design following Apple's design guidelines
- **Improved typography**: Using SF Pro Display for authentic iOS look
- **Enhanced animations**: Smooth floating animation for phone mockup
- **Better shadows**: Depth-enhanced shadows for cards and interactive elements
- **Rounded corners**: Increased border radius for iOS-native feel
- **Touch feedback**: Active states for all interactive elements

#### Mobile Experience
- **Responsive navigation**: Mobile-friendly hamburger menu
- **Language selector**: Dropdown menu with country flags
- **Auto language detection**: Automatically detects browser language
- **Touch-optimized**: All interactions optimized for touch
- **Smooth scrolling**: Native smooth scroll behavior
- **No pull-to-refresh**: Disabled when at top of page to prevent accidental refresh

#### Localization Features
- **Automatic detection**: Detects user's browser language on first visit
- **Persistent selection**: Saves language preference to localStorage
- **Easy switching**: Simple dropdown with country flags
- **Complete translation**: All UI elements are translated
- **Fallback support**: Defaults to English if language not available

## File Structure

```
SecureCubePage/
├── index.html          # Main HTML file with i18n data attributes
├── styles.css          # Enhanced CSS with iOS optimizations
├── script.js           # JavaScript with localization logic
├── translations.js     # Translation strings for all languages
├── README.md          # This file
└── *.webp             # App screenshots
```

## Usage

### Viewing the Page
Simply open `index.html` in any modern web browser. The page will automatically detect your browser's language and display content accordingly.

### Changing Language
Click the language selector (🌐) in the navigation bar and select your preferred language. Your choice will be saved and remembered for future visits.

### Adding New Languages

1. Open `translations.js`
2. Add a new language object following the existing pattern:

```javascript
languageCode: {
    nav_features: "Your Translation",
    nav_security: "Your Translation",
    // ... continue with all keys
}
```

3. Add the language option to the dropdown in `index.html`:

```html
<div class="language-option" data-lang="languageCode">🏁 Language Name</div>
```

### Customizing Translations

All translation keys are defined in `translations.js`. Simply edit the values for any language to update the content.

## Browser Support

- ✅ Safari (iOS and macOS)
- ✅ Chrome (all platforms)
- ✅ Firefox (all platforms)
- ✅ Edge (all platforms)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No heavy frameworks or libraries
- **Fast loading**: Optimized images and minimal JavaScript
- **Smooth animations**: Hardware-accelerated CSS animations
- **Local storage**: Language preference cached for instant loading

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios for text
- Touch-friendly interactive elements (minimum 44x44px)

## Development

### Testing on iOS
1. Open the page in Safari on iOS device
2. Test language switching
3. Verify touch interactions
4. Check responsive breakpoints

### Testing Locally
```bash
# Open in default browser
open index.html

# Or start a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Credits

- Design: iOS-inspired modern web design
- Fonts: SF Pro Display (Apple), Inter (fallback)
- Icons: Unicode emoji characters
- Framework: Pure HTML/CSS/JavaScript (no dependencies)

## License

© 2024 SecureCube. All rights reserved.
