const reactElement = {
    type: 'a',
    value: 'Click me',
    props: {
        href: 'http://google.com',
        target: '_blank'
    }
}

const mainContainer = document.querySelector('#root')

/* Manual way to render a component on the webpage

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.value
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    console.log('benchdod')
}
customRender(reactElement, mainContainer)

*/

// Efficient way to render components with DRY principle

function customRender(reactElement, container){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.value
for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domElement)
}

customRender(reactElement, mainContainer)