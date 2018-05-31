import css from './sass/style.scss';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Pace from 'pace-js';

/* 
 * Pace preloader
 */

Pace.start();
Pace.on('done', function() {   

    (function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('remove')) {
          return;
        }
        Object.defineProperty(item, 'remove', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function remove() {
            this.parentNode.removeChild(this);
          }
        });
      });
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); 


    document.getElementById('cover').remove();
    
    setTimeout(function() {
        document.body.removeAttribute('style');
        
        document.getElementsByClassName('pace')[0].remove();
        document.getElementsByClassName('js-nav')[0].removeAttribute('style');
        document.getElementsByClassName('js-bbmri')[0].removeAttribute('style');
        document.getElementsByClassName('js-top')[0].removeAttribute('style');
        
        if (document.getElementsByClassName('c-hero')[0]) {
            document.getElementsByClassName('c-hero')[0].classList.add('is-anim');
        }        
    }, 500);

    
    // Start top anim

   
   
});


require('./js/framework.js');
require('./js/carousels.js');
