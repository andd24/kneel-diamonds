import { getSizes, setSize } from "./dataAccess.js"

const sizes = getSizes()
let clickSizeId = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            // window.alert(``)
            clickSizeId = parseInt(event.target.value)
            setSize(parseInt(event.target.value))
            
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    for (const size of sizes) {  
        let clicker = (clickSizeId === size.id) ?       
            `<li> 
                <input type="radio" name="size" value="${size.id}" checked /> ${size.carets}
            </li>` :
            `<li>    
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </li>`
            html += clicker
        }

    html += "</ul>"
    return html
}

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        clickSizeId = 0
    }
})



