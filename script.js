// ============================================
// EFFET QUI SUIT LA SOURIS (commun à toutes les pages)
// ============================================
function initMouseFollower() {
    const mouseFollower = document.querySelector('.mouse-follower');
    if (!mouseFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        mouseFollower.style.left = followerX + 'px';
        mouseFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateFollower);
    }

    animateFollower();
}

// ============================================
// GAMES DATABASE (pour jeu.html)
// ============================================
// Pour ajouter un jeu, ajoutez simplement une ligne à cet array:
// {
//   title: "Nom du jeu",
//   image: "URL de l'image",
//   link: "URL de téléchargement",
//   mode: "solo" ou "multiplayer",
//   hasModal: true,
//   modalTitle: "Titre du modal (optionnel)",
//   modalContent: "Contenu HTML du modal (optionnel)"
// }

const GAMES_DATABASE = [
    {
        title: "Forza Horizon 4",
        image: "https://gaming-cdn.com/images/products/2682/orig/forza-horizon-4-pc-xbox-one-xbox-series-x-s-microsoft-store-cover.jpg?v=1752055441",
        link: "https://www.clictune.com/mnbG",
        mode: "multiplayer"
    },
    {
        title: "Crime Scene Cleaner",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1040200/f4aec86ea2e78eadc845af2416321792fc1e18a4/capsule_616x353_alt_assets_1.jpg",
        link: "https://www.clictune.com/mnbH",
        mode: "solo"
    },
    {
        title: "PowerWash Simulator 2",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2968420/374fc7a0419c7361cda3ae7fa6fe4e383f206e5d/capsule_616x353.jpg",
        link: "https://www.clictune.com/mnbI",
        mode: "multiplayer"
    },
    {
        title: "Watch Dogs",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/243470/capsule_616x353.jpg",
        link: "https://www.clictune.com/mnbJ",
        mode: "solo"
    },
    {
        title: "Watch Dogs 2",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/447040/capsule_616x353.jpg",
        link: "#",
        mode: "solo",
        hasModal: true,
        modalId: "watchdogs2",
        modalTitle: "How to install Watch Dogs 2?",
        modalContent: `
            <ul>
                <li>If you have issues with <strong>Easy Anti-Cheat</strong>, follow these steps:</li>
            </ul>
            <ol>
                <li>Create a shortcut for Watch Dogs 2.</li>
                <li>Right-click the shortcut and go to <strong>Properties</strong>.</li>
                <li>In the <strong>Target</strong> field, add <code>-eac_launcher</code> (without quotes) at the end.</li>
            </ol>
            <div style="font-size:.98em; font-family:'Orbitron', Arial, monospace; margin-bottom:8px; color:#fff;">
                Example: <br>
                <code>"C:\watch_dogs 2\bin\WatchDogs2.exe" -eac_launcher</code>
            </div>
            <div class="modal-btns">
                <a href="https://www.clictune.com/mnbK" class="download-btn" target="_blank" rel="noopener">
                    Download your game
                </a>
            </div>
        `
    },
    {
        title: "Dying Light",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/239140/75644e31be5e0e57ac44a3e13468555fb21eb4ea/capsule_616x353.jpg",
        link: "https://www.clictune.com/mnbL",
        mode: "multiplayer"
    },
    {
        title: "Dying Light 2 Stay Human",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/bb99b9529e0585181f0c09fa6b9eff324dba0675/capsule_616x353.jpg",
        link: "https://www.clictune.com/mnbM",
        mode: "multiplayer"
    },
    {
        title: "Dying Light The Beast",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3008130/56babf2f7988a87d73e86dd434bf2a2ee2b8c624/capsule_616x353_alt_assets_0.jpg",
        link: "#",
        mode: "multiplayer",
        hasModal: true,
        modalId: "dyinglightthebeast",
        modalTitle: "How to install Dying Light The Beast?",
        modalContent: `
            <ul>
                <li>
                    Launch your game via:<br>
                    <code>Dying Light The Beast ALL DLC (v1.2.0C)\ph_ft\work\bin\x64\DyingLightGame_TheBeast_x64_rwdi.exe</code>
                </li>
            </ul>
            <div style="font-size:1em; font-family:'Orbitron', Arial, monospace; margin-top:10px; color:#fff;">
                <span role="img" aria-label="warning" style="font-size:1.3em;vertical-align:middle;">&#9888;&#65039;</span>
                Dying Light The Beast works with everyone, whether you use my version or the official version.
                <span role="img" aria-label="warning" style="font-size:1.3em;vertical-align:middle;">&#9888;&#65039;</span>
            </div>
            <div class="modal-btns" style="justify-content: flex-end;">
                <a href="https://www.clictune.com/mnbN" class="download-btn" target="_blank" rel="noopener">
                    Download your game
                </a>
            </div>
        `
    },
    {
        title: "Among Us",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg",
        link: "https://www.clictune.com/mnbO",
        mode: "multiplayer"
    },
    {
        title: "Crime Simulator",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2737070/b127c3a7a40ba1f9b4e82caa875b5185a3ee32e8/capsule_616x353.jpg",
        link: "https://www.clictune.com/mncu",
        mode: "multiplayer"
    },
    {
        title: "Detroit Become Human",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/capsule_616x353.jpg",
        link: "https://www.clictune.com/mncv",
        mode: "solo"
    },
    {
        title: "Power Wash Simulator",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1290000/0184e192ea58230dd82aa8aed8134be3ed8fc4c2/capsule_616x353.jpg",
        link: "https://www.clictune.com/mncw",
        mode: "multiplayer"
    },
    {
        title: "Road 96",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1466640/capsule_616x353.jpg",
        link: "https://www.clictune.com/mncx",
        mode: "solo"
    },

];

// Fonction pour générer les éléments de jeu
function generateGameElements() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;

    gamesGrid.innerHTML = ''; // Vider la grille

    GAMES_DATABASE.forEach((game, index) => {
        // Créer le lien du jeu
        const gameLink = document.createElement('a');
        gameLink.className = 'jeu-thumb-link';
        gameLink.href = game.link;
        gameLink.target = '_blank';
        gameLink.rel = 'noopener';
        gameLink.setAttribute('data-title', game.title);
        gameLink.setAttribute('data-mode', game.mode);
        // Staggered entrance animation (only on initial load)
        gameLink.classList.add('animating');
        gameLink.style.animationDelay = (0.4 + index * 0.08) + 's';
        gameLink.addEventListener('animationend', function () {
            gameLink.classList.remove('animating');
            gameLink.style.animationDelay = '';
        }, { once: true });

        // Créer l'image
        const img = document.createElement('img');
        img.className = 'jeu-thumb-img';
        img.src = game.image;
        img.alt = game.title;
        img.width = 616;
        img.height = 353;
        img.loading = 'lazy';

        // Créer le titre au survol
        const titleSpan = document.createElement('span');
        titleSpan.className = 'jeu-title-hover';
        titleSpan.textContent = game.title;

        // Créer le badge de mode
        const badgeWrapper = document.createElement('div');
        badgeWrapper.className = 'badge-mode-wrapper';
        const badge = document.createElement('img');
        badge.className = 'badge-mode' + (game.mode === 'solo' ? ' solo' : '');
        badge.src = game.mode === 'solo' ? 'https://i.imgur.com/AVgyUuC.png' : 'https://i.imgur.com/Yrz60le.png';
        badge.alt = game.mode;
        badge.loading = 'lazy';
        badgeWrapper.appendChild(badge);

        // Assembler le lien
        gameLink.appendChild(img);
        gameLink.appendChild(titleSpan);
        gameLink.appendChild(badgeWrapper);

        // Si le jeu a un modal, ajouter un ID et un gestionnaire
        if (game.hasModal) {
            gameLink.id = game.modalId + '-link';
            gameLink.href = '#';
            gameLink.addEventListener('click', function (e) {
                e.preventDefault();
                const modalBg = document.getElementById(game.modalId + '-modal-bg');
                if (modalBg) {
                    modalBg.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        gamesGrid.appendChild(gameLink);
    });
}

// Fonction pour générer les modales
function generateModals() {
    const container = document.body;

    GAMES_DATABASE.forEach(game => {
        if (!game.hasModal) return;

        // Vérifier si le modal existe déjà
        if (document.getElementById(game.modalId + '-modal-bg')) return;

        const modalBg = document.createElement('div');
        modalBg.id = game.modalId + '-modal-bg';
        modalBg.className = 'modal-bg';
        modalBg.style.display = 'none';

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.role = 'dialog';
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', game.modalId + '-title');

        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.id = 'modalCloseBtn-' + game.modalId;
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.textContent = '×';

        const title = document.createElement('h2');
        title.id = game.modalId + '-title';
        title.textContent = game.modalTitle;

        // Ajouter le contenu du modal
        const content = document.createElement('div');
        content.innerHTML = game.modalContent;

        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(content);
        modalBg.appendChild(modal);
        container.appendChild(modalBg);

        // Gestionnaire pour fermer le modal
        const closeModalFn = () => {
            modalBg.style.display = 'none';
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModalFn);
        modalBg.addEventListener('click', function (e) {
            if (e.target === modalBg) closeModalFn();
        });
        document.addEventListener('keydown', function (e) {
            if (modalBg.style.display === 'flex' && (e.key === 'Escape' || e.keyCode === 27)) {
                closeModalFn();
            }
        });
    });
}

// ============================================
// CODE POUR jeu.html
// ============================================
let currentFilter = 'all';

function applyFilters() {
    const query = (document.getElementById('gameSearch')?.value || '').trim().toLowerCase();
    const games = document.querySelectorAll('#gamesGrid .jeu-thumb-link');

    games.forEach(game => {
        const title = (game.getAttribute('data-title') || '').toLowerCase();
        const mode = game.getAttribute('data-mode') || '';
        const matchesSearch = title.includes(query);
        const matchesFilter = currentFilter === 'all' || mode === currentFilter;

        game.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
    });
}

function initGamePage() {
    // Générer les jeux et les modales
    generateGameElements();
    generateModals();

    // Search
    const gameSearch = document.getElementById('gameSearch');
    if (gameSearch) {
        gameSearch.addEventListener('input', applyFilters);
    }

    // Category filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            applyFilters();
        });
    });
}

// ============================================
// NOTIFICATION DISCORD SUPPORT (uniquement sur la page d'accueil)
// ============================================
function initDiscordNotification() {
    // Ne s'afficher que sur la page d'accueil
    if (!document.body.classList.contains('page-accueil')) {
        return;
    }

    const notification = document.getElementById('discordNotification');
    const closeBtn = document.getElementById('discordNotificationClose');

    if (!notification) return;

    // Vérifier si l'utilisateur a déjà fermé la notification dans cette session
    const notificationClosed = sessionStorage.getItem('discordNotificationClosed');

    if (!notificationClosed) {
        // Afficher la notification après un court délai
        setTimeout(() => {
            notification.classList.add('show');
        }, 500);
    }

    // Fermer la notification
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            sessionStorage.setItem('discordNotificationClosed', 'true');
        });
    }
}

// ============================================
// EFFET TYPEWRITER POUR LE TITRE (page d'accueil)
// ============================================
function initTypewriterEffect() {
    // Ne s'afficher que sur la page d'accueil
    if (!document.body.classList.contains('page-accueil')) {
        return;
    }

    const titleElement = document.getElementById('animatedTitle');
    if (!titleElement) return;

    const text = 'NovaPlay';
    let currentIndex = 0;
    let isDeleting = false;
    let displayText = '';

    function typeWriter() {
        if (!isDeleting && currentIndex < text.length) {
            // Écriture
            displayText = text.substring(0, currentIndex + 1);
            titleElement.textContent = displayText;
            currentIndex++;
            setTimeout(typeWriter, 150);
        } else if (isDeleting && currentIndex > 0) {
            // Effacement
            displayText = text.substring(0, currentIndex - 1);
            titleElement.textContent = displayText;
            currentIndex--;
            setTimeout(typeWriter, 100);
        } else if (!isDeleting && currentIndex === text.length) {
            // Pause avant d'effacer
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && currentIndex === 0) {
            // Pause avant de réécrire
            isDeleting = false;
            setTimeout(typeWriter, 500);
        }
    }

    // Démarrer l'animation
    typeWriter();
}

// ============================================
// INITIALISATION
// ============================================
// Mouse follower disabled
// initMouseFollower();

// Initialiser la notification Discord sur toutes les pages
initDiscordNotification();

// Initialiser l'effet typewriter sur la page d'accueil
initTypewriterEffect();

// Initialiser les fonctionnalités spécifiques à la page des jeux
if (document.body.classList.contains('page-jeux')) {
    initGamePage();
}

