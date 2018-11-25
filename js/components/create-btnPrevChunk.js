/* global gapi */
import newArrayResponse from './create-responseArray';
import requestViews from './request-viewsCount';
import checkWidthScreen from './check-widthScreen';
import {
    controlScreen, addMultipleListeners, swipeStart, swipeMove, swipeEnd,
} from './control-pages';
import getVariables from './variables';
import createBtnNext from './create-btnNextChunk';
import deleteBtn from './delete-buttons';
import createMain from './create-main';

export default function createBtnPrev(arrayObjectsResponse, wordRequest) {
    const btnPrevClips = document.createElement('button');
    btnPrevClips.type = 'button';
    btnPrevClips.id = 'prev';
    btnPrevClips.className = 'nav-pages';
    btnPrevClips.innerHTML = '<i class="fa fa-angle-double-left" aria-hidden="true"></i> Prev 15 ';
    btnPrevClips.addEventListener('click', prevPages.bind(null, arrayObjectsResponse, wordRequest));
    document.querySelector('header').insertBefore(btnPrevClips, document.querySelector('#search'));
}

function prevPages(arrayObjectsResponse, wordRequest) {
    document.querySelector('#prev').setAttribute('disabled', 'disabled');
    createMain();
    let {
        arrayResponse,
    } = getVariables();
    const {
        API_YOUTUBE, DISCOVERY_DOCS,
    } = getVariables();

    function nextChunk() {
        const pageTokenPrev = arrayObjectsResponse[0].prevPage;
        gapi.client.init({
            'apiKey': API_YOUTUBE,
            'discoveryDocs': DISCOVERY_DOCS,
        }).then(() => {
            return gapi.client.youtube.search.list({
                maxResults: '15',
                q: wordRequest,
                part: 'snippet',
                type: 'video',
                pageToken: pageTokenPrev,
                fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode',
            });
        }).then((response) => {
            arrayResponse = response.result;
            arrayObjectsResponse = newArrayResponse(arrayResponse);
            const length = arrayObjectsResponse.length;
            for (let i = 0; i < length; i += 1) {
                requestViews(arrayObjectsResponse, i);
            }
            setTimeout(() => {
                const targetElement = document.querySelector('#answer');
                deleteBtn();
                checkWidthScreen(arrayObjectsResponse);
                window.addEventListener('resize', controlScreen.bind(null, arrayObjectsResponse));
                addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
                addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
                addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd.bind(null, arrayObjectsResponse));
                createBtnNext(arrayObjectsResponse, wordRequest);
                if (arrayObjectsResponse[0].prevPage !== 'none') {
                    createBtnPrev(arrayObjectsResponse, wordRequest);
                }
            }, 1000);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', nextChunk.bind(null, arrayObjectsResponse, wordRequest));
}
