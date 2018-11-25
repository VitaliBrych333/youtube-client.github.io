import { showPage, hidePage } from './event-page';
import { pagination } from './control-pages';

export default function createPagination(arrayObjectsResponse, start, count) {
    const countPages = Math.round(arrayObjectsResponse.length / count);
    for (let i = start; i <= countPages; i += 1) {
        const div = document.createElement('div');
        div.classList.add('page');
        if (i === 1) {
            div.classList.add('active');
        }
        div.addEventListener('mousedown', showPage);
        div.addEventListener('mouseup', hidePage);
        div.addEventListener('mouseout', hidePage);
        div.addEventListener('mouseup', pagination.bind(null, arrayObjectsResponse));
        div.innerHTML = `${i}<span class="popuptext" onmousedown="event.stopImmediatePropagation()"
                        onmouseup="event.stopImmediatePropagation()" onmouseout="event.stopImmediatePropagation()">Go to page ${i}</span>`;
        document.querySelector('#pagination').appendChild(div);
    }
}
