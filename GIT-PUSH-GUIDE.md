# 🚀 Git Push - Финальная Подготовка

## ✅ Что уже сделано:

1. ✅ Все URL обновлены на `london-clean01.co.uk`
2. ✅ Resend API интегрирован во все формы
3. ✅ Добавлена полная валидация форм (имя, телефон, email, сервис)
4. ✅ SEO полностью настроено (schemas, metadata, sitemap, robots)
5. ✅ Контактные данные правильные везде
6. ✅ Документация создана (3 подробных руководства)

---

## 📋 Перед Push - Финальный Чеклист

### 1. Создайте .env.local файл

```bash
# Скопируйте шаблон
cp env.template .env.local
```

Откройте `.env.local` и добавьте:

```env
SITE_URL=https://london-clean01.co.uk
RESEND_API_KEY=re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ
CONTACT_EMAIL=info@londonclean.co.uk
BUSINESS_PHONE=+447438217078
BUSINESS_EMAIL=info@londonclean.co.uk
BUSINESS_ADDRESS="Raymor Court, 91 Upper Clapton Rd, London E5 9BX"
```

### 2. Установите Resend пакет

```bash
npm install resend
```

### 3. Проверьте что проект собирается

```bash
npm run build
```

**Если есть ошибки - исправьте их перед push!**

### 4. Проверьте .gitignore

Убедитесь что `.env.local` в `.gitignore`:

```bash
# Проверьте содержимое .gitignore
cat .gitignore | grep ".env.local"
```

Должно быть:
```
.env*.local
```

---

## 🔄 Git Push - Пошаговая Инструкция

### Вариант 1: Первый Push (если репозиторий еще не создан)

```bash
# 1. Инициализируйте Git (если еще не сделано)
git init

# 2. Добавьте все файлы
git add .

# 3. Проверьте что .env.local НЕ добавлен
git status
# Не должно быть .env.local в списке!

# 4. Создайте первый коммит
git commit -m "Initial commit: London Clean website ready for deployment

- Complete Next.js 16 website with TypeScript
- SEO optimized (LocalBusiness schema, metadata, sitemap)
- Resend email integration with form validation
- Responsive design with Framer Motion animations
- All URLs updated to london-clean01.co.uk
- Ready for Vercel deployment"

# 5. Создайте репозиторий на GitHub
# Откройте https://github.com/new
# Название: londonclean
# Private repository
# НЕ добавляйте README, .gitignore, license

# 6. Подключите remote (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/londonclean.git

# 7. Переименуйте ветку в main
git branch -M main

# 8. Запушьте код
git push -u origin main
```

### Вариант 2: Обновление существующего репозитория

```bash
# 1. Проверьте статус
git status

# 2. Добавьте изменения
git add .

# 3. Проверьте что добавляется
git status
# .env.local НЕ должен быть в списке!

# 4. Создайте коммит
git commit -m "Update: Resend integration and form validation

- Added Resend email integration to all forms
- Implemented comprehensive form validation
- Updated all URLs to london-clean01.co.uk
- Added RESEND-SETUP.md documentation
- Updated README.md with complete setup guide"

# 5. Запушьте
git push origin main
```

---

## 🔍 Проверка После Push

### 1. Проверьте GitHub

1. Откройте ваш репозиторий на GitHub
2. Убедитесь что все файлы загружены
3. **ВАЖНО:** Проверьте что `.env.local` НЕТ в репозитории!

### 2. Проверьте что не попало в Git

Эти файлы НЕ должны быть в репозитории:
- ❌ `.env.local`
- ❌ `node_modules/`
- ❌ `.next/`
- ❌ `.DS_Store`

---

## 📧 Настройка Email После Push

### Локально (для тестирования):

1. Создайте `.env.local` (если еще не создали)
2. Добавьте `RESEND_API_KEY=re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ`
3. Запустите: `npm run dev`
4. Протестируйте форму

### На Vercel (после деплоя):

1. Vercel Dashboard → Settings → Environment Variables
2. Добавьте:
   - `RESEND_API_KEY` = `re_86WD7jnk_JsDg9bDhxAVfBdpTL7zZkBjQ`
   - `CONTACT_EMAIL` = `info@londonclean.co.uk`
3. **Redeploy** проект

---

## 🚀 Следующие Шаги После Push

1. ✅ **Деплой на Vercel**
   - Следуйте инструкции: `VERCEL-DEPLOYMENT-GUIDE.md`

2. ✅ **Настройте Email**
   - Следуйте инструкции: `RESEND-SETUP.md`

3. ✅ **Проверьте чеклист**
   - Откройте: `PRE-DEPLOYMENT-CHECKLIST.md`

4. ✅ **Протестируйте сайт**
   - Откройте все страницы
   - Отправьте тестовую форму
   - Проверьте мобильную версию

---

## 🐛 Troubleshooting

### Проблема: .env.local попал в Git

**Решение:**
```bash
# Удалите из Git (но оставьте локально)
git rm --cached .env.local

# Закоммитьте удаление
git commit -m "Remove .env.local from repository"

# Запушьте
git push origin main

# ВАЖНО: Смените API ключ на Resend!
# Старый ключ скомпрометирован
```

### Проблема: Git push отклонен

**Решение:**
```bash
# Сначала получите изменения
git pull origin main --rebase

# Затем запушьте
git push origin main
```

### Проблема: Merge конфликты

**Решение:**
```bash
# Посмотрите конфликтующие файлы
git status

# Откройте файлы и разрешите конфликты
# Удалите маркеры: <<<<<<<, =======, >>>>>>>

# Добавьте разрешенные файлы
git add .

# Завершите rebase
git rebase --continue

# Запушьте
git push origin main
```

---

## ✅ Готово к Push!

Выполните команды из **Варианта 1** или **Варианта 2** выше.

После успешного push переходите к деплою на Vercel! 🚀

---

**Последнее обновление:** 3 февраля 2026
