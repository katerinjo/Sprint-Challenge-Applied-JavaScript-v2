// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
    const element = document.createElement('div')
    element.classList.add('tab')
    element.textContent = topic
    return element
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(message => {
        const targetElement = document.querySelector('.topics')
        const tabElements = message.data.topics.map(Tab)
        tabElements.forEach(element => targetElement.appendChild(element))
    })
    .catch(console.log)