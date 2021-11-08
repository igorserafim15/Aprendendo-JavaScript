//Animation Tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo') 

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', function() {
        activeTab(index)
      })
    })
  }
}
initTabNav()

//Animation Accordion
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  accordionList[0].classList.add('active')
  accordionList[0].nextElementSibling.classList.add('active')

  function activeAccordion() {
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('active')
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  })
}
initAccordion()

//Animation Scroll Suave
function initScroll() {
  const insideLinks = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  insideLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScroll()


//Animation Scroll Section
function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if(sections.length) {
    const halfScreen = window.innerHeight * 0.6

    function animationScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - halfScreen) < 0
        if(isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    } 
    animationScroll()

    window.addEventListener('scroll', animationScroll)
  }
}
initAnimationScroll()