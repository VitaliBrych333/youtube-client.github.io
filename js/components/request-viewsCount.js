/* global gapi */
import getVariables from './variables';

export default function requestViews(arrayObjectsResponse, i) {
    const {
        API_YOUTUBE, DISCOVERY_DOCS,
    } = getVariables();
    function setViewCount(responseViewCount) {
        arrayObjectsResponse[i].views = responseViewCount;
    }

    function viewsCount() {
        gapi.client.init({
            'apiKey': API_YOUTUBE,
            'discoveryDocs': DISCOVERY_DOCS,
        }).then(() => {
            return gapi.client.youtube.videos.list({
                id: arrayObjectsResponse[i].id,
                part: 'statistics',
                fields: 'items/statistics/viewCount',
            });
        }).then((response) => {
            const responseViewCount = response.result.items[0].statistics.viewCount;
            setViewCount(responseViewCount, i);
        }, (reason) => {
            console.log(`Error: ${reason.result.error.message}`);
        });
    }
    gapi.load('client', viewsCount);
}
