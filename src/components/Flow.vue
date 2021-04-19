<template>
    <section class="flow">
        <article class="item">
            <div class="details">
                <p class="date"> {{ flowItem.date }} </p>
                <p class="info"> {{ flowItem.info }} </p>
                <p class="owner"> -{{ flowItem.owner }} </p>
            </div>
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
        display: block;
        margin: 5px 0;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
    }
    .date {
        height: 25px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;

        letter-spacing: 0.04em;

        color: rgba(0, 0, 0, 0.6);
    }

    .info {
        font-size: 20px;
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
        display: inline;

    }

</style>