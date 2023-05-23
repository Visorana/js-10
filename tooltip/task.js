let hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach.call(hasTooltips, (hasTooltip) => {
    hasTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        let activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) activeTooltip.remove()
        createTooltip(hasTooltip);
    });
});

document.addEventListener('click', (e) => {
    const withinBoundaries = [...hasTooltips].some(el => e.composedPath().includes(el));
    let activeTooltip = document.querySelector('.tooltip_active');
	if (!withinBoundaries) {
        if (activeTooltip) activeTooltip.remove();
	}
})

function createTooltip(hasTooltip) {
    let div = document.createElement('div');
    div.innerText = hasTooltip.title;
    div.classList = 'tooltip';
    div.classList.add('tooltip_active');
    div.dataset.position = 'bottom';
    hasTooltip.insertAdjacentElement('afterEnd', div);
    setPosition(div, hasTooltip);
}

function setPosition(div, hasTooltip) {
    let position = div.dataset.position;
    let {top, left} = hasTooltip.getBoundingClientRect();
    if (position === 'top') {
        div.style.left = `${left}px`;
        div.style.top = `${top - div.clientHeight}px`;
    } else if (position === 'bottom') {
        div.style.left = `${left}px`;
    } else if (position === 'left') {
        div.style.top = `${top}px`;
        div.style.left = `${left - div.clientWidth}px`;
    } else if (position === 'right') {
        div.style.top = `${top}px`;
        div.style.left = `${left + hasTooltip.offsetWidth}px`;
    }
}