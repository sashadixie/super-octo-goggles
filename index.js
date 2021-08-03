function createHtmlChildElems(arr) {
  const list = document.createElement('div');
  list.setAttribute('id', 'parent')
  list.innerHTML = '';

  arr.forEach(function (element, index) {
    const item = document.createElement('div');
    item.setAttribute('data-uid', element.userId)
    item.setAttribute('data-postid', element.id)
    const header = document.createElement('div', { className: 'title' })
    const body = document.createElement('div', { className: 'content' })
    header.innerText = element.title
    body.innerText = element.body
    item.appendChild(header)
    item.appendChild(body)
    list.appendChild(item);
  });
  return list;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => document.body.append(createHtmlChildElems(json)));