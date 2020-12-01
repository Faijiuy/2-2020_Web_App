var data = [
    {
        quantity: 1.5,
        description: 'High Grade Calcium Silicate Powder',
        unitPrice: 1000.00,
        amount: 1500.00
    },
    {
        quantity: 1,
        description: "High Grade Sodium Metaboratev",
        unitPrice: 2000.00,
        amount: 2000.00
    },
    {
        quantity: 2,
        description: "Chemical Compartment Sealing Fee",
        unitPrice: 100.00,
        amount: 200.00
    },
    {
        quantity: 1,
        description: `Chemical Transfering Cost<br/>
        For High Grade Calcium Silicate Powder<br/>
        For High Grade Sodium Metaboratev`,
        unitPrice: 200.00,
        amount: 600.00
    }
]

let shippH = 0

$(document).ready(function () {
    let count = 0
    let countB = 0
    console.log("Hello!")

    let d = new Date()
    let dateStr = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
    $('#currentDate').html(dateStr)


    renderDataTable()
    $('#btnAdd').click(function () {
        console.log("Clicked!", count)
        count++
        // let subTotal = prompt("Sub Total")
        // $('#subTotal').html(subTotal)
        let qty = prompt("Quantity")
        let d = prompt("Description")
        let p = prompt("Unit Price")
        let amt = parseFloat(qty) * parseFloat(p)
        // console.log({qty,d,p,amt})
        let item = {
            quantity: qty,
            description: d,
            unitPrice: p,
            amount: amt
        }
        console.log({ item })
        data.push(item)
        renderDataTable()
    })

    $("#btnShip").click(function() {
        console.log("Add Shipping & Handling Fee", countB)
        countB++

        let sh = prompt("Shipping & Handling Fee")
        shippH = parseFloat(sh)
        console.log("Shiping Fee: ", shippH)
        renderDataTable()
    })

})

function renderDataTable() {
    let subTotal = 0
    $('#dataTable').html("")
    data.forEach(function (item) {
        subTotal += item.amount
        let dataRow = `<tr>
    <td class="data r">${item.quantity}</td>
    <td class="data">${item.description}</td>
    <td class="data r">${item.unitPrice}</td>
    <td class="data r">${item.amount}</td>
    </tr>`
        console.log({ dataRow })
        $('#dataTable').append(dataRow)
    })

    $('#subTotal').html(subTotal.toFixed(2))

    let subTax = subTotal * 0.1
    $('#tax').html(subTax.toFixed(2))

    $('#addShipping').html(shippH.toFixed(2))

    let totalDue = subTotal + subTax + shippH
    $('#totalDue').html(totalDue.toFixed(2))

}