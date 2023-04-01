export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimunFractionDigitis: 0
}
)

export const addingHours = Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}