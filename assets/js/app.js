// const narebotMoreBtn = document.getElementById('narebot-more-btn')
// const narebotDetail = document.getElementById('narebot-detail')

// function toggleNarebotDetail(){
//     const narebotMoreBtnText = narebotMoreBtn.innerText
//     if(narebotMoreBtnText === 'more'){
//         openNarebotDetail()   
//     }else{
//         closeNarebotDetail()
//     }
// }

// function openNarebotDetail(){
//     narebotMoreBtn.innerText = 'less'
//     narebotDetail.style.display = ''
// }

// function closeNarebotDetail(){
//     narebotMoreBtn.innerText = 'more'
//     narebotDetail.style.display = 'none'
// }

// narebotMoreBtn.addEventListener('click', toggleNarebotDetail)




const khEmail = document.getElementById('jkh-email')

function copyEmail(){
    navigator.clipboard.writeText('jkyuha@gmail.com');
    const liveToast = document.getElementById('liveToast')
    let toast = new bootstrap.Toast(liveToast)
    toast.show()
}

khEmail.addEventListener('click', copyEmail)
