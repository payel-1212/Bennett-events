const SHEETDB_URL = "https://sheetdb.io/api/v1/dwyyvl1paryu9";

document.getElementById("sheetdb-form").addEventListener("submit", function(e){
    e.preventDefault();

    let form = document.getElementById("sheetdb-form");
    let formData = new FormData(form);

    // Convert FormData → JSON
    let jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);

    fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: jsonObject })
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = "success.html";
    })
    .catch(err => {
        alert("Error! Data not saved.");
        console.error(err);
    });
});
