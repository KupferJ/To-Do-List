
function newItem() {

  //1. Add new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert ('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. Cross out items via double click
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3(i). Add a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>')
  crossOutButton.append(document.createTextNode('x'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

  //3(ii). Add CLASS DELETE from css
  function deleteListItem() {
    li.addClass('delete')
  }

  //4. Reorder Items
  $('#list').sortable();
}