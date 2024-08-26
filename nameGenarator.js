
var names = [];

function setNames() {
    const nameInput = document.getElementById('nameInput').value.trim();


    if (nameInput) {
        // names.push(nameInput);

        // Split the input by commas and trim each name
        const nameArray = nameInput.split(',').map(name => name.trim());

        // Add the names to the names array
        names = names.concat(nameArray);

        document.getElementById('nameInput').value = '';
        alert(`Names set to: ${nameInput}`);
    } else {
        alert("Please enter a valid name.");
    }
}

function generateRandomName() {
    var displayName = document.getElementById("generated-name");
    if(names.length >= 1){
        displayName.style.display = 'block';

    }
    else  {
        displayName.style.display = 'none';
        alert("Please add your name.");
    }
    const rendomIndex = Math.floor(Math.random() * names.length);
    let rendomName = names[rendomIndex];
    displayName.textContent = rendomName;
    names.splice(rendomIndex, 1);

    if (names.length < 1) {
        displayName.textContent = rendomName;
    }
   

}