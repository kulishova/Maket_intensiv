// Переход на парк автомобилей
document.getElementById('main_action').onclick = function () {
  document.getElementById('cars').scrollIntoView({ behavior: 'smooth' })
}

// Переход на форму бронирования
const buttons = document.getElementsByClassName('car-button')
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('price').scrollIntoView({ behavior: 'smooth' })
  }
}

// Заполнение формы бронирования
document.getElementById('price_action').onclick = function () {
  if (document.getElementById('name').value === '') {
    alert('Введите ваше имя')
  } else if (document.getElementById('phone').value === '') {
    alert('Введите номер телефона')
  } else if (document.getElementById('car').value === '') {
    alert('Выберите автомобиль')
  } else {
    alert('Спасибо за заявку. Мы свяжемся с вами в ближайшее время!')
  }
}

// Движение фона при скроллинге
document.addEventListener('DOMContentLoaded', function () {
  let layer = document.querySelector('.price-image')
  document.addEventListener('mousemove', (event) => {
    layer.style.transform =
      'translate3d(' +
      (event.clientX * 0.4) / 9 +
      'px,' +
      (event.clientY * 0.4) / 9 +
      'px,0px)'
  })

  const elem = document.querySelector('.main')
  document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + 0.3 * window.pageYOffset + 'px'
  })
})
