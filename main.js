window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  
  // verificar se a sessão passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const SectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = SectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionBoundaries) {
    menuElement.classList.add('active')

  }
}








function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }  
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(
          `#home',
          '#home img',
          '#home .stats',
          '#services',
          '#services header', 
          '#service .card'`
          );