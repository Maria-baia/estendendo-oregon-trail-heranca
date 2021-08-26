# Entrega - Estendendo o Oregon Trail com Herança

Relembre como usar herança/delegação para estender um objeto de classe criando uma nova variação da classe original. Aqui está um exemplo:

```js
class Dog {
   constructor(name, breed, isGoodBoy) {
      this.name = name;
      this.breed = breed;
      this.isGoodBoy = isGoodBoy;
   }

   sit() {
       // sitting code here
   }
}
 
class GuardDog extends Dog {
   constructor(name, breed, isGoodBoy, attackWord) {
      super(name, breed, isGoodBoy)
      this.attackWord = attackWord;
   }

   bark() {
      // barking code here
   }
}
```

Nesta Entrega, você irá estender seu código do Oregon Trail para usar herança para criar dois novos tipos de viajantes: `Hunter` (Caçador) e `Doctor` (Médico). Eles terão **todas** as outras características de qualquer outro **Viajante**, com essas diferenças:

## Hunter

Um Caçador é um Viajante que se dá melhor encontrando comida, mas também precisa de mais comida. Ele começa com 2 comidas em vez de apenas 1 como os outros viajantes. Ele também pode dar comida para outros viajantes:

### Método `hunt()`

Aumente a comida do caçador em 5. (Um viajante convencional ganha apenas 2.)

### Método `eat()`

Consome 2 unidades da comida do caçador. Se um caçador não tiver 2 comidas quando for instruído a comer, ele come o quanto puder (0 ou 1 unidade), mas o caçador não fica mais saudável. (Um viajante normal come apenas 1 unidade de comida.)

### Método ``giveFood(traveler, numOfFoodUnits)``

Transfere `numOfFoodUnits` do caçador para outro viajante. Se o caçador tiver menos comida do que foi instruído a dar, então nenhuma comida é transferida.

## Doctor

Um médico é um **viajante** que se dá melhor curando outros viajantes, como médico ele deve curar outros viajantes para que eles possam seguir a viagem saudável. Ele possui apenas um método.

### Método ``heal(traveler)``

Este método cura viajantes doentes fazendo com que eles sigam viagem saudáveis.Nesta etapa um viajante será passado como parâmetro para o método .heal(), para viajantes doentes, a propriedade isHealthy do viajante deverá mudar para true. Para viajantes que não estão doentes a saúde do mesmo, deve continuar como verdadeiro

## Teste

No repositório clonado foi disponibilizado os testes desenvolvidos nos vídeos de BDD para **Traveler**, e também para **Wagon**, de uma maneira muito mais complexa.

Sendo assim, diferente da primeira atividade do Oregon Trail, nessa será necessário criar o BDD — Features e Steps — para cada uma das novas classes estendidas de Traveler.

1. Cada nova Classe deve ter um arquivo de Feature e de Step;  
2. A Classe de Hunter deve ter ao menos 5 Cenários;
3. A Classe de Doctor deve ter ao menos 2 Cenários;  
4. Wagon e Traveler devem passar nos testes;  
5. Hunter e Doctor devem passar nos testes.
   
Talvez seja necessário alterar seu antigo código do Oregon Trail para passar nos testes feitos para eles.  

**OBS: Não é necessário se preocupar com o formato ao qual foi desenvolvido o teste de Wagon. Ele está ali apenas para consulta. Se quiser se aprofundar mais no conteúdo, busque pelo material complementar no canvas**

## Possiveis problemas

1. Lembre-se de verificar o tipo de dado que as funções estão recebendo.
2. Verifique se os dados recebidos não precisam de nenhum tipo de conversão em suas funções.
3. Verifique se suas classes estão recebendo todos os parametros necessários.

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/oregon-trail-with-bdd) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado..

