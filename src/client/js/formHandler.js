
const handleSubmit = async(event) => {
    event.preventDefault()
    //  get input url
    let input_url = document.getElementById('url').value
    console.log("clicked");
    client.validURL(input_url);
    console.log("::: Form Submitted :::");

    fetch('http://localhost:8080/analysis',{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:input_url}),
    })
    .then(res => res.json())
    .then((res) => {
        // print for debugging
        console.log(res);
        document.getElementById('results').innerHTML = `Polarity: ${res.polarity} <br> Subjectivity: ${res.subjectivity} <br> Polarity Confidence: ${res.polarity_confidence} <br> Subjectivity Confidence: ${res.subjectivity_confidence} <br> Text: ${res.text}`;
    })
}

export { handleSubmit }
