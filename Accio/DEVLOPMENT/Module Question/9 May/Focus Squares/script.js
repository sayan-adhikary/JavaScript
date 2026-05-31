let div = document.querySelectorAll('div');

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mouseover', () => {
        for (let j = 0; j < div.length; j++) {
            if (i === j) {
                continue;
            } else {
                div[j].style.backgroundColor = '#6F4E37';
            }
        }
    });

    div[i].addEventListener('mouseout', () => {
        for (let j = 0; j < div.length; j++) {
            div[j].style.backgroundColor = '#E6E6FA';
        }
    });
}