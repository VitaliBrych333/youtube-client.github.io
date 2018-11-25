/* global gapi */
import newArrayResponse from './create-responseArray';
import requestViews from './request-viewsCount';
import checkWidthScreen from './check-widthScreen';
import {
    controlScreen, addMultipleListeners, swipeStart, swipeMove, swipeEnd,
} from './control-pages';
import getVariables from './variables';
import createBtnPrev from './create-btnPrevChunk';
import deleteBtn from './delete-buttons';
import createMain from './create-main';

export default function createBtnNext(arrayObjectsResponse, wordRequest) {
    const btnNextClips = document.createElement('button');
    btnNextClips.type = 'button';
    btnNextClips.id = 'next';
    btnNextClips.className = 'nav-pages';
    btnNextClips.innerHTML = 'Next 15 <i class="fa fa-angle-double-right" aria-hidden="true"></i>';
    btnNextClips.addEventListener('click', nextPages.bind(null, arrayObjectsResponse, wordRequest));
    document.querySelector('header').appendChild(btnNextClips);
}

function nextPages(arrayObjectsResponse, wordRequest) {
    document.querySelector('#next').setAttribute('disabled', 'disabled');
    createMain();
    let {
        arrayResponse,
    } = getVariables();
    const {
        API_YOUTUBE, DISCOVERY_DOCS,
    } = getVariables();

    function nextChunk() {
        const pageTokenNext = arrayObjectsResponse[0].nextPage;
        gapi.client.init({
            'apiKey': API_YOUTUBE,
            'discoveryDocs': DISCOVERY_DOCS,
        }).then(() => {
            return gapi.client.youtube.search.list({
                maxResults: '15',
                q: wordRequest,
                part: 'snippet',
                type: 'video',
                pageToken: pageTokenNext,
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
                createBtnPrev(arrayObjectsResponse, wordRequest);
            }, 1000);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', nextChunk.bind(null, arrayObjectsResponse, wordRequest));
}
