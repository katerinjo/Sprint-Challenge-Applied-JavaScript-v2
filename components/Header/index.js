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
    const [outer, date, title, temperature] =
        ['div', 'span', 'h1', 'span'].forEach(tag => document.createElement(tag))

    date.textContent = data.date
    title.textContent = data.title
    temperature.textContent = data.temperature

    outer.classList.append('header')
    date.classList.append('date')
    temperature.classList.append('temp')

        ;
    [date, title, temperature].forEach(outer.appendChild)

    return outer
}
