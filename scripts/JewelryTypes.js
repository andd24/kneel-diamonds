import { getTypes, setType } from "./dataAccess.js"

const types = getTypes()
let clickTypeId = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            // window.alert(``)
            clickTypeId = parseInt(event.target.value)
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = ""

    for (const type of types) {  
        let clicker = (clickTypeId === type.id) ?       
            `<li> 
                <input type="radio" name="type" value="${type.id}" checked /> ${type.type}
            </li>` :
            `<li>    
                <input type="radio" name="type" value="${type.id}" /> ${type.type}
            </li>`
            html += clicker
        }
    return html
}

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        clickTypeId = 0
    }
})