<template>
  <div>
    <p class="title">Стоимость карт</p>
    <div v-for="(card, idx) in cards" :key="idx" class="legend">
      <img class="image" :src="`src/assets/images/${card.image}.jpg`" alt="" />
      <p class="text">{{ card.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "number",
          description: " - Все карты с цифрами - подсчет по цифрам на карте",
        },
        {
          image: "plus-one",
          description: " - Карта 'Возмите одну' - 10 очков",
        },
        {
          image: "plus-five",
          description: ' - Карта "Возмите пять" - 20 очков',
        },
        {
          image: "change-direction",
          description: ' - Карта "Смените направление" - 20 очков',
        },
        {
          image: "skip",
          description: ' - Карта "Пропустите ход" - 20 очков',
        },
        {
          image: "everyone-skips",
          description: ' - Карта "Все пропускают ход" - 30 очков',
        },
        {
          image: "coup",
          description: ' - Карта "Переверните" - 20 очков',
        },
        {
          image: "wild-card",
          description: " - Дикая карта - 40 очков",
        },
        {
          image: "plus-two",
          description: ' - Дикая карта "Возмите две" - 50 очков',
        },
        {
          image: "take-color",
          description:
            ' - Дикая карта "Берите пока не вытяните нужный цвет" - 60 очков',
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0px 0px 0px;
}
.legend {
  display: flex;
  margin: 10px 0px 0px 50px;
  justify-content: left;
  align-items: center;
  gap: 20px;
}
.image {
  max-height: 60px;
  box-shadow: 0px 0px 10px 1px grey;
}

.text {
  font-size: 19px;
}
</style>
