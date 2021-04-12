<template>
  <section class="flow">
      <article class="item">
          <p class="date"> {{ flowItem.date }} </p>
          <p> {{ flowItem.info }} </p>
          <p class="owner"> -{{ flowItem.owner }} </p>
          <div class="hashtag" v-for="hashtag in flowItem.hashtags" :key="hashtag">
              <p class="hash"> {{ hashtag }} </p>
          </div>
      </article>
  </section>
</template>

<script>
export default {
    name: 'Flow',
    props: {
        flowItem: Object
    }

}
</script>

<style scoped>

.item {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.date {
height: 22px;
font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;

letter-spacing: 0.04em;

color: rgba(0, 0, 0, 0.6);
}
.owner {
    font-weight: bold;
}
.hash {
    padding: 0.5rem;
}

.hashtag {
position: static;
width: 100px;
height: 23px;
left: 16px;
top: 4.5px;

font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;

color: rgba(0, 178, 255, 0.8);

}
</style>