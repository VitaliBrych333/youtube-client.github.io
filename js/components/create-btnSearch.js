export default function createBtnSearch() {
    document.querySelector('#search').remove();
    const btnSearch = document.createElement('button');
    btnSearch.id = 'search';
    btnSearch.type = 'button';
    btnSearch.innerHTML = 'Search <i class="fa fa-search" aria-hidden="true"></i>';
    if (document.querySelector('#next')) {
        document.querySelector('header').insertBefore(btnSearch, document.querySelector('#next'));
    } else {
        document.querySelector('header').appendChild(btnSearch);
    }
}
