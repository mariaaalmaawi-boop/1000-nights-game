const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
let score = 0;
let lives = 3;

// ضبط موقع البداية
player.style.top = '180px';
player.style.left = '280px';

// تحريك اللاعب باستخدام الأسهم
document.addEventListener('keydown', (e) => {
  const step = 10;
  let top = parseInt(player.style.top);
  let left = parseInt(player.style.left);

  if (e.key === 'ArrowUp') player.style.top = Math.max(0, top - step) + 'px';
  if (e.key === 'ArrowDown') player.style.top = Math.min(360, top + step) + 'px';
  if (e.key === 'ArrowLeft') player.style.left = Math.max(0, left - step) + 'px';
  if (e.key === 'ArrowRight') player.style.left = Math.min(560, left + step) + 'px';

  checkCollision();
});

// إضافة كنز عشوائي
function addTreasure() {
  const treasure = document.createElement('div');
  treasure.classList.add('treasure');
  treasure.style.top = Math.floor(Math.random() * 370) + 'px';
  treasure.style.left = Math.floor(Math.random() * 570) + 'px';
  gameArea.appendChild(treasure);
}
addTreasure();

// فحص التصادم مع الكنوز
function checkCollision() {
  const treasures = document.querySelectorAll('.treasure');
  treasures.forEach(t => {
    const tRect = t.getBoundingClientRect();
    const pRect = player.getBoundingClientRect();

    if (!(pRect.right < tRect.left || pRect.left > tRect.right ||
          pRect.bottom < tRect.top || pRect.top > tRect.bottom)) {
      score += 10;
      t.remove();
      addTreasure();
      updateScore();
    }
  });
}

function updateScore() {
  document.getElementById('scoreBoard').textContent = `نقاطك: ${score} | حيواتك: ${lives}`;
}
