//dynamic
const input = ' 4 Milk, 7 250ml of water, 10 roses, Singha, 4 300 ml of hoegaarden';

//config
const category = {
    "beverage" : ['milk', 'water', 'coke', 'pepsi'],
    "beer" : ['singha', 'hoegaarden']
}

// --------------------
// function
// --------------------

//#1 split sentance
// do something
let msg = input.split(",");

msg.forEach(getItem => {
    let amount = getItem.split(" ", 2).join(" ");
    let item = getItem.slice(3);

        if (isNaN(amount) == true) {
            console.log(Number("1"));
        } else {
            console.log(amount);
            console.log(item);
        }   
        
        function groupBy(category, item) {
            return category.reduce(function (acc, obj) {
              let key = obj[item]
              if (!acc[key]) {
                acc[key] = []
              }
              acc[key].push(obj)
              return acc 
            }, {}) 
          }
        let groupitem = groupBy(category)
        console.log(groupitem);
});



//#2 extract quantity
// do something

//#3 grouping item
// do something

// --------------------
// expected output
// --------------------

/* output: [
    {
        "item" : "milk",
        "quantity" : "4",
        "category" : "beverage"
    },
    {
        "item" : "250ml of water",
        "quantity" : "7",
        "category" : "beverage"
    },
    {
        "item" : "roses",
        "quantity" : "4",
        "category" : "default"
    },
    {
        "item" : "singha",
        "quantity" : "1",
        "category" : "beverage"
    },
    {
        "item" : "300 ml of hoegaarden",
        "quantity" : "4",
        "category" : "beverage"
    }
] */