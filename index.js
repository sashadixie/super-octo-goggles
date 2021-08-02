function createHtmlChildElems(arr) {
  const list = document.createElement('div');
  list.innerHTML = '';

  arr.forEach(function (element, index) {
    const item = document.createElement('div');
    item.innerHTML = `результат: ${element}`
    list.appendChild(item);
  });
  return list;
}

const foo = [4, 5, , , 666, -98, 45, 78, , , , 6, 6, 5, 4, 7];
const elems = createHtmlChildElems(foo);
document.body.append(elems);