import search from './components/request-search';

window.onload = () => {
    const head = document.createElement('header');
    head.innerHTML = `<h1>Youtube client</h1>
    <p>Please, set name of the clip for search</p>
    <form id="data">
      <input type="text" placeholder="Clip name">
    </form>   
    <button id="search" type="button" form="data">Search <i class="fa fa-search" aria-hidden="true"></i></button>`;
    document.querySelector('body').appendChild(head);
    document.querySelector('#search').addEventListener('click', search);
};
