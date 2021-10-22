import { getOrders, getMetals, getStyles, getSizes, getTypes } from "./dataAccess.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    let totalCost = foundMetal.price
    
    const sizes = getSizes()
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    totalCost += foundSize.price
    
    const styles = getStyles()
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    ) 
    totalCost += foundStyle.price

    const types = getTypes()
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    totalCost = totalCost * foundType.priceMultiplier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
       
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    
    html += "</ul>"

    return html
}

