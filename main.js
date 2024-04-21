let labSwitchers = document.querySelectorAll('.lab-switcher');
labSwitchers[0].classList.add('active');

let contentSwitchers = document.querySelectorAll('.report-content');
contentSwitchers[0].classList.add('active');

let pointSwitchElements = contentSwitchers[0].querySelectorAll('.point-switch');
pointSwitchElements[0].classList.add('active');

let contentElements = contentSwitchers[0].querySelectorAll('.pointer-content');
contentElements[0].classList.add('active');

pointSwitcher();

labSwitchers.forEach((labItem, index) => {
    labItem.addEventListener('click', e => {
      document.querySelector('.lab-switcher.active').classList.remove('active');
      document.querySelector('.report-content.active').classList.remove('active');
      document.querySelector('.point-switch.active').classList.remove('active');
      document.querySelector('.pointer-content.active').classList.remove('active');

      e.target.classList.add('active');
      
      contentSwitchers[index].classList.add('active');

      pointSwitchElements = contentSwitchers[index].querySelectorAll('.point-switch');
      pointSwitchElements[0].classList.add('active');
      
      contentElements = contentSwitchers[index].querySelectorAll('.pointer-content');
      contentElements[0].classList.add('active');

      pointSwitcher();
    });
});

function pointSwitcher() {
    pointSwitchElements.forEach((pointItem, index) => {
        pointItem.addEventListener('click', e => {
          document.querySelector('.point-switch.active').classList.remove('active');
          document.querySelector('.pointer-content.active').classList.remove('active');
    
          e.target.classList.add('active');
          contentElements[index].classList.add('active');
        });
    });
}
