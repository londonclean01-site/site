# 🚀 Полная Инструкция по Деплою на Vercel

## 📋 Предварительная Подготовка

### 1. Проверка Проекта Перед Деплоем

```bash
# Убедитесь, что проект собирается без ошибок
npm run build

# Если есть ошибки - исправьте их перед деплоем
```

### 2. Создайте .env.local файл (НЕ коммитить в Git!)

```bash
# Скопируйте шаблон
cp env.template .env.local
```

Откройте `.env.local` и заполните:

```env
# Site Configuration
SITE_URL=https://london-clean01.co.uk

# Google Analytics (получите на https://analytics.google.com)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (получите на https://tagmanager.google.com)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact Information
BUSINESS_PHONE=+447438217078
BUSINESS_EMAIL=info@londonclean.co.uk
BUSINESS_ADDRESS="Raymor Court, 91 Upper Clapton Rd, London E5 9BX"

# Email Configuration - Resend (рекомендуется)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@londonclean.co.uk
```

---

## 🌐 Шаг 1: Создание Аккаунта на Vercel

### 1.1 Регистрация

1. Откройте браузер и перейдите на **https://vercel.com**
2. Нажмите кнопку **"Sign Up"** (Зарегистрироваться) в правом верхнем углу
3. Выберите способ регистрации:
   - **GitHub** (рекомендуется - проще интеграция)
   - **GitLab**
   - **Bitbucket**
   - **Email**

### 1.2 Авторизация через GitHub (рекомендуется)

1. Нажмите **"Continue with GitHub"**
2. Введите логин и пароль GitHub
3. Нажмите **"Authorize Vercel"**
4. Vercel получит доступ к вашим репозиториям

---

## 📦 Шаг 2: Подготовка Git Репозитория

### 2.1 Инициализация Git (если еще не сделано)

```bash
# Перейдите в папку проекта
cd d:\londonclean

# Инициализируйте Git
git init

# Добавьте все файлы
git add .

# Сделайте первый коммит
git commit -m "Initial commit - London Clean website ready for deployment"
```

### 2.2 Создание Репозитория на GitHub

1. Откройте **https://github.com**
2. Нажмите **"+"** в правом верхнем углу → **"New repository"**
3. Заполните:
   - **Repository name:** `londonclean`
   - **Description:** `Professional cleaning service website for London`
   - **Visibility:** Private (рекомендуется) или Public
4. **НЕ** ставьте галочки на:
   - Initialize with README
   - Add .gitignore
   - Choose a license
5. Нажмите **"Create repository"**

### 2.3 Подключение Локального Репозитория к GitHub

```bash
# Добавьте remote origin (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/londonclean.git

# Переименуйте ветку в main (если нужно)
git branch -M main

# Отправьте код на GitHub
git push -u origin main
```

---

## 🚀 Шаг 3: Деплой на Vercel

### 3.1 Импорт Проекта

1. Откройте **https://vercel.com/dashboard**
2. Нажмите кнопку **"Add New..."** → **"Project"**
3. Вы увидите список ваших GitHub репозиториев
4. Найдите репозиторий **"londonclean"**
5. Нажмите **"Import"** напротив него

### 3.2 Настройка Проекта

#### Configure Project (Настройка проекта)

1. **Project Name:** `londonclean01` (или любое другое имя)
2. **Framework Preset:** Next.js (должно определиться автоматически)
3. **Root Directory:** `.` (оставьте как есть)
4. **Build and Output Settings:**
   - Build Command: `npm run build` (автоматически)
   - Output Directory: `.next` (автоматически)
   - Install Command: `npm install` (автоматически)

#### Environment Variables (Переменные окружения)

**ВАЖНО!** Добавьте все переменные из `.env.local`:

1. Нажмите **"Environment Variables"** (раскрыть секцию)
2. Добавьте каждую переменную:

```
Name: SITE_URL
Value: https://london-clean01.co.uk
```

```
Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX
```

```
Name: NEXT_PUBLIC_GTM_ID
Value: GTM-XXXXXXX
```

```
Name: BUSINESS_PHONE
Value: +447438217078
```

```
Name: BUSINESS_EMAIL
Value: info@londonclean.co.uk
```

```
Name: BUSINESS_ADDRESS
Value: Raymor Court, 91 Upper Clapton Rd, London E5 9BX
```

```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxxxxxxxxx
```

```
Name: CONTACT_EMAIL
Value: info@londonclean.co.uk
```

3. После добавления каждой переменной нажимайте **"Add"**

### 3.3 Запуск Деплоя

1. Проверьте все настройки
2. Нажмите большую синюю кнопку **"Deploy"**
3. Начнется процесс деплоя (займет 2-5 минут)

### 3.4 Мониторинг Деплоя

Вы увидите:
- **Building** - сборка проекта
- **Deploying** - деплой на серверы Vercel
- **Ready** - сайт готов! 🎉

---

## 🌍 Шаг 4: Настройка Кастомного Домена

### 4.1 Добавление Домена в Vercel

1. После успешного деплоя откройте проект в Vercel Dashboard
2. Перейдите на вкладку **"Settings"** (Настройки)
3. В левом меню выберите **"Domains"**
4. Нажмите **"Add"** или **"Add Domain"**
5. Введите: `london-clean01.co.uk`
6. Нажмите **"Add"**

### 4.2 Настройка DNS у Вашего Провайдера

Vercel покажет инструкции по настройке DNS. Вам нужно:

#### Вариант A: CNAME Record (рекомендуется для поддоменов)

1. Зайдите в панель управления вашего домена
2. Найдите раздел **DNS Settings** или **DNS Management**
3. Добавьте новую запись:
   - **Type:** CNAME
   - **Name:** london-clean01
   - **Value:** cname.vercel-dns.com
   - **TTL:** 3600 (или Auto)
4. Сохраните изменения

#### Вариант B: A Record (если CNAME не работает)

Vercel покажет IP адрес, добавьте:
- **Type:** A
- **Name:** londonclean01
- **Value:** [IP адрес от Vercel]
- **TTL:** 3600

### 4.3 Проверка Домена

1. Вернитесь в Vercel → Settings → Domains
2. Подождите 5-10 минут (DNS propagation)
3. Vercel автоматически проверит и активирует домен
4. Статус изменится на **"Valid Configuration"** ✅

---

## 📧 Шаг 5: Настройка Email (Resend)

### 5.1 Создание Аккаунта Resend

1. Откройте **https://resend.com**
2. Нажмите **"Sign Up"**
3. Зарегистрируйтесь через GitHub или Email
4. Подтвердите email

### 5.2 Добавление Домена

1. В Resend Dashboard нажмите **"Domains"**
2. Нажмите **"Add Domain"**
3. Введите: `asteradigital.kz` (основной домен)
4. Нажмите **"Add"**

### 5.3 Настройка DNS для Email

Resend покажет DNS записи, которые нужно добавить:

1. Зайдите в DNS настройки вашего домена
2. Добавьте записи (обычно 3-4 записи типа TXT и CNAME):
   - SPF record (TXT)
   - DKIM record (TXT)
   - DMARC record (TXT)
3. Сохраните изменения
4. Вернитесь в Resend и нажмите **"Verify"**

### 5.4 Получение API Key

1. В Resend перейдите в **"API Keys"**
2. Нажмите **"Create API Key"**
3. Введите имя: `London Clean Production`
4. Скопируйте ключ (начинается с `re_`)
5. **ВАЖНО:** Сохраните ключ в безопасном месте!

### 5.5 Добавление API Key в Vercel

1. Откройте Vercel Dashboard → Ваш проект
2. Settings → Environment Variables
3. Найдите `RESEND_API_KEY`
4. Нажмите **"Edit"**
5. Вставьте скопированный API ключ
6. Нажмите **"Save"**
7. **ВАЖНО:** Нажмите **"Redeploy"** чтобы применить изменения

---

## 🔍 Шаг 6: Настройка Google Analytics & Tag Manager

### 6.1 Google Analytics

1. Откройте **https://analytics.google.com**
2. Нажмите **"Admin"** (шестеренка внизу слева)
3. Нажмите **"Create Property"**
4. Заполните:
   - Property name: `London Clean`
   - Time zone: `United Kingdom`
   - Currency: `Pound Sterling (£)`
5. Нажмите **"Next"**
6. Выберите категорию бизнеса: `Home & Garden`
7. Нажмите **"Create"**
8. Выберите **"Web"** platform
9. Введите URL: `https://london-clean01.co.uk`
10. Скопируйте **Measurement ID** (формат: G-XXXXXXXXXX)

### 6.2 Google Tag Manager

1. Откройте **https://tagmanager.google.com**
2. Нажмите **"Create Account"**
3. Заполните:
   - Account Name: `London Clean`
   - Country: `United Kingdom`
   - Container name: `london-clean01.co.uk`
   - Target platform: **Web**
4. Нажмите **"Create"**
5. Примите Terms of Service
6. Скопируйте **Container ID** (формат: GTM-XXXXXXX)

### 6.3 Добавление в Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. Обновите переменные:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = ваш G-XXXXXXXXXX
   - `NEXT_PUBLIC_GTM_ID` = ваш GTM-XXXXXXX
3. Нажмите **"Save"**
4. **Redeploy** проект

---

## ✅ Шаг 7: Финальная Проверка

### 7.1 Проверка Сайта

1. Откройте `https://london-clean01.co.uk`
2. Проверьте:
   - ✅ Сайт загружается
   - ✅ Все страницы работают
   - ✅ Формы отправляются
   - ✅ Изображения загружаются
   - ✅ Мобильная версия работает

### 7.2 Проверка SEO

1. Откройте **Google Search Console**: https://search.google.com/search-console
2. Нажмите **"Add Property"**
3. Выберите **"URL prefix"**
4. Введите: `https://london-clean01.co.uk`
5. Нажмите **"Continue"**
6. Выберите метод верификации: **HTML tag** (Vercel автоматически)
7. Отправьте sitemap: `https://london-clean01.co.uk/sitemap.xml`

### 7.3 Тест Форм

1. Откройте сайт
2. Нажмите **"Get a Quote"**
3. Заполните форму тестовыми данными
4. Отправьте
5. Проверьте email (должно прийти письмо на `info@londonclean.co.uk`)

### 7.4 Проверка Производительности

1. Откройте **PageSpeed Insights**: https://pagespeed.web.dev
2. Введите URL: `https://london-clean01.co.uk`
3. Нажмите **"Analyze"**
4. Проверьте оценки (должны быть 90+)

---

## 🔄 Обновление Сайта После Деплоя

### Автоматический Деплой

После первого деплоя, каждый push в GitHub автоматически задеплоит сайт:

```bash
# Внесите изменения в код
# Сохраните файлы

# Добавьте изменения в Git
git add .

# Создайте коммит
git commit -m "Update: описание изменений"

# Отправьте на GitHub
git push

# Vercel автоматически задеплоит изменения!
```

### Ручной Редеплой

1. Vercel Dashboard → Ваш проект
2. Вкладка **"Deployments"**
3. Найдите последний деплой
4. Нажмите **"..."** → **"Redeploy"**

---

## 🐛 Решение Проблем

### Проблема: Build Failed (Ошибка сборки)

**Решение:**
1. Проверьте логи в Vercel (вкладка Deployments → кликните на деплой)
2. Исправьте ошибки в коде
3. Закоммитьте и запушьте исправления
4. Vercel автоматически пересоберет

### Проблема: Домен не работает

**Решение:**
1. Проверьте DNS настройки (может занять до 48 часов)
2. Используйте https://dnschecker.org для проверки
3. Убедитесь что CNAME запись правильная

### Проблема: Формы не отправляются

**Решение:**
1. Проверьте RESEND_API_KEY в Environment Variables
2. Проверьте DNS настройки для email в Resend
3. Проверьте логи в Vercel → Functions

### Проблема: Environment Variables не работают

**Решение:**
1. После добавления/изменения переменных ОБЯЗАТЕЛЬНО сделайте Redeploy
2. Vercel → Settings → Environment Variables → Save → Redeploy

---

## 📊 Мониторинг После Запуска

### 1. Vercel Analytics
- Автоматически включен
- Показывает посещаемость, производительность

### 2. Google Analytics
- Отслеживание посетителей
- Поведение пользователей
- Конверсии

### 3. Google Search Console
- Индексация страниц
- Поисковые запросы
- Ошибки сканирования

### 4. Email Мониторинг (Resend)
- Статус отправленных писем
- Bounce rate
- Delivery rate

---

## 🎉 Готово!

Ваш сайт **London Clean** успешно задеплоен и доступен по адресу:

**https://london-clean01.co.uk**

### Следующие Шаги:

1. ✅ Проверьте все страницы
2. ✅ Протестируйте формы
3. ✅ Настройте Google Analytics
4. ✅ Отправьте sitemap в Google Search Console
5. ✅ Создайте Google Business Profile
6. ✅ Добавьте сайт в социальные сети

---

## 📞 Поддержка

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Resend Docs:** https://resend.com/docs

---

**Успешного запуска! 🚀**
