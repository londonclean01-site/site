# ✅ Чеклист Перед Деплоем - London Clean

## 📋 Обязательные Проверки

### 1. Код и Сборка
- [ ] `npm run build` выполняется без ошибок
- [ ] Все TypeScript ошибки исправлены
- [ ] Все ESLint предупреждения проверены
- [ ] `.env.local` создан и заполнен (НЕ коммитить!)
- [ ] `.gitignore` содержит `.env.local`

### 2. Контактная Информация
- [ ] Телефон везде: `+447438217078`
- [ ] Email везде: `info@londonclean.co.uk`
- [ ] Адрес везде: `Raymor Court, 91 Upper Clapton Rd, London E5 9BX`

### 3. URL и Домены
- [ ] Все URL обновлены на: `https://london-clean01.co.uk`
- [ ] Sitemap.ts содержит правильный домен
- [ ] Robots.ts содержит правильный домен
- [ ] Metadata.ts содержит правильный домен
- [ ] LocalBusinessSchema содержит правильный домен
- [ ] ServiceSchema содержит правильный домен

### 4. SEO Schemas
- [ ] LocalBusinessSchema заполнена полностью
- [ ] ServiceSchema настроена
- [ ] Все metadata страниц корректны
- [ ] OpenGraph теги настроены
- [ ] Twitter Card настроены

### 5. Изображения
- [ ] Все изображения имеют alt тексты
- [ ] Favicon.ico создан (или favicon.png конвертирован)
- [ ] apple-touch-icon.png создан
- [ ] logo.png создан для SEO schema
- [ ] og-image.jpg присутствует

### 6. Формы и API
- [ ] Contact form API route работает
- [ ] QuoteModal открывается на всех кнопках
- [ ] Валидация форм работает
- [ ] Email отправка настроена (Resend или SMTP)

### 7. Environment Variables
Подготовьте для Vercel:
- [ ] `SITE_URL=https://london-clean01.co.uk`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` (получить от Google Analytics)
- [ ] `NEXT_PUBLIC_GTM_ID` (получить от Google Tag Manager)
- [ ] `BUSINESS_PHONE=+447438217078`
- [ ] `BUSINESS_EMAIL=info@londonclean.co.uk`
- [ ] `BUSINESS_ADDRESS=Raymor Court, 91 Upper Clapton Rd, London E5 9BX`
- [ ] `RESEND_API_KEY` (получить от Resend.com)
- [ ] `CONTACT_EMAIL=info@londonclean.co.uk`

### 8. Git и GitHub
- [ ] Git инициализирован
- [ ] Все файлы закоммичены
- [ ] GitHub репозиторий создан
- [ ] Код запушен на GitHub
- [ ] `.env.local` НЕ в репозитории

### 9. Мобильная Версия
- [ ] Все страницы адаптивны
- [ ] Навигация работает на мобильных
- [ ] Формы удобны на мобильных
- [ ] Изображения оптимизированы

### 10. Производительность
- [ ] Next.js Image используется везде
- [ ] Lazy loading настроен
- [ ] Анимации оптимизированы
- [ ] Code splitting работает

---

## 🚨 Критические Файлы для Создания

### Отсутствующие файлы (создать перед деплоем):

1. **favicon.ico**
   - Размер: 16x16, 32x32, 48x48
   - Формат: .ico
   - Инструмент: https://favicon.io/favicon-converter/
   - Загрузите `favicon.png` и конвертируйте

2. **apple-touch-icon.png**
   - Размер: 180x180px
   - Формат: PNG
   - Путь: `/public/apple-touch-icon.png`

3. **logo.png**
   - Размер: 512x512px (рекомендуется)
   - Формат: PNG
   - Путь: `/public/logo.png`
   - Используется в SEO schema

---

## 📝 После Деплоя

### Немедленно:
- [ ] Проверить сайт открывается: `https://london-clean01.co.uk`
- [ ] Протестировать все страницы
- [ ] Отправить тестовую форму
- [ ] Проверить получение email

### В Течение 24 Часов:
- [ ] Настроить Google Analytics
- [ ] Настроить Google Tag Manager
- [ ] Добавить сайт в Google Search Console
- [ ] Отправить sitemap.xml
- [ ] Проверить индексацию

### В Течение Недели:
- [ ] Создать Google Business Profile
- [ ] Добавить сайт в социальные сети
- [ ] Настроить мониторинг (Vercel Analytics)
- [ ] Проверить Core Web Vitals
- [ ] Тест на PageSpeed Insights

---

## 🔍 Финальная Проверка URLs

Убедитесь что все эти URL работают:

- [ ] https://london-clean01.co.uk
- [ ] https://london-clean01.co.uk/about
- [ ] https://london-clean01.co.uk/services
- [ ] https://london-clean01.co.uk/contact
- [ ] https://london-clean01.co.uk/blog
- [ ] https://london-clean01.co.uk/areas
- [ ] https://london-clean01.co.uk/sitemap.xml
- [ ] https://london-clean01.co.uk/robots.txt

---

## 📧 Email Настройка (Resend)

### Шаги:
1. [ ] Создать аккаунт на https://resend.com
2. [ ] Добавить домен `asteradigital.kz`
3. [ ] Настроить DNS записи (SPF, DKIM, DMARC)
4. [ ] Верифицировать домен
5. [ ] Создать API Key
6. [ ] Добавить API Key в Vercel Environment Variables
7. [ ] Redeploy после добавления ключа
8. [ ] Протестировать отправку email

---

## 🎯 Готовность к Запуску

### Минимальные Требования (MUST HAVE):
✅ Сайт собирается без ошибок
✅ Все URL обновлены на временный домен
✅ Контактная информация правильная
✅ Git репозиторий готов
✅ Environment variables подготовлены

### Рекомендуемые (SHOULD HAVE):
⚠️ Favicon.ico создан
⚠️ Apple-touch-icon.png создан
⚠️ Logo.png создан
⚠️ Email настроен (Resend)
⚠️ Google Analytics настроен

### Опциональные (NICE TO HAVE):
○ Google Tag Manager настроен
○ Google Search Console добавлен
○ Social media links обновлены
○ Performance тесты пройдены

---

## 🚀 Готов к Деплою?

Если все пункты из **Минимальных Требований** выполнены:

**✅ ДА - Можно деплоить!**

Следуйте инструкции в `VERCEL-DEPLOYMENT-GUIDE.md`

---

**Последнее обновление:** 3 февраля 2026
