/*
  ================= SHOW MENU =================
  This section controls the opening and closing of the navigation menu
  on mobile devices using the 'show-menu' class.
*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show: Check if toggle button exists and add 'show-menu' on click */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden: Check if close button exists and remove 'show-menu' on click */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*
  ================= REMOVE MENU MOBILE =================
  This section ensures the menu closes automatically after a link is clicked.
*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

// Add click listener to all navigation links
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'), // تم تصحيح getElementById
      contactMessage = document.getElementById('contact-message') // تم تصحيح getElementById

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID, templateID, #formID, publicKey
    emailjs.sendForm('service_4r4v6yj', 'template_rri6qwq', '#contact-form', 'zLMcMsTYXPCmt53X5') // تم تصحيح #form إلى #contact-form
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            
            // Wait 5 seconds, then clear the message and the form
            setTimeout(() => {
                contactForm.reset() // <-- تم وضع أمر المسح هنا
                contactMessage.textContent = '' // Clear message text
            }, 5000)
			
        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error)❌'
        })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 100,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true  // لو عايز الأنيميشن يتكرر كل ما تعمل scroll
});


sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', { origin: 'bottom' });
sr.reveal('.about__data, .skills__data', { origin: 'left' });
sr.reveal('.about__image, .skills__content', { origin: 'right' });
sr.reveal('.services__card, .projects', { interval: 100 });