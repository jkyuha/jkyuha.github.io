const MusicMoreBtn = document.getElementById('MusicMoreBtn')
const MusicMore = document.getElementById('MusicMore')

function toggleMusicDetail() {
    const MusicMoreBtnText = MusicMoreBtn.innerText
    if (MusicMoreBtnText === '[Click to view]') {
        openMusicDetail()
    } else {
        closeMusicDetail()
    }
}

function openMusicDetail() {
    MusicMoreBtn.innerText = '[Click to hide]'
    MusicMore.style.display = 'flex'
}

function closeMusicDetail() {
    MusicMoreBtn.innerText = '[Click to view]'
    MusicMore.style.display = 'none'
}

MusicMoreBtn.addEventListener('click', toggleMusicDetail)



const PieMoreBtn = document.getElementById('PieMoreBtn')
const PieMore = document.getElementById('PieMore')

function togglePieDetail() {
    const PieMoreBtnText = PieMoreBtn.innerText
    if (PieMoreBtnText === '[Click to view]') {
        openPieDetail()
    } else {
        closePieDetail()
    }
}

function openPieDetail() {
    PieMoreBtn.innerText = '[Click to hide]'
    PieMore.style.display = 'flex'
}

function closePieDetail() {
    PieMoreBtn.innerText = '[Click to view]'
    PieMore.style.display = 'none'
}

PieMoreBtn.addEventListener('click', togglePieDetail)



const khEmail = document.getElementById('jkh-email')

function copyEmail() {
    navigator.clipboard.writeText('jkyuha@gmail.com');
    const liveToast = document.getElementById('liveToast')
    let toast = new bootstrap.Toast(liveToast)
    toast.show()
}

khEmail.addEventListener('click', copyEmail)



