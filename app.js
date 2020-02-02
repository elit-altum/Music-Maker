
window.addEventListener('load', () => {
    // only runs the function when webpage is loaded
    const sounds = document.querySelectorAll('audio');
    const pads = document.querySelectorAll('.pads div');

    const visual = document.querySelector('.visual');
    const colors = [
        "#abe6ce",
        "#dcedc2",
        "#ffd385",
        "#ffaaa6",
        "#ff8c94",
        "#45ada8"
    ]

    pads.forEach( (pad, index) => {

        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    })

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);

        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }

})