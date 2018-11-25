export function showPage(event) {
    event.target.querySelector('span').classList.add('show');
}

export function hidePage(event) {
    event.target.querySelector('span').classList.remove('show');
}
