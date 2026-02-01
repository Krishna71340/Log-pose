(function() {
    const SECRET_CODE = 'meatmeatmeat';
    const VIDEO_SRC = 'images/gear5.mp4';
    const LUFFY_IMG = 'images/luffy-jump.png';

    let pressedKeys = [];
    let gear5Video = null;

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        
        if (localStorage.getItem('gear5') === 'active') {
            enableVisuals();
            createVideoBackground(true);
            summonLuffy();
            createExitButton();
        }
    });

    window.addEventListener('keyup', (e) => {
        pressedKeys.push(e.key.toLowerCase());
        pressedKeys.splice(-SECRET_CODE.length - 1, pressedKeys.length - SECRET_CODE.length);

        if (pressedKeys.join('').includes(SECRET_CODE)) {
            activateGear5();
            pressedKeys.length = 0;
        }
    });

    window.addEventListener('beforeunload', () => {
        if (gear5Video && !gear5Video.paused) {
            localStorage.setItem('gear5_timestamp', gear5Video.currentTime);
        }
    });

    function activateGear5() {
        localStorage.setItem('gear5', 'active');
        localStorage.setItem('gear5_timestamp', 0);

        enableVisuals();
        createVideoBackground(false);
        summonLuffy();
        showJoyBoyPopup();
        createExitButton();

        document.body.style.animation = 'flashWhite 0.5s ease-out both';
        setTimeout(() => { document.body.style.animation = ''; }, 500);
    }

    function disableGear5() {
        localStorage.removeItem('gear5');
        localStorage.removeItem('gear5_timestamp');
        document.body.classList.remove('gear5-active');

        const vid = document.getElementById('gear5-bg-video');
        if(vid) vid.remove();
        
        const btn = document.getElementById('gear5-exit-btn');
        if(btn) btn.remove();

        alert("Gear 5 Deactivated.");
    }

    function enableVisuals() {
        document.body.classList.add('gear5-active');
    }

    function createVideoBackground(restoreTime) {
        if (document.getElementById('gear5-bg-video')) return;

        const video = document.createElement('video');
        video.id = 'gear5-bg-video';
        video.src = VIDEO_SRC;
        video.autoplay = true;
        video.loop = true;
        video.muted = false;
        video.playsInline = true;
        
        if (restoreTime) {
            const savedTime = parseFloat(localStorage.getItem('gear5_timestamp') || 0);
            video.currentTime = savedTime;
        }

        document.body.appendChild(video);
        gear5Video = video;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                video.muted = true;
                video.play();
                document.body.addEventListener('click', () => {
                    video.muted = false;
                }, { once: true });
            });
        }
    }

    function createExitButton() {
        if(document.getElementById('gear5-exit-btn')) return;
        const btn = document.createElement('button');
        btn.id = 'gear5-exit-btn';
        btn.innerHTML = '❌ OFF';
        btn.onclick = disableGear5;
        document.body.appendChild(btn);
    }

    function showJoyBoyPopup() {
        const popup = document.createElement('div');
        popup.className = 'joyboy-popup';
        popup.innerHTML = `
            <h1 class="joyboy-text">JOY BOY</h1>
            <h2 class="joyboy-sub">HAS RETURNED</h2>
        `;
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.classList.add('fade-out');
            setTimeout(() => popup.remove(), 1000);
        }, 3000);
    }

    function summonLuffy() {
        const luffy = document.createElement('img');
        luffy.src = LUFFY_IMG;
        luffy.className = 'gear5-luffy-bouncer';
        document.body.appendChild(luffy);
        setTimeout(() => luffy.remove(), 4000);
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            body.gear5-active {
                background: black !important;
                color: white !important;
            }

            #gear5-bg-video {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                object-fit: cover;
                z-index: -1;
                opacity: 0.6;
            }

            body.gear5-active .overlay,
            body.gear5-active nav,
            body.gear5-active .card,
            body.gear5-active .ship,
            body.gear5-active .member,
            body.gear5-active .quiz-box,
            body.gear5-active .author-box {
                background: rgba(0, 0, 0, 0.7) !important;
                color: white !important;
                border: 2px solid #8E44AD !important;
                box-shadow: 0 0 15px #8E44AD !important;
            }

            body.gear5-active h1, body.gear5-active h2 { color: #fff !important; text-shadow: 0 0 10px #8E44AD; }
            body.gear5-active p, body.gear5-active a { color: #ddd !important; }

            #gear5-exit-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #D32F2F;
                color: white;
                border: 2px solid white;
                padding: 10px 20px;
                font-weight: bold;
                cursor: pointer;
                z-index: 2147483647;
                border-radius: 50px;
                font-family: sans-serif;
            }

            .gear5-luffy-bouncer {
                position: fixed;
                bottom: 0;
                left: -300px;
                width: 400px; 
                z-index: 2147483646;
                pointer-events: none;
                animation: 
                    moveRight 4s linear forwards,
                    bounceHigh 0.6s ease-in-out infinite alternate,
                    spinSlight 0.6s ease-in-out infinite alternate;
                filter: drop-shadow(0 0 20px white);
            }

            .joyboy-popup {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 2147483645;
                animation: flashWhite 0.2s;
            }
            .joyboy-text { font-size: 8rem; font-weight: 900; color: white !important; text-shadow: 0 0 20px #8E44AD; margin: 0; animation: heartbeat 0.8s infinite; }
            .joyboy-sub { font-size: 3rem; color: #8E44AD !important; letter-spacing: 10px; animation: slideUp 1s ease-out; }
            .joyboy-popup.fade-out { opacity: 0; transition: opacity 1s; }

            @keyframes flashWhite { from { background: #fff; opacity: 0; } to { background: #000; opacity: 1; } }
            @keyframes heartbeat { 0% { transform: scale(1); } 15% { transform: scale(1.15); } 30% { transform: scale(1); } 45% { transform: scale(1.15); } 60% { transform: scale(1); } }
            @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            @keyframes moveRight { 0% { left: -300px; } 100% { left: 120vw; } }
            @keyframes bounceHigh { 0% { bottom: 5%; } 100% { bottom: 85%; } }
            @keyframes spinSlight { 0% { transform: rotate(-15deg); } 100% { transform: rotate(15deg); } }
        `;
        document.head.appendChild(style);
    }
})();