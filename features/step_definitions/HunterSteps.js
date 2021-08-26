const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string
});
Given('ele começa a viagem com {int} refeição', function (int) {
    cacador.food = int;
});

Given('ele começa a viagem saudável.', function () {
    cacador.isHealthy = true;
});

When('o Hunter sair para caçar {int} vezes', function (int) {
    for( let i=0; i<int; i++){
        cacador.hunt()
    }
});
When('o Hunter parar para comer {int} vezes', function (int) {
    for(let i=0; i<int; i++){
        cacador.eat()
    }
});
When('o Hunter der comida {int} vezes a outro Traveler', function (int) {
    for(let i=0; i<int; i++){
        cacador.giveFood()
    }
});


Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});
Then('a quantidade de refeições deve ser {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});
Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)    
});
Then('a quantidade de refeições do Traveler deve ser {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});
