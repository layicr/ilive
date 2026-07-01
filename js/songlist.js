/**
 * 歌单功能模块
 *
 * @module songlist
 * @description 处理歌单模态框显示，展示演唱会歌曲列表
 * @requires language.js（currentData变量）
 *
 * 主要功能：
 * - openSonglistModal：打开歌单模态框
 * - closeSonglistModalFunc：关闭歌单模态框
 *
 * DOM元素：
 * - songlistModal：歌单模态框容器
 * - songlistContainer：歌单列表容器
 * - songlistModalTitle：歌单标题（艺人 - 演唱会名称）
 * - songlistModalSubtitle：歌单副标题（歌曲总数）
 * - closeSonglistModal：关闭按钮
 */

// ==================== DOM 元素引用 ====================
const songlistModal = document.getElementById('songlistModal');
const songlistContainer = document.getElementById('songlistContainer');
const songlistModalTitle = document.getElementById('songlistModalTitle');
const songlistModalSubtitle = document.getElementById('songlistModalSubtitle');
const closeSonglistModal = document.getElementById('closeSonglistModal');

// 打开歌单模态框
function openSonglistModal(songlist, artist, concertName) {
    if (!songlist || songlist.length === 0) return;

    songlistModalTitle.textContent = artist + ' - ' + concertName;
    songlistModalSubtitle.textContent = currentData.songlist.totalSongs.replace('{count}', songlist.length);

    songlistContainer.innerHTML = '';

    if (songlist[0] && typeof songlist[0] === 'object' && songlist[0].section) {
        // 分组歌单
        songlist.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'songlist-section';

            const sectionTitle = document.createElement('h4');
            sectionTitle.className = 'songlist-section-title';
            sectionTitle.textContent = section.section;
            sectionDiv.appendChild(sectionTitle);

            const sectionList = document.createElement('ol');
            sectionList.className = 'songlist-list';
            section.songs.forEach(song => {
                sectionList.appendChild(createSongItem(song));
            });
            sectionDiv.appendChild(sectionList);

            songlistContainer.appendChild(sectionDiv);
        });
    } else {
        // 普通歌单
        const list = document.createElement('ol');
        list.className = 'songlist-list';
        songlist.forEach(song => {
            list.appendChild(createSongItem(song));
        });
        songlistContainer.appendChild(list);
    }

    songlistModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 创建单个歌曲项 li
// song 可为字符串（无链接）或 { name, link } 对象（有链接，显示播放按钮）
function createSongItem(song) {
    const li = document.createElement('li');
    li.className = 'songlist-item';

    const isObj = typeof song === 'object' && song !== null;
    const name = isObj ? song.name : song;
    const link = isObj ? song.link : null;

    const nameSpan = document.createElement('span');
    nameSpan.className = 'songlist-item-name';
    nameSpan.textContent = name;
    li.appendChild(nameSpan);

    if (link) {
        const playBtn = document.createElement('a');
        playBtn.className = 'songlist-play-btn';
        playBtn.href = link;
        playBtn.target = '_blank';
        playBtn.rel = 'noopener noreferrer';
        playBtn.setAttribute('aria-label', '播放: ' + name);
        const icon = document.createElement('i');
        icon.className = 'fas fa-play';
        playBtn.appendChild(icon);
        li.appendChild(playBtn);
        li.classList.add('has-link');
    }

    return li;
}

// 关闭歌单模态框
function closeSonglistModalFunc() {
    songlistModal.classList.remove('show');
    songlistContainer.innerHTML = '';
    document.body.style.overflow = '';
}

// 事件绑定
closeSonglistModal.addEventListener('click', closeSonglistModalFunc);
songlistModal.addEventListener('click', e => {
    if (e.target === songlistModal || e.target.classList.contains('songlist-modal-content')) {
        closeSonglistModalFunc();
    }
});

// ESC键关闭歌单模态框
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && songlistModal.classList.contains('show')) {
        closeSonglistModalFunc();
    }
});