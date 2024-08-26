
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
    displayName.style.display = 'block';
    const rendomIndex = Math.floor(Math.random() * names.length);
    const rendomName = names[rendomIndex];

    displayName.textContent = rendomName;

    if (names == '') {
        displayName.style.display = 'none';
        alert("Please add your name.");
    }
}