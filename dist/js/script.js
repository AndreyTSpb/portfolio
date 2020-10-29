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
                progres.style.width = progres.getAttribute('data-progres')+"%";
            }
        }
    }
}, false);
