// ==========================================
// БЛОК ДАННЫХ: УПРАВЛЕНИЕ СХЕМАТИКАМИ ЗДЕСЬ
// ==========================================
const categories = {
    all: "Все",
    farms: "Фермы",
    redstone: "Логический редстоун",
    tnt: "ТНТ",
    storage: "Хранилища"
};

const schematicsData = [
    {
        id: 1,
        category: "redstone",
        title: "32 bit * 31 простой регистр(память)",
        version: "1.8 - last",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/MydMZmTh/area-render-6.png",
        downloadUrl: "https://drive.google.com/file/d/1bgXyKj1pWNcE7KZriMT1JBjPUuH4XniU/view?usp=drive_link",
        desc: "Простая 32-битная память с 31 ячейками. Есть возможность записывать данные и читать данные",
        tutorialContent: "32 рычага - что записать в память, 5 рычагов с подписью 'Запись' - выбор ячейки для записи, 5 рычагов с подписью 'Чтение' - выбор ячейки для прочтения" // Ссылка автоматически станет кнопкой
    },
    {
        id: 2,
        category: "redstone",
        title: "8-bit CCA(сумматор)",
        version: "1.8 - last",
        author: "Mattbatwings",
        imgUrl: "https://i.ibb.co/NdB66PNK/area-render-61.png",
        downloadUrl: "https://drive.google.com/file/d/1sF69hJXTG9NpIydAFOfVs8kpgFxLvS5N/view?usp=sharing",
        desc: "Двоичный сумматор, который принимает на вход 2 8-битных значения, а выдает 1 8-битное значение. Есть перенос и переполнение",
        tutorialContent: "https://www.youtube.com/watch?v=Hl1dHFOl3Zo&list=PL5LiOvrbVo8keeEWRZVaHfprU4zQTCsV4&index=4"
    },
    {
        id: 3,
        category: "redstone",
        title: "32-bit CCA(сумматор) с функцией вычитания",
        version: "1.8 - last",
        author: "Mattbatwings, Artem4ik",
        imgUrl: "https://i.ibb.co/pvZ44CFb/area-render-3.png",
        downloadUrl: "https://drive.google.com/file/d/1dQ_Y0_cWT0cvatGO66uW5tuGKes8w7qg/view?usp=sharing",
        desc: "Двоичный сумматор, который принимает на вход 2 32-битных значения, а выдает 1 32-битное значение. Можно выбирать режим(сложение или вычитание), входы и выходы удобно подключены и наименьшим расстоянием",
        tutorialContent: "2 x 31-битных значения на ввод, вывод 32-битный. Снизу рычаг. Вкл - вычитание, выкл - сложение"
    },
    {
        id: 4,
        category: "redstone",
        title: "Конвертор из binary в decimal с дисплеем(32 bit)",
        version: "1.8 - last",
        author: "Xoliks, Uni, Flyingdean, Artem4ik",
        imgUrl: "https://i.ibb.co/7JZ8DvbM/area-render-4.png",
        downloadUrl: "https://drive.google.com/file/d/1Li9H7u_A4vuD8IqlBtFFSnzF-8Y64g9Y/view?usp=sharing",
        desc: "Конвертирует 32-битное значение в десятичную систему исчисления и автоматически выводит на дисплей",
        tutorialContent: "На панели ввести 32-битное число, а конвертор сам его переведет в десятичную систему и выведет на экран"
    },
    {
        id: 5,
        category: "tnt",
        title: "Тнт компрессор на 10 динамита",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/LDcMJxSD/area-render-11.png",
        downloadUrl: "https://drive.google.com/file/d/1KKXwPnd_LwdKTRAqMGQRUhJPVR2adglN/view?usp=sharing",
        desc: "Небольшой тнт компрессор на 10 динамита. Уже есть система простого выравнивания тнт, но есть шанс, что он может застрять сверху на слизи",
        tutorialContent: "Для запуска нажмите на нотный блок помеченный зелёной шерстью сверху"
    },
    {
        id: 6,
        category: "tnt",
        title: "Тнт компрессор на 40 динамита",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/5h4vVFtf/area-render-13.png",
        downloadUrl: "https://drive.google.com/file/d/1zI330DjyTQQTRcTEq8BJjCvfvok01NXK/view?usp=sharing",
        desc: "Тнт компрессор на 40 динамита. Несколько тнт с небольшим шансом может застрять сверху в слизи",
        tutorialContent: "Для запуска нажмите на нотный блок сверху"
    },
    {
        id: 7,
        category: "tnt",
        title: "Обновленный тнт компрессор на 80 динамита",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/Cc2cDC3/area-render-14.png",
        downloadUrl: "https://drive.google.com/file/d/1BbOpiGtN2P0wyRYvDmRaZpSZRCR7KnOY/view?usp=sharing",
        desc: "Обновленная версия старого тнт компрессора, дюпает 80 тнт 8 дюперами. Есть очень маленький шанс того, что тнт может застрять в слизи",
        tutorialContent: "Для запуска нажмите на нотный блок сверху. Если нужно дюпнуть меньше 80 тнт(кратно 10), то уменьшите силу сигнала подаваемую сверху на активацию дюперов"
    },
    {
        id: 8,
        category: "tnt",
        title: "Тнт пушка с дюпом заряда",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/TBGgFNC1/area-render-9.png",
        downloadUrl: "https://drive.google.com/file/d/1WbRYXjf7a_Q0DOk5yWXZvlFyH6rZ7Krn/view?usp=sharing",
        desc: "Тнт пушка одной траектории с дюпом тнт, без lazy чанков. Дальность полета снаряда ~200 блоков. Ускорение - 10 тнт, снаряд - по 10 тнт 2 раза подряд",
        tutorialContent: "Для выстрела нажмите на нотный блок сверху по середине пушки"
    },
    {
        id: 9,
        category: "tnt",
        title: "Тнт пушка 'Saturn v1' по прямой с дюпом тнт",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/PzF9Z4DP/area-render-12.png",
        downloadUrl: "https://drive.google.com/file/d/1OUKsLxTlaa5gw-mbepBZyNmV4OokK2Pg/view?usp=sharing",
        desc: "Lazy пушка по одной траектории с дюпом тнт и настройкой дальности выстрела. 1 тнт снаряда, 10 тнт ускорителя для него минимум. 1 предмет для настройки = +- 200 блоков дальности полета снаряда",
        tutorialContent: "https://www.youtube.com/watch?v=y502Q4Y1ogI"
    },
    {
        id: 10,
        category: "tnt",
        title: "Перл пушка на зарядах ветра 'Neptun v1'",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/h5tg663/area-render.png",
        downloadUrl: "https://drive.google.com/file/d/1ibUlWfOj2j3lwOQsEVZu_nLZso6uofwg/view?usp=sharing",
        desc: "Эндер-перл пушка работающая на ускорении жемчуга с помощью взрывов большого количества зарядов ветра в одной точке. Работает на paper",
        tutorialContent: "https://youtu.be/C00MB-HKrXU?si=-ZMzQtJYudeGxD5e"
    },
    {
        id: 11,
        category: "tnt",
        title: "Реилган с дюпом тнт",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/yFsQc9w2/area-render-10.png",
        downloadUrl: "https://drive.google.com/file/d/1_KcUx2iWubsTv77zUv7taTjAQaoD65QG/view?usp=sharing",
        desc: "Мощный реилган работающий на дюпе тнт. Всего динамита используется для ускорения стрел - 260. Есть система анти деспавна стрел",
        tutorialContent: "Для зарядки стрел загрузите их в дропер снизу возле люка. После этого нажмите на рычаг возле дропера и дождитесь нужного вам количества стрел. Для запуска поднимитесь на верх дюпера и нажмите на нотный блок, который сверху помечен зелёной шерстью. Сущность находившаяся на красном стекле снизу схемы получит урон. Для увеличения дистанции до сущности проверяйте градус стрел вручную"
    },
    {
        id: 12,
        category: "tnt",
        title: "Маленькая орбитальная пушка под paper 1.0",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/MmzJDf0/area-render-7.png",
        downloadUrl: "https://drive.google.com/file/d/1NNtaEoCfBObIz4rrrZFua5ISEB1tJBJS/view?usp=sharing",
        desc: "Lazy тнт пушка, стреляющая на 90 градусов и работающая на раздатчиках с динамитом. Работает на всех ядрах. Прилагается программа для настройки пушки",
        tutorialContent: "https://www.youtube.com/watch?v=HsCm4oRpres"
    },
    {
        id: 13,
        category: "tnt",
        title: "Маленькая орбитальная пушка под paper 1.1",
        version: "1.21.4",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/HfjGXyZC/area-render-8.png",
        downloadUrl: "https://drive.google.com/file/d/11rfyVoKERPCKbcCOsrS1aYjmYfAULZRp/view?usp=sharing",
        desc: "Lazy тнт пушка, стреляющая на 90 градусов и работающая на раздатчиках с динамитом. Работает на всех ядрах. Строить нужно низко. По сравнению с прошлой моделью(88 блоков) этот механизм стал почти в 2 раза меньше(46 блоков)",
        tutorialContent: "Сначала загрузить сколько тнт нужно в payload(до 64 на paper), потом в раздатчики по сторонам. Проверьте, что рычаг выключен"
    },
    {
        id: 14,
        category: "tnt",
        title: "Реилган на 80 тнт с дюпом",
        version: "1.16 - last",
        author: "Artem4ik",
        imgUrl: "https://i.ibb.co/4RxG7MMK/area-render-9.png",
        downloadUrl: "https://drive.google.com/file/d/1NP1Mnw0GPltp4jbdIK7g6TcDi7xT2ew9/view?usp=sharing",
        desc: "Реилган с настройкой мощности выстрела(20, 40, 60, 80 тнт), точным выстрелом(одна траектория) и со снесением 2 тотемов сразу(3 лука)",
        tutorialContent: "https://www.youtube.com/watch?v=s8VFyhOb-Oo"
    },
    {
        id: 15,
        category: "tnt",
        title: "Тнт дюпер на 10 динамита с настройкой",
        version: "1.13 - last",
        author: "Jan, Artem4ik",
        imgUrl: "https://i.ibb.co/99R0G83c/area-render-10.png",
        downloadUrl: "https://drive.google.com/file/d/1HumJSa05lkJqEvXbkMdp40tymL9gLdEA/view?usp=sharing",
        desc: "Тнт дюпер с возможностью выбора количества тнт, которое нужно продублировать",
        tutorialContent: "В кафедре выберете сколько тнт нужно дюпнуть, а потом нажмите на нотный блок на противополжной стороне"
    }
];

// ==========================================
// ЛОГИКА ПРИЛОЖЕНИЯ
// ==========================================
let currentCategory = "all";
let searchQuery = "";

// Элементы интерфейса
const modal = document.getElementById("schematicModal");
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const modalImg = document.getElementById("modalImg");

// Инициализация вкладок категорий
function initTabs() {
    const tabsContainer = document.getElementById("tabsContainer");
    tabsContainer.innerHTML = "";
    
    Object.entries(categories).forEach(([key, value]) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${key === currentCategory ? 'active' : ''}`;
        btn.textContent = value;
        btn.onclick = () => switchCategory(key);
        tabsContainer.appendChild(btn);
    });
}

// Переключение категории
function switchCategory(categoryKey) {
    currentCategory = categoryKey;
    initTabs();
    renderGrid();
}

// Рендеринг карточек в сетку
function renderGrid() {
    const grid = document.getElementById("schematicsGrid");
    grid.innerHTML = "";

    // Фильтрация по категории и по поисковому запросу
    const filteredData = schematicsData.filter(item => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        
        const lowerSearch = searchQuery.toLowerCase();
        const matchesSearch = item.title.toLowerCase().includes(lowerSearch) || 
                              item.author.toLowerCase().includes(lowerSearch);
        
        return matchesCategory && matchesSearch;
    });

    // Генерация HTML для каждой карточки
    filteredData.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.title}" class="card-img" onerror="this.src='https://placehold.co'">
            <div class="card-info">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="card-author">👤 ${item.author}</span>
                    <span class="card-version">v${item.version}</span>
                </div>
            </div>
        `;
        
        card.onclick = () => openModal(item);
        grid.appendChild(card);
    });
}

// Отслеживание ввода в поисковую строку
document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGrid();
});

// Управление модальным окном
function toggleModal(isOpen) {
    if(isOpen) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    } else {
        modal.classList.remove("active");
        toggleLightbox(false); // Закрываем зум картинки, если закрывается всё окно
        document.body.style.overflow = "auto";
    }
}

// Управление полноэкранным просмотром картинки (Lightbox)
function toggleLightbox(isOpen) {
    if(isOpen) {
        lightboxImg.src = modalImg.src;
        lightbox.classList.add("active");
    } else {
        lightbox.classList.remove("active");
    }
}

// Проверка текста на ссылку
function isUrl(text) {
    const pattern = /^(https?:\/\/)/i;
    return pattern.test(text.trim());
}

// Открытие модального окна с данными карточки
function openModal(item) {
    modalImg.src = item.imgUrl;
    modalImg.onerror = function() { this.src = 'https://placehold.co'; };
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalVersion").textContent = `Версия: ${item.version}`;
    document.getElementById("modalAuthor").textContent = `Автор: ${item.author}`;
    document.getElementById("modalDesc").textContent = item.desc;
    document.getElementById("modalDownload").href = item.downloadUrl;

    const tutorialContentBox = document.getElementById("modalTutorialContent");
    const content = item.tutorialContent.trim();

    // Автоматическое определение: ссылка или текст
    if (isUrl(content)) {
        tutorialContentBox.innerHTML = `
            <p style="margin-bottom: 15px;">Для этой схематики доступен видео-гайд или внешняя инструкция:</p>
            <a href="${content}" target="_blank" class="tutorial-btn-link">▶ Смотреть видео</a>
        `;
    } else {
        tutorialContentBox.innerHTML = `<p style="white-space: pre-line;">${content}</p>`;
    }

    toggleModal(true);
}

// Обработчики кликов для интерфейса
modalImg.onclick = () => toggleLightbox(true);
lightbox.onclick = () => toggleLightbox(false);
document.getElementById("modalCloseBtn").onclick = () => toggleModal(false);

modal.onclick = (event) => {
    if (event.target === modal) toggleModal(false);
};

// Закрытие окон по клавише Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (lightbox.classList.contains("active")) {
            toggleLightbox(false);
        } else {
            toggleModal(false);
        }
    }
});

// Запуск приложения
initTabs();
renderGrid();
