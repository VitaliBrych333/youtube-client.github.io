export default function createDivs(arrayObjectsResponse, start, count) {
    document.querySelector('#answer').innerHTML = '';
    for (let i = start; i < (count + start); i += 1) {
        if (arrayObjectsResponse[i] === undefined) break;
        else {
            const div = document.createElement('div');
            div.innerHTML = `
              <div class="picture">
                <img src=${arrayObjectsResponse[i].img} alt="img">
              </div>
              <div class="title">
                <a href="https://www.youtube.com/watch?v=${arrayObjectsResponse[i].id}">${arrayObjectsResponse[i].title}</a>
              </div>
              <div class="about">
                <p><i class="fa fa-user" aria-hidden="true"></i><span id="author">${arrayObjectsResponse[i].author}</span></p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i><span id="date">${arrayObjectsResponse[i].date}</span></p>
                <p><i class="fa fa-eye" aria-hidden="true"></i><span id="views">${arrayObjectsResponse[i].views}</span></p>      
                <p class="description">${arrayObjectsResponse[i].description}</p>
              </div>`;
            div.classList.add('item');
            document.querySelector('#answer').appendChild(div);
        }
    }
}
