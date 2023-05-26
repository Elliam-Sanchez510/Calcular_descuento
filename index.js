function calcular() {
    const totalCompra = parseFloat(document.getElementById("totalCompra").value);

    let descuento = 0;
    let impuesto = 0;

    if (totalCompra >= 1000) {
        descuento = totalCompra * 0.15;
    } else if (totalCompra >= 2000) {
        descuento = totalCompra * 0.12;
    } else if (totalCompra >= 5000) {
        descuento = totalCompra * 0.08;
    }

    impuesto = totalCompra * 0.15/100;

    const totalPagar = totalCompra - descuento + impuesto;

    document.getElementById("descuento").textContent = descuento.toFixed(2);
    document.getElementById("impuesto").textContent = impuesto.toFixed(2);
    document.getElementById("total").textContent = totalPagar.toFixed(2);
}