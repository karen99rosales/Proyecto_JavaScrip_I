const _private = new WeakMap();

class Dato 
{
    constructor(descripcion, valor)
    {
        const properties = {
            descripcion: descripcion,
            valor: valor
        }
        _private.set(this, {properties});
    }

    //Metodos get y set
    get descripcion()   
    {
        return _private.get(this).properties.descripcion;
    }
    set descripcion(descripcion)
    {
        _private.get(this).properties.descripcion = descripcion;
    }

    get valor()
    {
        return _private.get(this).properties.valor;
    }
    set valor(valor)
    {
        _private.get(this).properties.valor = valor;
    }
}

