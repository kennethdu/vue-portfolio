<template>
  <div>
    <section class="section hobbies-section" id="hobbies" data-aos="zoom-in-right">
      <h3 class="center-text hobbies-section title">Here are a few of my hobbies</h3>
      <ul v-for="hobbies in $page.hobbies.edges" :key="hobbies.id">
        <ul>
          <li>
            <span class="subtitle">Hobby:</span>
            {{ hobbies.node.title }}
          </li>
          <li>
            <span class="subtitle">Description :</span>
            {{ hobbies.node.description }}
          </li>
        </ul>
      </ul>
    </section>
  </div>
</template>

<page-query>
query Content{
    hobbies: allhobbies{
    edges{
      node{
        title
        description
      }
    }
  }
}


</page-query>

<script>
  export default {
    name: 'Hobbies'
  }
</script>

<style lang="scss" scoped>

</style>