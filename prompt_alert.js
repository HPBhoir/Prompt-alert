








function total(){
    alert("Are you hungry? Press OK if yes")
    let i = parseInt(prompt("Item number:"))
    let q = parseInt(prompt("How many?"))
    
    item_price = [400,250,100,100]
    ip = item_price[i-1]
    ir = ip*q
    gst = ir*0.09
    cst = ir*0.1

    total = ir + gst + cst;
    alert(total)
}
total();