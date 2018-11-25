import createDivs from './create-elementPage';
import createPagination from './create-pagination';

function createPages(arrayObjectsResponse, end) {
    createDivs(arrayObjectsResponse, 0, end);
    createPagination(arrayObjectsResponse, 1, end);
}

export default function checkWidthScreen(arrayObjectsResponse) {
    const widthScreen = window.innerWidth;
    if (widthScreen >= 1353) {
        createPages(arrayObjectsResponse, 4);
    } else if ((widthScreen < 1353) && (widthScreen >= 1019)) {
        createPages(arrayObjectsResponse, 3);
    } else if ((widthScreen < 1019) && (widthScreen >= 685)) {
        createPages(arrayObjectsResponse, 2);
    } else {
        createPages(arrayObjectsResponse, 1);
    }
}
