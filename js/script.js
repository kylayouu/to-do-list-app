function newItem() {

  // 1. Adding a new item to the list of items
  let list = $('#list');
  let li = $('<li></li>');
  input = $('#input');
  inputValue = input.val();
  li.append(inputValue);

  if (inputValue === '') {
  alert('You must write something!')
  } else {

    // 2.Crossing out an item from the list of items
    li.addEventListener("dblclick", () => {
      console.log('works')
      li.toggleClass('strike');
    })

    // 3. Adding a delete button
    let crossout = $('<crossOutButton>X</crossOutButton>')
    li.append(crossout)
    crossout.click(()=>{
      console.log("works!")
      li.addClass('delete')
    })

    list.append(li);

    // 4. Reordering the items
    list.sortable();
  }
};