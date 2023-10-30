const reactElement = {
    type: 'a',
    value: 'Click me',
    props: {
        href: 'http://google.com',
        target: '_blank'
    }
}

const mainContainer = document.querySelector('#root')

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.value
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    console.log('benchdod')
}

customRender(reactElement, mainContainer)