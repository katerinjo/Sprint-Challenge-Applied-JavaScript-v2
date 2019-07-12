// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(data) {
    const [outer, headline, authorDiv, imgDiv, image, author] =
        ['div', 'div', 'div', 'div', 'img', 'span'].map(document.createElement.bind(document))

    headline.textContent = data.headline
    author.textContent = `By ${data.authorName}`

    image.src = data.authorPhoto
        ;
    [
        [outer, 'card'],
        [headline, 'headline'],
        [authorDiv, 'author'],
        [imgDiv, 'img-container']
    ].forEach(([element, className]) => element.classList.add(className))

    outer.appendChild(headline)
    outer.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(image)
    authorDiv.appendChild(author)

    return outer
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(console.log)
    .catch(console.log)