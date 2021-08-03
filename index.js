function renderPosts(arr) {
  const list = document.createElement('div');
  list.setAttribute('id', 'parent')
  list.innerHTML = '';

  arr.forEach(function (element, index) {
    const item = document.createElement('div');
    item.setAttribute('data-uid', element.userId)
    item.setAttribute('data-postid', element.id)
    const header = document.createElement('div')
    header.classList.add('header')
    const body = document.createElement('div')
    body.classList.add('content')
    header.innerText = element.title
    body.innerText = element.body
    item.appendChild(header)
    item.appendChild(body)
    list.appendChild(item);
  });
  return list;
}

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => document.body.append(renderPosts(json)));
}