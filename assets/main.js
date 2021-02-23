
// Typed.js
const lines = ['hey there!', 'this is my frontend coding challenges', 'from <a href="#.">Frontend Mentor</a>', 'built on HTML/CSS/JS', 'you can check them right now', 'have a great day!'];

const typed1 = new Typed('.line-1', {
    strings: [lines[0]],
    typeSpeed: 45,
    showCursor: false
});

typed1.complete = function (){
    const typed2 = new Typed('.line-2', {
        strings: [lines[1]],
        typeSpeed: 45,
        showCursor: false
    });
    typed2.complete = function(){
        const typed3 = new Typed('.line-3', {
            strings: [lines[2]],
            typeSpeed: 40,
            showCursor: false
        });
        typed3.complete = function () {
            const typed4 = new Typed('.line-4', {
                strings: [lines[3]],
                typeSpeed: 60,
                showCursor: false
            });
            typed4.complete = function () {
                const typed5 = new Typed('.line-5', {
                    strings: [lines[4]],
                    typeSpeed: 45,
                    showCursor: false
                });
                typed5.complete = function () {
                    document.querySelector('.c-carousel').classList.remove('o-hidde');
                    const typed6 = new Typed('.line-6', {
                        strings: [lines[5]],
                        typeSpeed: 45
                    });
                }
            }
        }
    }
}



const card = document.querySelectorAll('.c-card');
function onClickCard(){
    this.querySelector('.c-card-item__buttons').classList.toggle('o-hidde');
    this.querySelector('.c-card-item__img').classList.toggle('o-blur');
}

card.forEach(e => {
    e.addEventListener('click', onClickCard)
});


