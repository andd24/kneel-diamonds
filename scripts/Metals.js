import { getMetals, setMetal } from "./dataAccess.js"

const metals = getMetals()
let clickMetalId = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            // window.alert(`User chose metal ${event.target.value}`)
            clickMetalId = parseInt(event.target.value)
            setMetal(parseInt(event.target.value))
        }
    }
)   

export const Metals = () => {
    let html = "<ul>"

    for (const metal of metals) {  
        let clicker = (clickMetalId === metal.id) ?       
            `<li> 
                <input type="radio" name="metal" value="${metal.id}" checked /> ${metal.metal}
            </li>` :
            `<li>    
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
            html += clicker
        }
    html += "</ul>"
    return html
}

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        clickMetalId = 0
    }
})

