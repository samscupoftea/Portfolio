const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars'); // Corrected selector
    const mobileNav = document.querySelector('.mobile-nav');

  //status of button 
    let isMobileNavOpen = false;


    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';

        } else {
      mobileNav.style.display = 'none'; // Corrected property assignment
      document.body.style.overflowY = 'auto';
}});
  };
   
  mobileNav();
  