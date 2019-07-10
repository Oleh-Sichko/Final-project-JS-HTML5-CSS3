document.querySelector('.ajax-html').addEventListener('click', getHtmlAjax);

const XHR_STATE_DONE = 4;
const HTTP_STATE_CODE = 200;

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XHR_STATE_DONE &&
            xhr.status === HTTP_STATE_CODE) {
        document.querySelector('.html-container').innerText = xhr.responseText;
    }
  }
  xhr.open('.GET','client-data.html', true);
  xhr.send();
  }