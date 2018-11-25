import createDivs from './create-elementPage';
import createPagination from './create-pagination';

let indexPageActive = 0;
let numberValueElement = 0;

export function controlScreen(arrayObjectsResponse) {
    document.querySelector('#pagination').innerHTML = '';
    const viewsContent = document.querySelector('#answer>div:first-child>.about>p:nth-child(3)>#views').textContent;
    const objStartNumber = arrayObjectsResponse.findIndex((obj) => {
        return obj.views === viewsContent;
    });
    let numActivePage = 0;
    const numberElement = objStartNumber + 1;
    const widthScreen = window.innerWidth;
    if (widthScreen >= 1353) {
        createDivs(arrayObjectsResponse, objStartNumber, 4);
        createPagination(arrayObjectsResponse, 1, 4);
        numActivePage = Math.ceil(numberElement / 4) - 1;
    } else if ((widthScreen < 1353) && (widthScreen >= 1019)) {
        createDivs(arrayObjectsResponse, objStartNumber, 3);
        createPagination(arrayObjectsResponse, 1, 3);
        numActivePage = Math.ceil(numberElement / 3) - 1;
    } else if ((widthScreen < 1019) && (widthScreen >= 685)) {
        createDivs(arrayObjectsResponse, objStartNumber, 2);
        createPagination(arrayObjectsResponse, 1, 2);
        numActivePage = Math.ceil(numberElement / 2) - 1;
    } else {
        createDivs(arrayObjectsResponse, objStartNumber, 1);
        createPagination(arrayObjectsResponse, 1, 1);
        numActivePage = numberElement - 1;
    }
    if (numActivePage < 0) {
        numActivePage = 0;
    }
    indexPageActive = numActivePage;
    document.querySelector('#pagination>div.active').classList.remove('active');
    document.querySelectorAll('#pagination>div')[numActivePage].classList.add('active');
    return indexPageActive;
}

export function pagination(arrayObjectsResponse, event) {
    const numberPage = parseInt(event.target.textContent, 10);
    const widthScreen = window.innerWidth;
    document.querySelector('#pagination>div.active').classList.remove('active');
    event.target.classList.add('active');
    document.querySelector('#answer').innerHTML = '';
    indexPageActive = numberPage - 1;
    if (widthScreen >= 1353) {
        createDivs(arrayObjectsResponse, ((4 * numberPage) - 4), 4);
        numberValueElement = 4 * indexPageActive;
    } else if ((widthScreen < 1353) && (widthScreen >= 1019)) {
        createDivs(arrayObjectsResponse, ((3 * numberPage) - 3), 3);
        numberValueElement = 3 * indexPageActive;
    } else if ((widthScreen < 1019) && (widthScreen >= 685)) {
        createDivs(arrayObjectsResponse, ((2 * numberPage) - 2), 2);
        numberValueElement = 2 * indexPageActive;
    } else {
        createDivs(arrayObjectsResponse, (numberPage - 1), 1);
        numberValueElement = indexPageActive;
    }
}

let touchStartCoords = { 'x': -1, 'y': -1 };
let touchEndCoords = { 'x': -1, 'y': -1 };
let direction = 'undefined';
let startTime = 0;
let elapsedTime = 0;
const minDistanceXAxis = 30;
const maxDistanceYAxis = 30;
const maxAllowedTime = 1000;
export function swipeStart(e) {
    e = e || window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    touchStartCoords = { 'x': e.pageX, 'y': e.pageY };
    startTime = new Date().getTime();
}
export function swipeMove(e) {
    e = e || window.event;
    e.preventDefault();
}

export function swipeEnd(arrayObjectsResponse, e) {
    const numLastElem = arrayObjectsResponse.length - 1;
    e = e || window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    touchEndCoords = { 'x': e.pageX - touchStartCoords.x, 'y': e.pageY - touchStartCoords.y };
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= maxAllowedTime) {
        if (Math.abs(touchEndCoords.x) >= minDistanceXAxis && Math.abs(touchEndCoords.y)
        <= maxDistanceYAxis) {
            direction = (touchEndCoords.x < 0) ? 'left' : 'right';
            const widthScreenTouch = window.innerWidth;
            switch (direction) {
            case 'left':
                indexPageActive += 1;
                if (numberValueElement > numLastElem) {
                    numberValueElement = 0;
                    break;
                } else if (widthScreenTouch >= 1353) {
                    numberValueElement += 4;
                    if (numberValueElement > numLastElem) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 4);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 4);
                } else if ((widthScreenTouch < 1353) && (widthScreenTouch >= 1019)) {
                    numberValueElement += 3;
                    if (numberValueElement > numLastElem) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 3);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 3);
                } else if ((widthScreenTouch < 1019) && (widthScreenTouch >= 685)) {
                    numberValueElement += 2;
                    if (numberValueElement > numLastElem) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 2);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 2);
                } else {
                    numberValueElement += 1;
                    if (numberValueElement > numLastElem) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 1);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 1);
                }
                break;
            case 'right':
                indexPageActive -= 1;
                if (indexPageActive < 0) {
                    indexPageActive = 0;
                }
                if (numberValueElement <= 0 || numberValueElement > numLastElem) {
                    numberValueElement = 0;
                    break;
                } else if (widthScreenTouch >= 1353) {
                    numberValueElement -= 4;
                    if (numberValueElement < 0) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 4);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 4);
                } else if ((widthScreenTouch < 1353) && (widthScreenTouch >= 1019)) {
                    numberValueElement -= 3;
                    if (numberValueElement < 0) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 3);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 3);
                } else if ((widthScreenTouch < 1019) && (widthScreenTouch >= 685)) {
                    numberValueElement -= 2;
                    if (numberValueElement < 0) {
                        numberValueElement = 0;
                        createDivs(arrayObjectsResponse, numberValueElement, 2);
                        break;
                    }
                    createDivs(arrayObjectsResponse, numberValueElement, 2);
                } else {
                    numberValueElement -= 1;
                    createDivs(arrayObjectsResponse, numberValueElement, 1);
                }
                break;
            default: break;
            }
            if (indexPageActive > (document.querySelectorAll('#pagination>div').length - 1)) {
                indexPageActive = 0;
            }
            document.querySelector('#pagination>div.active').classList.remove('active');
            document.querySelectorAll('#pagination>div')[indexPageActive].classList.add('active');
        }
    }
}
export function addMultipleListeners(el, s, fn) {
    const evts = s.split(' ');
    for (let i = 0, iLen = evts.length; i < iLen; i += 1) {
        el.addEventListener(evts[i], fn, false);
    }
}
