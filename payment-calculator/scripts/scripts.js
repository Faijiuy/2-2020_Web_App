var data = [
    {
        product_name: "iPhone 12 Pro (128GB)",
        price: 36900.00
    },
    {
        product_name: "iPhone 11(128GB)",
        price: 22100.00
    },
    {
        product_name: "iPhone XR (128GB)",
        price: 18400.00
    },
    {
        product_name: "MacBook Pro 2020(13 inch.) - Intel Core",
        price: 59900.00
    },
    {
        product_name: "AirPods with Case Charge",
        price: 5684.00
    }
]


$(document).ready(function () {
    console.log('App is ready')
    let intRate = 0;
    let ProductName = "";

    $("#buy").submit(function (event) {
        $('input[name="product"]:checked').each(function () {
            console.log(this.value);
            ProductName = this.value;
            let getPrice = "";
            $('#display_name').html(`<p>Product Name: ${ProductName}</p>`)
            let result = data.filter(item => {
                return item.product_name === ProductName
            })
            console.log(result)
            getPrice = result.map(item => item.price);
            console.log(getPrice)
            $('#display_price').html(`<p>Price: ${getPrice} THB.</p>`)
        })
        return false;
    });

    $('#intZero').click(function () {
        console.log("Interest Rate:", this.value)
        intRate = parseFloat(this.value)
        $('#display_int').html(`<p>Chosen interest rate: ${intRate * 100} %</p>`)
    })

    $('#intFour').click(function () {
        console.log("Interest Rate:", this.value)
        intRate = parseFloat(this.value)
        $('#display_int').html(`<p>Chosen interest rate: ${intRate * 100} %</p>`)
    })

    // $('#intFive').click(function (event) {
    //     console.log("Interest Rate:", this.value)
    //     intRate = parseFloat(this.value)
    //     $('#display_int').html(`<p>Chosen interest rate: ${intRate * 100} %</p>`)
    // })

    $('#intEight').click(function () {
        console.log("Interest Rate:", this.value)
        intRate = parseFloat(this.value)
        $('#display_int').html(`<p>Chosen interest rate: ${intRate * 100} %</p>`)
    })

    $("#submit_period").click(function () {
        let pay_year = document.getElementById('payment_period').value
        let pay_month = pay_year * 12
        console.log("Pay Year", pay_year, "Pay Month", pay_month)

        let int_per_year = 0
        $('#payment_cal').html("")
        let result = data.filter(item => {
            return item.product_name === ProductName
        })

        console.log("Get Product", result)

        result.forEach(function (item) {
            int_per_year = item.price * intRate
            int_per_month = (int_per_year / 12).toFixed(2)
            totalInterest = int_per_year * pay_year
            totalPayment = item.price + totalInterest
            totalPayment_inMonth = (totalPayment / pay_month).toFixed(2)
            let percentRate = intRate * 100
            let down_pay = item.price * 0.1
            $("#display_int").html(`<p>Chosen interest rate: ${percentRate}%</p>`)
            $("#display_down").html(`Down Payment: ${down_pay} THB. <b>OR</b> 10 %.`)
            $("#display_total_pay").html(`Total Payment: ${totalPayment} THB.`)
            $("#display_total_pay_month").html(`<b>Total Payment (monthly):</b> ${totalPayment_inMonth} THB.`)
            $("#display_period_month").html(`<b>Pay for:</b> ${pay_month} months.`)
            console.log("Calculation Complete and Display")
        })
    })

})