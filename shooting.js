function stars(){
    const star = document.createElement('div');
    star.className = 'falling-heart'; // SỬA tên class ở đây nè!
    document.body.appendChild(star);
    star.style.left = Math.random() * innerWidth + 'px';

    const size = Math.random() * 12;
    const duration = Math.random() * 3;

    star.style.fontSize = 12 + size + 'px';
    star.style.animationDuration = 2 + duration + 's';

    setTimeout(() => document.body.removeChild(star), 5000);
}
setInterval(stars, 100);
