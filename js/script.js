



function sendDataByGetMethod() {
    let userData = {
        surName: document.getElementById('surName').value,
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        place: document.getElementById('place').value,
    };

    if (userData.age < 0 || userData.age > 100) {
        console.log('Age validation error!');
        let age = document.getElementById('age');
        alert('Validation Error! Age is over 100 or < 0 : ' + age.value);

    } else {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/userGet?surName=" + userData.surName +
            "&userName=" + userData.name +
            "&age=" + userData.age +
            "&place=" + userData.place);

        userData.surName += '.ValidatedByPOST';
        userData.name += '.ValidatedByPOST';
        userData.age += '.ValidatedByPOST';
        userData.place += '.ValidatedByPOST';

        xhr.send();
        console.log(userData);
    }
}

function sendDataByPostMethod() {
    let userData = {
        surName: document.getElementById('surNamePost').value,
        name: document.getElementById('namePost').value,
        age: document.getElementById('agePost').value,
        place: document.getElementById('placePost').value
    };

    if (userData.age < 0 || userData.age > 100) {
        console.log('Age validation error!');
        let age = document.getElementById('agePost');
        alert('Validation Error! Age is over 100 or < 0 : ' + age.value);
    } else {

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/userPost");
        xhr.setRequestHeader("Content-type", "application/json");
        userData.surName += '.ValidatedByPOST';
        userData.name += '.ValidatedByPOST';
        userData.age += '.ValidatedByPOST';
        userData.place += '.ValidatedByPOST';
        xhr.send(JSON.stringify(userData));
        console.log(userData);
    }
}