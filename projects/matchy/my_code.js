var animal = {};
animal.species = "dog";
animal['name'] = "Roux";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "woof";
noises.push("yelp");
noises.unshift("bark");
noises[noises.length] = "gerrr";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal['noises'] = noises;
animal.noises.push('howl');
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
console.log(animals);

var cat = {
    species: 'cat',
    name: 'Bella',
    noises: ['purr', 'meow', 'sneeze', 'hiss']
};

var bird = {
    species: 'bird',
    name: 'Mystic',
    noises: ['chrip', 'tweet', 'sneeze', 'caw']
};

animals.push(cat, bird);
console.log(animals);
console.log(animals.length);

let friends = [];
// chose an array so we can have multiple objects within the array. 
// an array is more accesible and you can access information within the array 
// in multiple ways.

function getRandomAnimal(animals) {
    return animals[Math.floor(Math.random() * animals.length)].name;
}

friends.push(getRandomAnimal(animals));

console.log(friends);

cat.friends = friends; 

function search(name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            return animals[i];
        } 
        
    }
    return null;
}

function edit(name, obj) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals[i] = obj;
        }
    }
}

function remove(name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice(i, 1);
        }
    }
}

function create(obj) {
    if (obj.name.length > 0 && obj.species.length > 0) {
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].name.toLowerCase() !== obj.name.toLowerCase()) {
                return animals.push(obj);
            }
        }
    }
}