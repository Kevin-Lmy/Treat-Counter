"use strict";

/****************************************************************************/
const animalData = {
  "chicken": {
    "type": "chicken",
    "normal": 2,
    "special": 29
  },
  "silkie chicken": {
    "type": "chicken",
    "normal": 1,
    "special": 30
  },
  "cow": {
    "type": "cow",
    "normal": 7,
    "special": 24
  },
  "jersey cow": {
    "type": "cow",
    "normal": 4,
    "special": 27
  },
  "yak": {
    "type": "cow",
    "normal": 4,
    "special": 45
  },
  "sheep": {
    "type": "sheep",
    "normal": 2,
    "special": 29
  },
  "suffolk sheep": {
    "type": "sheep",
    "normal": 1,
    "special": 30
  },
  "alpaca": {
    "type": "sheep",
    "normal": 1,
    "special": 35
  },
  "llama": {
    "type": "sheep",
    "normal": 1,
    "special": 40
  }
}
/****************************************************************************/

/****************************************************************************/

class Animal {
  #name;
  #type;
  #normal;
  #special;

  constructor(name, type, normal, special) {
    this.#name = name;
    this.#type = type;
    this.#normal = normal;
    this.#special =special;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }

  getType() {
    return this.#type;
  }

  setType(type) {
    this.#type = type;
  }

  getNormal() {
    return this.#normal;
  }

  setNormal(normal) {
    this.#normal = normal;
  }

  getSpecial() {
    return this.#special;
  }

  setSpecial(special) {
    this.#special = special;
  }

  giveTreat() {
    if (this.#normal > 0) {
      this.#normal--;
    } else if (this.#special > 0) {
      this.#special--;
    }
  }
};

/****************************************************************************/

function setup() {
  noCanvas();

  const animalSelect = createSelect();
  const keys = Object.keys(animalData);
  for (let i = 0; i < keys.length; i++) {
    animalSelect.option(keys[i]);
  }

  let animals = [];
  const animalParagraphs = [];

  const adddAnimalButton = createButton("Add animal");
  adddAnimalButton.mousePressed(() => {
    const key = animalSelect.value();
    const val = animalData[key];
    const animal = new Animal(key, val["type"], val["normal"], val["special"]);
    animals.push(animal);

    let pStr = `${animal.getName()} - ${animal.getNormal()} `;
    if (animal.getNormal() > 1) {
      pStr += "treats ";
    } else {
      pStr += "treat ";
    }
    pStr += `- ${animal.getSpecial()}  ${animal.getType()} `;
    if (animal.getSpecial() > 1) {
      pStr += "treats ";
    } else {
      pStr += "treat ";
    }

    animalParagraphs.push(createP(pStr));
  });

  const giveTreatButton = createButton("Give treat");
  giveTreatButton.mousePressed(() => {
    for (let i = 0; i < animals.length; i++) {
      animals[i].giveTreat();
    }

    for (let i = 0; i < animals.length; i++) {
     let pStr = `${animals[i].getName()} - ${animals[i].getNormal()} `;
      if (animals[i].getNormal() > 1) {
        pStr += "treats ";
      } else {
        pStr += "treat ";
      }
      pStr += `- ${animals[i].getSpecial()}  ${animals
        [i].getType()} `;
      if (animals[i].getSpecial() > 1) {
        pStr += "treats ";
      } else {
        pStr += "treat ";
      }
      
      animalParagraphs[i].html(pStr);
    }
  })
}

const removeAnimal = (animals, animal) => {
  return animals.filter(element => {
    return animals[i] !== element;
  });
};