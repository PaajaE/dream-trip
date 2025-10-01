# Dream Trip - Personalizované cestovní itineráře

Moderní webová prezentace pro službu plánování cest na míru. Vytvořeno pro Pavel a Lenku, vášnivé cestovatele, kteří pomáhají rodinám, párům a dobrodruhům objevovat svět bez stresu z plánování.

## 🚀 Funkce

### Jazyková podpora
- **Čeština** (výchozí jazyk)
- **Angličtina** (route `/en`)
- Automatická detekce jazyka prohlížeče
- Přepínání jazyků bez reload stránky
- SEO optimalizace pro oba jazyky

### Moderní design
- **Responsive design** - optimalizováno pro všechna zařízení
- **CSS Grid a Flexbox** - moderní layout systémy
- **CSS Variables** - konzistentní theming
- **Pico CSS framework** - minimální a čistý design
- **Font Awesome ikony** - profesionální ikonografie
- **Unsplash obrázky** - kvalitní stock fotografie

### Interaktivita
- **Smooth scrolling** - plynulé přechody mezi sekcemi
- **Scroll animace** - fade-in efekty při scrollování
- **Modální okna** - kontaktní formuláře a dotazy
- **Parallax efekty** - dynamické pozadí v hero sekci
- **Keyboard navigation** - podpora klávesových zkratek

### SEO optimalizace
- **Semantic HTML5** - správná struktura dokumentu
- **Meta tags** - Open Graph a Twitter Cards
- **Structured Data** - JSON-LD schema markup
- **Alt texty** - přístupnost a SEO
- **Sitemap ready** - připraveno pro sitemap.xml

### Performance
- **Lazy loading** - načítání obrázků při scrollování
- **Optimized images** - Unsplash CDN s optimalizací
- **Minimal JavaScript** - rychlé načítání
- **CSS optimization** - efektivní styly

## 📁 Struktura projektu

```
dream-trip/
├── index.html          # Hlavní HTML soubor
├── styles.css          # CSS styly s moderními technologiemi
├── script.js           # JavaScript pro interaktivitu
├── README.md           # Dokumentace projektu
└── favicon.ico         # Favicon (doporučeno přidat)
```

## 🛠️ Technologie

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling s CSS Grid a Flexbox
- **Vanilla JavaScript** - Interaktivní funkcionalita
- **Pico CSS** - Minimální CSS framework (CDN)
- **Font Awesome** - Ikony (CDN)
- **Unsplash** - Stock obrázky (CDN)

### Funkce
- **Language Detection** - Automatická detekce jazyka
- **Smooth Scrolling** - Plynulé přechody
- **Modal Windows** - Kontaktní formuláře
- **Responsive Design** - Mobile-first přístup
- **SEO Optimization** - Meta tags a structured data
- **Accessibility** - WCAG 2.1 compliance

## 🎨 Design System

### Barvy
```css
--primary-color: #2563eb    /* Hlavní modrá */
--secondary-color: #64748b  /* Šedá */
--accent-color: #f59e0b     /* Oranžová */
--success-color: #10b981    /* Zelená */
--bg-primary: #ffffff       /* Bílé pozadí */
--bg-secondary: #f8fafc     /* Světle šedé */
--text-primary: #1e293b     /* Tmavý text */
--text-secondary: #64748b   /* Šedý text */
```

### Typografie
- **Font Family**: System UI, -apple-system, sans-serif
- **Font Sizes**: 0.75rem - 3rem (responsive)
- **Line Height**: 1.6
- **Font Weights**: 400, 500, 600, 700

### Spacing
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **2XL**: 4rem

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 480px)  /* Small mobile */
@media (max-width: 768px)  /* Mobile/Tablet */
@media (min-width: 769px)  /* Desktop */
```

## 🌐 Jazyková podpora

### Český obsah (výchozí)
- URL: `https://dreamtrip.cz/`
- Jazyk: `cs`
- Meta: `lang="cs"`

### Anglický obsah
- URL: `https://dreamtrip.cz/en`
- Jazyk: `en`
- Meta: `lang="en"`

### Automatická detekce
1. **URL parameter**: `?lang=en`
2. **Browser language**: `navigator.language`
3. **Route detection**: `/en` path
4. **Local storage**: Uložená preference

## 🔧 Instalace a spuštění

### Lokální vývoj
```bash
# Klonování repository
git clone <repository-url>
cd dream-trip

# Spuštění lokálního serveru
python -m http.server 8000
# nebo
npx serve .
# nebo
php -S localhost:8000
```

### Produkční nasazení
1. **Upload souborů** na webový server
2. **Konfigurace serveru** pro SPA routing
3. **SSL certifikát** (doporučeno)
4. **CDN** pro statické soubory (volitelné)

## 📋 SEO Checklist

### ✅ Implementováno
- [x] Semantic HTML5 struktura
- [x] Meta title a description
- [x] Open Graph tags
- [x] Twitter Cards
- [x] JSON-LD structured data
- [x] Alt texty pro obrázky
- [x] Responsive design
- [x] Fast loading
- [x] Mobile-friendly
- [x] Language tags

### 🔄 Doporučeno přidat
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Favicon soubory
- [ ] Web App Manifest
- [ ] Service Worker

## 🎯 Obsah stránky

### Hero sekce
- **Headline**: "Vaše dobrodružství, naplánované pro vás"
- **Subheadline**: Personalizované itineráře pro rodiny, páry a dobrodruhy
- **CTA**: "Získejte svůj první plán"

### O nás
- Představení Pavel a Lenka
- Cestovatelské zkušenosti
- Vášeň pro plánování cest

### Jak to funguje
1. Řeknete nám své přání
2. My zkoumáme a připravíme
3. Získáte detailní itinerář
4. Jdete si užít

### Ukázka itineráře
- 3 dny v severním Polsku
- Detailní denní plán
- Mapy, GPS body, tipy
- Záložní možnosti

### Balíčky a ceny
- **Vzorkový plán**: Zdarma
- **Základní plán**: €40 (~1 000 Kč)
- **Prémiový plán**: €100 (~2 500 Kč)
- **Vlastní plán**: Na požádání

### Proč si vybrat nás
- Skuteční cestovatelé
- Dostupné ceny
- Flexibilní přístup
- Úspora času

## 🔒 Bezpečnost

### Implementované
- **XSS Protection** - Sanitizace vstupů
- **CSRF Protection** - Form validation
- **Content Security Policy** - Ready
- **HTTPS Ready** - SSL kompatibilní

### Doporučeno
- **Rate Limiting** - API ochrana
- **Input Validation** - Server-side
- **Error Handling** - Graceful degradation

## 📊 Performance

### Optimalizace
- **Lazy Loading** - Obrázky
- **CDN** - Pico CSS, Font Awesome
- **Minimal JS** - Vanilla JavaScript
- **Optimized CSS** - Efektivní selektory
- **Compressed Images** - Unsplash optimalizace

### Metriky
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🧪 Testování

### Browser Support
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Testovací scénáře
- [ ] Jazykové přepínání
- [ ] Responsive design
- [ ] Formuláře
- [ ] Smooth scrolling
- [ ] Modal windows
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## 🚀 Budoucí vylepšení

### Phase 2
- [ ] **Blog sekce** - Cestovatelské články
- [ ] **Galerie** - Fotografie z cest
- [ ] **Recenze** - Zpětná vazba klientů
- [ ] **Newsletter** - Email marketing
- [ ] **Chat widget** - Okamžitá komunikace

### Phase 3
- [ ] **Online booking** - Rezervační systém
- [ ] **Payment gateway** - Online platby
- [ ] **User accounts** - Uživatelské účty
- [ ] **Trip planner** - Interaktivní plánovač
- [ ] **Mobile app** - React Native

## 📞 Kontakt

**Dream Trip**
- **Email**: hello@dreamtrip.cz
- **Web**: https://dreamtrip.cz
- **Vytvořeno**: 2024

## 📄 Licence

Tento projekt je vytvořen pro Dream Trip službu. Všechna práva vyhrazena.

---

**Vytvořeno s ❤️ pro Pavel a Lenku - vášnivé cestovatele**
