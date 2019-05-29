<template>
  <div>

    <section class="section about-section center-text">
      <h2 class="title" data-aos="flip-up">Get to know more about me!</h2>
      <h3
        class="tech-section subtitle"
        data-aos="flip-up"
      >Here is a list of technolgies that I have practice with:</h3>
    </section>

    <!-- <section class="section tech-section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article
            class="tech-details tile is-child box"
            v-for="tech in $page.tech.edges"
            :key="tech.id"
          >
            <p data-aos="zoom-in-up">Name: {{ tech.node.title }}</p>
            <p data-aos="zoom-in-down">Technology Type : {{ tech.node.type }}</p>
          </article>
        </div>
      </div>
    </section> -->
  </div>
</template>

<page-query>
query Content {
  	tech: alltech{
    edges{
      node{
        title
        type
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "About"
};
</script>

<style lang="css">

</style>