let egresos = {renta:900, ropa:400}
let ingresos = {salario:2000, venta:500}
const cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();
}

const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of Object.values(ingresos)) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of Object.values(egresos)) {
        totalEgreso += egreso;
    }
    return totalEgreso;
}


// cargarCabecero();
// // console.log(presupuesto);
// // console.log(porcentajeEgreso);
// console.log(totalIngresos());
// console.log(totalEgresos());

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
    });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2,
    });
}

console.log(formatoMoneda(123456.789));
console.log(formatoPorcentaje(0.1234));