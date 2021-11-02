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
function Costumer(firstName, lastName, newCity, newStreet, newBuildingNumber){
    Person.call(this, firstName, lastName)
    this.address = new Address(newCity, newStreet, newBuildingNumber)
}

Costumer.prototype = Object.create(Person.prototype)

Costumer.prototype.costumerDetails = function(){
    return(this.getFullName() + " lives in " + this.address.city + " " + this.address.street + " " + this.address.buildingNumber )
}

const firstCostumer = new Costumer('shir', 'yahav', 'rishon', 'paul berg', 5)
console.log(firstCostumer.costumerDetails())

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
    Costumer.call(this, firstName, lastName, newCity, newStreet, newBuildingNumber)
}

Order.prototype = Object.create(Costumer.prototype)

Order.prototype.addItemToOrder = function(newItemName, newItemID, newItemPrice){
    let newItem = new Item(newItemName, newItemID, newItemPrice)
    this.items.push(newItem)
}

const firstOrder = new Order(1, 'shir', 'yahav', 'rishon', 'paul berg', 5)
console.log(firstOrder)
console.log(firstOrder.addItemToOrder('book', 3 , '20$'))


