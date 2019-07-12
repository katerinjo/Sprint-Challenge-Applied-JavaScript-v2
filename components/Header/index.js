// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(data) {
    const [outer, date, title, temperature] = ['div', 'span', 'h1', 'span'].map(tag => document.createElement(tag))

    date.textContent = data.date
    title.textContent = data.title
    temperature.textContent = `${data.temperature}°`

    outer.classList.add('header')
    date.classList.add('date')
    temperature.classList.add('temp')

        ;
    [date, title, temperature].forEach(outer.appendChild.bind(outer))

    return outer
}

document.querySelector('.header-container').appendChild(Header({
    title: 'Lambda Times',
    date: 'MARCH 28, 2019',
    temperature: 98
}))