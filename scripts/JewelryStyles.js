import { getStyles, setStyle } from "./dataAccess.js"

const styles = getStyles()
let clickStyleId = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            // window.alert(``)
            clickStyleId = parseInt(event.target.value)
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    for (const style of styles) {  
        let clicker = (clickStyleId === style.id) ?       
            `<li> 
                <input type="radio" name="style" value="${style.id}" checked /> ${style.style}
            </li>` :
            `<li>    
                <input type="radio" name="style" value="${style.id}" /> ${style.style}
            </li>`
            html += clicker
        }

    html += "</ul>"
    return html
}

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        clickStyleId = 0
    }
})
