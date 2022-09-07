const xhr = new XMLHttpRequest()
console.log(`Ready State - ${xhr.readyState}`)
const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)
xhr.onreadystatechange  = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = ''
        for(let i=0; i < objectResponse.length; i++) {
                output += `
            <div id="card" >
            <div class ="user-info" >
                <h2>${objectResponse[i].name}</h2>
                <p>works at: ${objectResponse[i].company.name}</p>
                <p>About: ${objectResponse[i].company.catchPhrase}
                <p>Address: ${objectResponse[i].address.suite}, ${objectResponse[i].address.street}, ${objectResponse[i].address.city}</p>
                <ul class="info" id="flex-column">
                    <li class = "flex-item"><strong>Phone</strong>${objectResponse[i].phone}</li>
                    <li class = "flex-item"><strong>Email</strong>${objectResponse[i].email}</li>
                    <li class = "flex-item"><strong>Website</strong>${objectResponse[i].website}</li>
                </ul>
                <div id="repos"></div
            </div>
        </div>
            `
        }
        console.log(output)
        document.querySelector('#main').innerHTML = output
    }
}
xhr.send()