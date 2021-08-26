const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { medico } = require("./../../app");
const { viajante } = require("./../../app");

Given('um Doctor de nome {string}', function (string) {
    medico.name = string
});
Given('o Doctor começa a viagem com {int} refeição', function (int) {
    medico.food = int;
});

Given('o Doctor começa a viagem saudável.', function () {
    medico.isHealthy = true;
});

When('o Doctor verificou a saúde de um Traveler', function () {
    medico.heal(viajante)
});
When('o Traveler não estava saudável', function () {
    medico.heal(viajante) === false
});
When('o Traveler estava saudável', function () {
    medico.heal(viajante) === false
});

Then('o Doctor curou o Traveler', function () {
    assert.strictEqual(viajante.isHealthy, true)
});
Then('a saúde do Traveler contiuou a mesma', function () {
    assert.strictEqual(viajante.isHealthy, true)
});
