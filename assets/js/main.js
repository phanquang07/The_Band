// Buy Tickets
const btnBuys = document.querySelectorAll('.js-buy-ticket')
const modalTickets = document.querySelector('.js-modal-tickets')
const modalClose = document.querySelector('.js-modal-btn-close')
const modalContents = document.querySelector('.js-modal-contents')

function showBuyTickets() {
  modalTickets.classList.add('open')
}
function hideBuyTickets() {
  modalTickets.classList.remove('open')
}

for (const buyBtn of btnBuys) {
  buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', hideBuyTickets)
modalTickets.addEventListener('click', hideBuyTickets)
modalContents.addEventListener('click', function (e) {
  e.stopPropagation()
})

// Navbar
const navList = document.querySelector('.nav-list')
const navMobileBtn = document.querySelector('.nav-mobile-btn')
const iconBars = document.querySelector('.fa-bars')
const headerModal = document.querySelector('.header-modal')

navMobileBtn.onclick = function () {
  "use strict"
  navList.classList.toggle('active')
  iconBars.classList.toggle('fa-xmark')
  headerModal.classList.toggle('active')
}

function closeNavbar() {
  navList.classList.remove('active')
  iconBars.classList.toggle('fa-xmark')
}
headerModal.addEventListener('click', closeNavbar)

// Tự động đóng navbar khi chọn menu
const menuItems = document.querySelectorAll('.nav-link')
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i]
  menuItem.onclick = function () {
    navList.classList.toggle('active')
    iconBars.classList.toggle('fa-xmark')
  }
}