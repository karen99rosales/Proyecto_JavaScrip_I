const d = document;

let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000),
    new Ingreso('Algo', 2000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800),
    new Egreso('Un dato mas', 600)
];



const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of Object.values(ingresos)) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of Object.values(egresos)) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
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

const cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();

    const $presupuesto = d.getElementById("presupuesto");
    console.log($presupuesto);
    const $ingresos = d.getElementById("ingresos");
    console.log($ingresos);
    const $egresos = d.getElementById("egresos");
    console.log($egresos);
    const $porcentaje = d.getElementById("porcentaje");
    console.log($porcentaje);

    $presupuesto.innerHTML = `<p>${formatoMoneda(presupuesto)}</p>`;
    $porcentaje.innerHTML = `<p>${formatoPorcentaje(porcentajeEgreso)}</p>`;
    $ingresos.innerHTML = `<p>${formatoMoneda(totalIngresos())}</p>`;
    $egresos.innerHTML = `<p>${formatoMoneda(totalEgresos())}</p>`;
}

function cargarApp() {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const cargarIngresos = () => {
    let ingresosHTML = "";

    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    const $listaIngresos = d.getElementById("lista-ingresos");
    $listaIngresos.innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">
                <p>${ingreso.descripcion}</p>
            </div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    <p>${formatoMoneda(ingreso.valor)}</p>
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return ingresoHTML;
}

const cargarEgresos = () =>
{
    let egresosHTML = "";

    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }

    const $listaEgresos = d.getElementById("lista-egresos");
    $listaEgresos.innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">
                <p>${egreso.descripcion}</p>
            </div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    <p>${formatoMoneda(egreso.valor)}</p>
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return egresoHTML;
}

const eliminarEgreso = (id) =>
{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarEgresos();
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarIngresos();
}

const agregarDato = () => {
    const $forma = d.getElementById("forma");
    const tipo = d.getElementById("tipo").value;
    const descripcion = d.getElementById("descripcion").value;
    const valor = parseFloat(d.getElementById("valor").value);

    if (descripcion !== "" && valor !== "") {
        if (tipo === "ingreso") {
            ingresos.push(new Ingreso(descripcion, valor));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo === "egreso") {
            egresos.push(new Egreso(descripcion, valor));
            cargarCabecero();
            cargarEgresos();
        }

        // Limpiar campos del formulario
        d.getElementById("descripcion").value = "";
        d.getElementById("valor").value = "";
    }
}
//cargarCabecero();
// // console.log(presupuesto);
// // console.log(porcentajeEgreso);
// console.log(totalIngresos());
// console.log(totalEgresos());
console.log(formatoMoneda(123456.789));
console.log(formatoPorcentaje(0.1234));