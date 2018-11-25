import getVariables from './variables';

const {
    arrayObjectsResponse,
} = getVariables();

export default function newArrayResponse(arrayResponse) {
    const length = arrayResponse.items.length;
    for (let i = 0; i < length; i += 1) {
        arrayObjectsResponse[i] = {
            img: arrayResponse.items[i].snippet.thumbnails.medium.url,
            id: arrayResponse.items[i].id.videoId,
            title: arrayResponse.items[i].snippet.title,
            author: arrayResponse.items[i].snippet.channelTitle,
            date: arrayResponse.items[i].snippet.publishedAt.substring(0, 10),
            description: arrayResponse.items[i].snippet.description,
            nextPage: arrayResponse.nextPageToken,
            prevPage: arrayResponse.prevPageToken || 'none',
        };
    }
    return arrayObjectsResponse;
}
