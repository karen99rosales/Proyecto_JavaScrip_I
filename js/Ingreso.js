class Ingreso extends Dato
{
    static contadorIngresos = 0;

    constructor(descripcion, valor)
    {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    //Metodo get id
    get id()
    {
        return this._id;
    }
}