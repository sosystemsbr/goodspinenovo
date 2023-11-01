<template>
  <div class="pt-16 pb-16 md:pb-28">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-6 md:mb-12 text-gray-800">Perguntas Frequentes</h2>
      <div class="flex box-grid justify-between flex-col lg:flex-row">
        <div>
          <DropDown>
            <template v-slot:question><h3>O Travesseiro pode ser usado por todas as idades?</h3></template>
            <template v-slot:answer>Sim, esse é um dos nossos diferenciais, ao contrário dos travesseiros comuns o GS11 foi pensado e desenvolvido para suprir as necessidades específicas de cada biotipo independente da idade.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>O produto possui garantia?</h3></template>
            <template v-slot:answer>Acreditamos tanto na qualidade do nosso travesseiro que somos a única empresa do Brasil à oferecer um ano de garantia para qualquer problema relacionado à estrutura do travesseiro e a matéria prima que usamos.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>Qual o tempo de entrega?</h3></template>
            <template v-slot:answer>Levamos seu GS11 ao correio em no máximo 24 horas.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>Grávidas podem usar?</h3></template>
            <template v-slot:answer>Sim, as grávidas principalmente devem usar um travesseiro anatômico com a altura ideal para dar ainda mais o suporte para a cervical e manter o alinhamento da coluna vertebral.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>Posso lavar o travesseiro anatômico universal GoodSpine?</h3></template>
            <template v-slot:answer>Junto com seu travesseiro GS11 você receberá uma capa, e somente ela pode ser lavada.</template>
          </DropDown>
        </div>
        <div>
          <DropDown>
            <template v-slot:question><h3>Como funciona a devolução em 21 dias?</h3></template>
            <template v-slot:answer>
              Comprando o travesseiro universal Gs11, você terá 21 noites para testar, caso você  não se adapte, você pode nos enviar o travesseiro de volta. <br><br>
              Uma vez que recebermos o travesseiro de volta, lhe devolveremos o dinheiro deduzindo uma taxa administrativa de 10% do valor da sua compra. <br><br>
              Lembre-se, o frete de devolução é por conta do cliente.
            </template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>Qual a forma de pagamento?</h3></template>
            <template v-slot:answer>O pagamento pode ser feito no cartão de credito em até 12 vezes, a vista o cliente pode conseguir descontos que variam de 10 a 25%.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>Vai funcionar pra mim?</h3></template>
            <template v-slot:answer>O travesseiro não é um tratamento para a coluna, porém ele pode ajudar ou atrapalhar a nossa saúde. O diferencial do GS11 é justamente oferecer a possibilidade de suprir especificamente a necessidade de cada biotipo. Um travesseiro comum tem o mesmo tamanho, independente das diferenças obvias de corpo pra corpo.</template>
          </DropDown>
          <DropDown>
            <template v-slot:question><h3>O site é seguro?</h3></template>
            <template v-slot:answer>Este site é 100% protegido contra recursos de má intenção. Suas informações pessoais são totalmente sigilosas segundo a nossa Política de Privacidade e a entrega é garantida.</template>
          </DropDown>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-grid > div {
  flex-basis: 49%;
}
</style>
