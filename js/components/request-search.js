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
import createBtnSearch from './create-btnSearch';

export default function search() {
    document.querySelector('#search').setAttribute('disabled', 'disabled');
    createMain();
    deleteBtn();
    let {
        arrayResponse,
    } = getVariables();
    const {
        API_YOUTUBE, DISCOVERY_DOCS,
    } = getVariables();
    function requestSearch() {
        const wordRequest = document.querySelector('input').value;
        gapi.client.init({
            'apiKey': API_YOUTUBE,
            'discoveryDocs': DISCOVERY_DOCS,
        }).then(() => {
            return gapi.client.youtube.search.list({
                maxResults: '15',
                q: wordRequest,
                part: 'snippet',
                type: 'video',
                fields: 'items(id/videoId,snippet(channelTitle,description,publishedAt,thumbnails/medium,title)),nextPageToken,prevPageToken,regionCode',
            });
        }).then((response) => {
            arrayResponse = response.result;
            const arrayObjectsResponse = newArrayResponse(arrayResponse);
            const length = arrayObjectsResponse.length;
            for (let i = 0; i < length; i += 1) {
                requestViews(arrayObjectsResponse, i);
            }
            setTimeout(() => {
                const targetElement = document.querySelector('main');
                deleteBtn();
                checkWidthScreen(arrayObjectsResponse);
                window.addEventListener('resize', controlScreen.bind(null, arrayObjectsResponse));
                addMultipleListeners(targetElement, 'mousedown touchstart', swipeStart);
                addMultipleListeners(targetElement, 'mousemove touchmove', swipeMove);
                addMultipleListeners(targetElement, 'mouseup touchend', swipeEnd.bind(null, arrayObjectsResponse));
                createBtnNext(arrayObjectsResponse, wordRequest);
                createBtnSearch();
                document.querySelector('#search').addEventListener('click', search);
            }, 1000);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', requestSearch);
}
