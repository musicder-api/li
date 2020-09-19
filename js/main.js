function f() {
    var name = document.getElementById("name").value;
    var no = document.getElementById("no").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var landmark = document.getElementById("landmark").value;
    var study = document.getElementById("study").value;
    var bio = document.getElementById("bio").value;
    var fplan = document.getElementById("fplan").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    var raw = `{"name":"` + name + `","no":"` + no + `","address":"` + address + `","city":"` + city +
        `","state":"` + state + `","landmark":"` + landmark + `","study":"` + study + `","bio":"` + bio + `","fplan":"` + fplan + `"}`;

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://lakme-india.firebaseio.com/here/" + no + name + ".json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}