// Update server time every second
function updateServerTime() {
    eel.get_server_time()(function(time) {
        document.getElementById('server-time').innerHTML = time;
    });
}
setInterval(updateServerTime, 1000);
updateServerTime();

// Generate random number
function generateRandomNumber() {
    eel.get_random_number()(function(number) {
        document.getElementById('random-number').innerHTML = number;
    });
}

// Reverse text
function reverseText() {
    let text = document.getElementById('text-input').value;
    eel.reverse_text(text)(function(reversed) {
        document.getElementById('reversed-text').innerHTML = reversed;
    });
}

// Lazy load content
function lazyLoad() {
    eel.get_lazy_load_content()(function(content) {
        document.getElementById('lazy-load-container').innerHTML = content;
    });
}
// Call lazyLoad when the element is in view
let lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoad();
            lazyLoadObserver.unobserve(entry.target);
        }
    });
});
lazyLoadObserver.observe(document.getElementById('lazy-load-container'));

// Color throb
function colorThrob() {
    eel.color_throb()(function(content) {
        let target = document.getElementById('color-throb-target');
        target.innerHTML = content;
        target.classList.add('throb');
        setTimeout(() => target.classList.remove('throb'), 1000);
    });
}

// Fade out
function fadeOut() {
    eel.fade_out()(function(content) {
        let target = document.getElementById('fade-out-target');
        target.classList.add('htmx-swapping');
        setTimeout(() => {
            target.innerHTML = content;
            target.classList.remove('htmx-swapping');
        }, 1000);
    });
}

// Fade in
function fadeIn() {
    eel.fade_in()(function(content) {
        let target = document.getElementById('fade-in-target');
        let newElement = document.createElement('div');
        newElement.innerHTML = content;
        newElement.classList.add('fade-in');
        target.appendChild(newElement);
        setTimeout(() => newElement.classList.add('htmx-settling'), 10);
    });
}

// Swap content
function swapContent() {
    eel.swap_content()(function(content) {
        let target = document.getElementById('swap-content-target');
        target.classList.add('htmx-swapping');
        setTimeout(() => {
            target.innerHTML = content;
            target.classList.remove('htmx-swapping');
        }, 1000);
    });
}
let pastelInterval;

function startPastelChange() {
    changePastelColor();
    pastelInterval = setInterval(changePastelColor, 250);
}

function stopPastelChange() {
    clearInterval(pastelInterval);
}

function changePastelColor() {
    const button = document.getElementById('pastel-button');
    const hue = Math.random() * 360;
    button.style.backgroundColor = `hsl(${hue}, 100%, 90%)`;
}
// Initialize content
eel.color_throb_initial()(function(content) {
    document.getElementById('color-throb-target').innerHTML = content;
});
eel.fade_out_initial()(function(content) {
    document.getElementById('fade-out-target').innerHTML = content;
});
eel.swap_content_initial()(function(content) {
    document.getElementById('swap-content-target').innerHTML = content;
});

