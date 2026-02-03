# 📧 Настройка Resend для Email

## ✅ У вас уже есть API ключ: `re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ`

---

## 🔧 Шаг 1: Создайте .env.local файл

В корне проекта создайте файл `.env.local` (если его нет):

```bash
# В терминале выполните:
# Windows PowerShell:
Copy-Item env.template .env.local

# Или создайте вручную файл .env.local
```

---

## 📝 Шаг 2: Добавьте переменные окружения

Откройте файл `.env.local` и добавьте:

```env
# Site Configuration
SITE_URL=https://london-clean01.co.uk

# Google Analytics (пока оставьте пустым, добавите позже)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Google Tag Manager (пока оставьте пустым, добавите позже)
NEXT_PUBLIC_GTM_ID=

# Contact Information
BUSINESS_PHONE=+447438217078
BUSINESS_EMAIL=info@londonclean.co.uk
BUSINESS_ADDRESS="Raymor Court, 91 Upper Clapton Rd, London E5 9BX"

# ⭐ RESEND API KEY - ВАШ КЛЮЧ
RESEND_API_KEY=re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ
CONTACT_EMAIL=info@londonclean.co.uk
```

---

## 🚀 Шаг 3: Установите Resend пакет

```bash
npm install resend
```

---

## ✅ Готово! Формы уже настроены

Все формы на сайте уже интегрированы с Resend:

### 📍 Где отправляются сообщения:

1. **Quote Request Form** (`/contact` страница)
   - Файл: `src/components/forms/QuoteRequestForm.tsx`
   - API: `/api/contact`

2. **Quote Modal Form** (всплывающее окно)
   - Файл: `src/components/forms/QuoteRequestFormModal.tsx`
   - API: `/api/contact`

3. **Все кнопки "Get a Quote"** открывают модальное окно с формой

### 📧 Куда приходят письма:

- **Email получателя:** `info@londonclean.co.uk` (из CONTACT_EMAIL)
- **Email отправителя:** `London Clean <noreply@londonclean.co.uk>`

---

## 🔍 Как работает отправка:

1. Пользователь заполняет форму
2. Форма отправляет данные на `/api/contact`
3. API route (`src/app/api/contact/route.ts`) использует Resend
4. Resend отправляет email на `info@londonclean.co.uk`
5. Вы получаете уведомление с данными клиента

---

## 🧪 Тестирование

### Локально (на компьютере):

```bash
# 1. Убедитесь что .env.local создан и заполнен
# 2. Запустите dev сервер
npm run dev

# 3. Откройте http://localhost:3000
# 4. Нажмите "Get a Quote"
# 5. Заполните форму тестовыми данными
# 6. Отправьте
# 7. Проверьте email: info@londonclean.co.uk
```

### На Vercel (после деплоя):

1. Vercel Dashboard → Ваш проект
2. Settings → Environment Variables
3. Добавьте переменную:
   - Name: `RESEND_API_KEY`
   - Value: `re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ`
4. Добавьте переменную:
   - Name: `CONTACT_EMAIL`
   - Value: `info@londonclean.co.uk`
5. Нажмите **Save**
6. **ВАЖНО:** Нажмите **Redeploy** чтобы применить изменения

---

## 📊 Мониторинг Email

### В Resend Dashboard:

1. Откройте https://resend.com/emails
2. Вы увидите все отправленные письма:
   - ✅ Delivered - доставлено
   - ⏳ Queued - в очереди
   - ❌ Failed - ошибка

### Логи в Vercel:

1. Vercel Dashboard → Ваш проект
2. Вкладка **Functions**
3. Найдите `/api/contact`
4. Смотрите логи отправки

---

## ⚠️ Важные Замечания

### 1. Email Домен

Сейчас используется: `noreply@londonclean.co.uk`

**Для продакшена нужно:**
1. Зайти в Resend → Domains
2. Добавить домен `londonclean.co.uk` (или `asteradigital.kz`)
3. Настроить DNS записи (SPF, DKIM, DMARC)
4. Верифицировать домен

**Пока домен не верифицирован:**
- Письма будут отправляться с `onboarding@resend.dev`
- Это нормально для тестирования
- Для продакшена обязательно верифицируйте домен!

### 2. Лимиты Resend

**Free Plan:**
- 100 emails/день
- 3,000 emails/месяц

Если нужно больше - апгрейдите план на Resend.

### 3. Безопасность API Key

**НИКОГДА НЕ КОММИТЬТЕ .env.local В GIT!**

Файл `.env.local` уже добавлен в `.gitignore` - это правильно.

---

## 🐛 Решение Проблем

### Проблема: "Email not configured"

**Решение:**
1. Проверьте что `.env.local` создан
2. Проверьте что `RESEND_API_KEY` правильный
3. Перезапустите dev сервер: `npm run dev`

### Проблема: "Failed to send email"

**Решение:**
1. Проверьте Resend Dashboard → Logs
2. Убедитесь что API key активен
3. Проверьте что домен верифицирован (для продакшена)

### Проблема: Письма не приходят

**Решение:**
1. Проверьте папку Spam
2. Проверьте что `CONTACT_EMAIL` правильный
3. Проверьте Resend Dashboard - письмо отправлено?
4. Если домен не верифицирован, письма идут с `onboarding@resend.dev`

---

## ✅ Чеклист Готовности

- [x] Resend аккаунт создан
- [x] API ключ получен: `re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ`
- [ ] `.env.local` файл создан
- [ ] `RESEND_API_KEY` добавлен в `.env.local`
- [ ] `npm install resend` выполнен
- [ ] Тестовое письмо отправлено локально
- [ ] Environment Variables добавлены в Vercel
- [ ] Redeploy выполнен на Vercel
- [ ] Тестовое письмо отправлено с продакшен сайта

---

## 📞 Поддержка

- **Resend Docs:** https://resend.com/docs
- **Resend Status:** https://status.resend.com

---

**Готово! Email интеграция полностью настроена! 📧**
