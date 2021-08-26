#language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar alimentos
    Para que eu possa me alimentar e dar aos demais
    
    Contexto:
        Dado um Hunter de nome "Kevin"
        E ele começa a viagem com 2 refeição
        E ele começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deve ser 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser -2
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser 8
        E o Hunter não ficará doente

    Cenário: Saiu para caçar, comeu e deu comida para outro Traveler
        Quando o Hunter sair para caçar 3 vezes
        E o Hunter parar para comer 1 vezes
        E o Hunter der comida 1 vezes a outro Traveler
        Então a quantidade de refeições do Traveler deve ser 15


