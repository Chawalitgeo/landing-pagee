// โหลด YouTube IFrame Player API
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'R8gGUhfsEo8', // เปลี่ยนเป็น ID วิดีโอที่คุณต้องการ
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': 'R8gGUhfsEo8', // ต้องใส่ ID ซ้ำตรงนี้เพื่อให้ Loop ทำงาน
            'fs': 0,
            'cc_load_policy': 0,
            'iv_load_policy': 3,
            'autohide': 0,
            'mute': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

// เพิ่มลูกเล่น Smooth Scroll เมื่อคลิก Link ใน Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});