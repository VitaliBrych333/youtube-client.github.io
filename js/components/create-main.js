export default function createMain() {
    if (document.querySelector('main')) {
        document.querySelector('main').remove();
    }
    const main = document.createElement('main');
    main.innerHTML = `<div class="answer-block" id="answer"></div>
                      <div class="paging" id="pagination"></div>`;
    document.querySelector('body').appendChild(main);
    document.querySelector('#pagination').innerHTML = '';
}
