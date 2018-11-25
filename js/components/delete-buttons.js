export default function deleteBtn() {
    document.querySelector('#pagination').innerHTML = '';
    if (document.querySelector('#next')) {
        document.querySelector('#next').remove();
    }
    if (document.querySelector('#prev')) {
        document.querySelector('#prev').remove();
    }
}
