/* ============================================
   ALBOMMONET.RU — общий скрипт
   ============================================ */

(function () {
  'use strict';

  // ---------- 1. Текущая дата ----------
  function renderDate() {
    const el = document.getElementById('current-date');
    if (!el) return;

    const now = new Date();

    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
                  'Четверг', 'Пятница', 'Суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    el.innerHTML =
      '<div class="date-day-name">' + dayName + '</div>' +
      '<div class="date-value">' + day + ' ' + month + ' ' + year + '</div>';
  }

  // ---------- 2. Мотиватор дня ----------
  // Формула: берём день года как индекс, чтобы каждый день менялся
  const MOTIVATORS = [
    'Работай усердно — продавай легко! 💪',
    'Каждый клиент — это история успеха. 📈',
    'Сегодня лучший день, чтобы закрыть сделку. 🎯',
    'Твой альбом ждёт нового владельца. 📦',
    'Пока другие спят — ты продаёшь. ☕',
    'Один лист — одна монета. Один клиент — одна победа. 🏆',
    'Внимание к деталям — вот что отличает профи. 🔍',
    'Улыбка клиенту = повторная продажа. 😊',
    'Утро вечера мудренее, но продажа сегодня — лучше! 🌅',
    'Не бывает плохих дней — бывают плохие отговорки. 🚀',
    'Твоя работа — чья-то мечта. Не забывай об этом. 🌟',
    'Сделай чуть больше, чем от тебя ждут. ✨',
    'Продажи — это искусство слышать, а не говорить. 👂',
    'Ошибся? Отлично — значит, пробуешь. 🔄',
    'Стабильность — это результат каждого дня. 📅',
    'Никогда не сдавайся — впереди новый заказ. 🎁',
    'Ты справишься, даже если кажется, что нет. 💙',
    'Сегодня лучше, чем вчера — это и есть прогресс. 📊',
    'Мечтай масштабно, действуй локально. 🌍',
    'Хорошее настроение — половина продажи. 🌞'
  ];

  function renderMotivator() {
    const el = document.getElementById('motivator');
    if (!el) return;

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    const idx = dayOfYear % MOTIVATORS.length;

    el.textContent = MOTIVATORS[idx];
  }

  // ---------- 3. Мобильное меню ----------
  function initBurger() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    // закрытие меню при клике по ссылке
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // ---------- 4. Активный пункт меню ----------
  function markActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      const href = link.getAttribute('href') || '';
      // берём последний сегмент пути
      const isActive =
        (path.endsWith(href.replace('./', '').replace('../', '')) && href !== '#') ||
        (href !== '#' && path.includes(href.split('/').pop().replace('.html', '')));

      if (isActive) link.classList.add('active');
    });
  }

  // ---------- Инициализация ----------
  document.addEventListener('DOMContentLoaded', function () {
    renderDate();
    renderMotivator();
    initBurger();
    markActiveNav();
  });

})();