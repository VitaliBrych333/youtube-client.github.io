import newArrayResponse from '../js/components/create-responseArray';
import {
    controlScreen, swipeStart, swipeMove, swipeEnd, addMultipleListeners,
} from '../js/components/control-pages';
import getVariables from '../js/components/variables';
import checkWidthScreen from '../js/components/check-widthScreen';
import createDivs from '../js/components/create-elementPage';
import createPagination from '../js/components/create-pagination';
import { showPage, hidePage } from '../js/components/event-page';
import search from '../js/components/request-search';
import requestViews from '../js/components/request-viewsCount';
import createBtnNext from '../js/components/create-btnNextChunk';
import createBtnPrev from '../js/components/create-btnPrevChunk';
import createMain from '../js/components/create-main';
import deleteBtn from '../js/components/delete-buttons';
import createBtnSearch from '../js/components/create-btnSearch';

const {
    arrayObjectsResponse, arrayResponse, API_YOUTUBE, DISCOVERY_DOCS,
} = getVariables();

const assert = require('chai').assert;

describe('create-responseArray', () => {
    it('newArrayResponse return array', () => {
        assert.typeOf(newArrayResponse(
            {
                nextPageToken: 'CA8QAA',
                regionCode: 'BY',
                items: [
                    {
                        id: { videoId: 'tbBfczX5nfs' },
                        snippet: {
                            publishedAt: '2016-11-09T22:08:37.000Z',
                            title: 'Paris RER Extravaganza: All 5 Lines! 8 November 2016',
                            description: 'All five lines of the Paris RER system in one video filmed on Tuesday 8 November 2016. Note that I filmed RER Line B at two stations, Gare du Nord and ...',
                            thumbnails: {
                                medium:
                            {
                                url: 'https://i.ytimg.com/vi/tbBfczX5nfs/mqdefault.jpg',
                                width: 320,
                                height: 180,
                            },
                            },
                            channelTitle: 'voxley19',
                        },
                    },
                ],
            },
        ), 'array');
    });

    it('newArrayResponse is function', () => {
        assert.isFunction(newArrayResponse, 'it is function');
    });

    it('newArrayResponse doesNotThrow', () => {
        assert.doesNotThrow(newArrayResponse, 'newArrayResponse doesNotThrow');
    });
});

describe('control-pages', () => {
    it('controlScreen is function', () => {
        assert.isFunction(controlScreen, 'it is function');
    });

    it('controlScreen doesNotThrow', () => {
        assert.doesNotThrow(controlScreen, 'controlScreen doesNotThrow');
    });

    it('swipeStart is function', () => {
        assert.isFunction(swipeStart, 'it is function');
    });

    it('swipeStart doesNotThrow', () => {
        assert.doesNotThrow(swipeStart, 'swipeStart doesNotThrow');
    });

    it('swipeMove is function', () => {
        assert.isFunction(swipeMove, 'it is function');
    });

    it('swipeMove doesNotThrow', () => {
        assert.doesNotThrow(swipeMove, 'swipeMove doesNotThrow');
    });

    it('swipeEnd is function', () => {
        assert.isFunction(swipeEnd, 'it is function');
    });

    it('swipeEnd doesNotThrow', () => {
        assert.doesNotThrow(swipeEnd, 'swipeEnd doesNotThrow');
    });

    it('addMultipleListeners is function', () => {
        assert.isFunction(addMultipleListeners, 'it is function');
    });

    it('addMultipleListeners doesNotThrow', () => {
        assert.doesNotThrow(addMultipleListeners, 'addMultipleListeners doesNotThrow');
    });
});

describe('variables', () => {
    it('arrayObjectsResponse exists', () => {
        assert.exists(arrayObjectsResponse, 'arrayObjectsResponse is neither `null` nor `undefined`');
    });

    it('arrayObjectsResponse is array', () => {
        assert.typeOf(arrayObjectsResponse, 'array', 'arrayObjectsResponse is array');
    });

    it('arrayObjectsResponse is not NaN', () => {
        assert.isNotNaN(arrayObjectsResponse, 'arrayObjectsResponse is not NaN');
    });

    it('arrayResponse exists', () => {
        assert.exists(arrayResponse, 'arrayResponse is neither `null` nor `undefined`');
    });

    it('arrayResponse is array', () => {
        assert.typeOf(arrayResponse, 'array', 'arrayResponse is array');
    });

    it('arrayResponse is not NaN', () => {
        assert.isNotNaN(arrayResponse, 'arrayResponse is not NaN');
    });

    it('API_YOUTUBE is array', () => {
        assert.typeOf(API_YOUTUBE, 'string', 'API_YOUTUBE is string');
    });

    it('DISCOVERY_DOCS is array', () => {
        assert.typeOf(DISCOVERY_DOCS, 'array', 'DISCOVERY_DOCS is array');
    });
});

describe('check-widthScreen', () => {
    it('checkWidthScreen is function', () => {
        assert.isFunction(checkWidthScreen, 'it is function');
    });

    it('checkWidthScreen doesNotThrow', () => {
        assert.doesNotThrow(checkWidthScreen, 'checkWidthScreen doesNotThrow');
    });
});

describe('create-elementPage', () => {
    it('createDivs is function', () => {
        assert.isFunction(createDivs, 'it is function');
    });

    it('createDivs doesNotThrow', () => {
        assert.doesNotThrow(createDivs, 'createDivs doesNotThrow');
    });
});

describe('create-pagination', () => {
    it('createPagination is function', () => {
        assert.isFunction(createPagination, 'it is function');
    });

    it('createPagination doesNotThrow', () => {
        assert.doesNotThrow(createPagination, 'createPagination doesNotThrow');
    });
});

describe('event-page', () => {
    it('showPage is function', () => {
        assert.isFunction(showPage, 'it is function');
    });

    it('showPage doesNotThrow', () => {
        assert.doesNotThrow(showPage, 'showPage doesNotThrow');
    });

    it('hidePage is function', () => {
        assert.isFunction(hidePage, 'it is function');
    });

    it('hidePage doesNotThrow', () => {
        assert.doesNotThrow(hidePage, 'hidePage doesNotThrow');
    });
});

describe('request-search', () => {
    it('search is function', () => {
        assert.isFunction(search, 'it is function');
    });

    it('if search has errorLike', () => {
        assert.throws(search, ReferenceError);
    });
});

describe('request-viewsCount', () => {
    it('requestViews is function', () => {
        assert.isFunction(requestViews, 'it is function');
    });

    it('if requestViews has errorLike', () => {
        assert.throws(requestViews, ReferenceError);
    });
});

describe('create-btnNextChunk', () => {
    it('createBtnNext is function', () => {
        assert.isFunction(createBtnNext, 'it is function');
    });

    it('if createBtnNext has errorLike', () => {
        assert.throws(createBtnNext, ReferenceError);
    });
});

describe('create-btnPrevChunk', () => {
    it('createBtnPrev is function', () => {
        assert.isFunction(createBtnPrev, 'it is function');
    });

    it('if createBtnPrev has errorLike', () => {
        assert.throws(createBtnPrev, ReferenceError);
    });
});

describe('create-main', () => {
    it('createMain is function', () => {
        assert.isFunction(createMain, 'it is function');
    });

    it('createMain doesNotThrow', () => {
        assert.doesNotThrow(createMain, 'createMain doesNotThrow');
    });
});

describe('delete-buttons', () => {
    it('deleteBtn is function', () => {
        assert.isFunction(deleteBtn, 'it is function');
    });

    it('deleteBtn doesNotThrow', () => {
        assert.doesNotThrow(deleteBtn, 'deleteBtn doesNotThrow');
    });
});

describe('create-btnSearch', () => {
    it('createBtnSearch is function', () => {
        assert.isFunction(createBtnSearch, 'it is function');
    });

    it('if createBtnSearch has errorLike', () => {
        assert.throws(createBtnSearch, ReferenceError);
    });
});
