class Phone {
    constructor(id, name, manufacturer, price) {
        this._id = id;
        this._name = name;
        this._manufacturer = manufacturer;
        this._price = price;
    }

    
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    
    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(value) {
        this._manufacturer = value;
    }

    
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    toString() {
        return `Mã điện thoại: ${this._id}, Tên: ${this._name}, Hãng sản xuất: ${this._manufacturer}, Giá: ${this._price}`;
    }

}