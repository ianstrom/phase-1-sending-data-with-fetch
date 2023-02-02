// Add your code here
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    fetch('http://localhost:3000/users', configurationObject)
        // .then(data => {
        //     return data.json();
        // })
}
