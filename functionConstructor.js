//1
function Address(city, street, buildingNumber){
    this.city = city
    this.street = street
    this.buildingNumber = buildingNumber
}

//2
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName
    }
}

//3
function Customer(firstName, lastName, newCity, newStreet, newBuildingNumber){
    Person.call(this, firstName, lastName)
    this.address = new Address(newCity, newStreet, newBuildingNumber)
}

Customer.prototype = Object.create(Person.prototype)

Customer.prototype.customerDetails = function(){
    return(this.getFullName() + " lives in " + this.address.city + " " + this.address.street + " " + this.address.buildingNumber )
}

const firstCustomer = new Customer('shir', 'yahav', 'rishon', 'paul berg', 5)
console.log(firstCustomer.customerDetails())

//4
function Item(itemName, itemID, itemPrice){
    this.itemName = itemName
    this.itemID = itemID
    this.itemPrice = itemPrice
}

//5
function Order(orderId, firstName, lastName, newCity, newStreet, newBuildingNumber){
    this.orderId = orderId
    this.items = []
    this.customerDetails = new Customer(firstName, lastName, newCity, newStreet, newBuildingNumber)
}

Order.prototype = Object.create(Customer.prototype)

Order.prototype.addItemToOrder = function(itemName, itemID, itemPrice){
    let newItem = new Item(itemName, itemID, itemPrice)
    this.items.push(newItem)
}

Order.prototype.getTotalPrice = function(){
    let itemsPrices = this.items.map(obj =>{
        return obj.itemPrice
    })
    let totalPrice = itemsPrices.reduce(( previousValue, currentValue ) => previousValue + currentValue,
    0)
    return(totalPrice)
}
//console.log(getTotalPrice)


const firstOrder = new Order(1, 'shir', 'yahav', 'rishon', 'paul berg', 5)
console.log(firstOrder.addItemToOrder('book', 6, 55))
console.log(firstOrder.addItemToOrder('cup', 2, 34))
console.log(firstOrder)


