const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value.length == 0)
    {
        alert("Can't be empty");
        return false;
    }
    else
    {
        let inputText = input.value;

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = inputText;
        deleteButton.innerHTML = "❌";
        
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
            listItem.remove();
        })

        input.focus();

        input.value = "";

    }
})