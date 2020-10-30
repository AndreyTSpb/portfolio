document.addEventListener('DOMContentLoaded', function() {
    /**
     * Раскрытие меню при нажатии на гамбургер
     */
    let hamburger = document.querySelector('.hamburger');
    if(hamburger !== null){
        /**
         * Навешиваем слушателя на гамбургер
         */
        hamburger.addEventListener('click', ()=>{
            let menu = document.querySelector('.menu');
            if(menu !== null){
                let block_menu = menu.querySelector('.menu__block');
                /**
                 * Провверям вдруг не убрался клас плавного сокрытия меню
                 * если он есть то убираем его
                 */
                if(block_menu.classList.contains('menu__block-hide')){
                    block_menu.classList.remove('menu__block-hide');
                }
                /**
                 * делаем блок видимым,
                 * добавляем ему плавное появление через css анимацию
                 * и скрываем гамбургер пока открыто меню
                 */
                menu.style.display = 'block';
                hamburger.style.display = 'none';
                block_menu.classList.add('menu__block-show');

                let close = menu.querySelector('.menu__close');
                if(close !== null){
                    close.addEventListener('click', ()=>{
                        /**
                         * убираем класс плавного появления меню
                         * и добавляем класс для плавного сокрытия меню
                         */
                        block_menu.classList.remove('menu__block-show');
                        block_menu.classList.add('menu__block-hide');
                        hamburger.style.display = "flex";
                        /**
                         * задержка 1 секунда, чтобы успел скрыться блок с меню
                         * потом добавляем невидимость
                         * и убираем класс для плавного скрытия 
                         */
                        setTimeout(function(){
                            menu.style.display = 'none';
                            block_menu.classList.remove('menu__block-hide');
                        }, 500);
                    });
                }
            }
        });
    }
    
    /**
     * Функция проверки находится ли элемент в зоне видомости
     */
    function isVisible(elem) {

        let coords = elem.getBoundingClientRect();
      
        let windowHeight = document.documentElement.clientHeight;
      
        // верхний край элемента виден?
        let topVisible = coords.top > 0 && coords.top < windowHeight;
      
        // нижний край элемента виден?
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      
        return topVisible || bottomVisible;
    }

    /**
     * ПРАГРЕСС БАРЫ
     */
    /**
     * Срабатывание скрипта при прокрутки для нужного места на странице
     */
    window.addEventListener('scroll', showProgressBars);

    function showProgressBars() {
        /**
         * Прогресс бары
         * 1) находим все прогресс-бары
         * 2) отправляем найденный массив на перебор 
         * 3) у каждого элемента находим атрибут data-progres
         * 4) прибавляем по 1 к style.widht progres-bar с задержкой(задержка в css)
         */
        let progress_bars = document.querySelectorAll(".progres-bar");
        if(progress_bars.length > 0){
            for(let i = 0; i< progress_bars.length; i++){
                let progres = progress_bars[i];
                if(progres.hasAttribute('data-progres')){
                    /**
                     * Проверка попал ли в зону видимости
                     */
                    if(isVisible(progres)){
                        progres.style.width = progres.getAttribute('data-progres')+"%";
                    }
                }
            }
        }
      }

}, false);
