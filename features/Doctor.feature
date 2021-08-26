#language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar outros viajantes
    Para eles possam seguir a viagem saudável
    
    Contexto:
        Dado um Doctor de nome "Luis"
        E o Doctor começa a viagem com 1 refeição
        E o Doctor começa a viagem saudável.

    Cenário: Curou um Traveler
        Quando o Doctor verificou a saúde de um Traveler
        E o Traveler não estava saudável
        Então o Doctor curou o Traveler

    Cenário: Não curou um Traveler
        Quando o Doctor verificou a saúde de um Traveler
        E o Traveler estava saudável
        Então a saúde do Traveler contiuou a mesma