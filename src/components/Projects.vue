<template>
  <div>
    <section class="project-section section" id="projects" data-aos="zoom-in-left">
      <h2 class="center-text title">Check out some of my projects!</h2>
      <ul>
        <li v-for="projects in $page.projects.edges" :key="projects.id">
          <g-link :to="projects.node.path">{{ projects.node.title }}</g-link>
          <ul>
            <li>Description: {{ projects.node.description }}</li>
            <li>Technologies Used: {{ projects.node.tech }}</li>
            <li>Github Link: {{ projects.node.github }}</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<page-query>
query Contents{
projects: allprojects{
    edges{
      node{
        id
        title
        tech
        github
        description
        path
      }
    }
  }
}
  
  </page-query>


<script>
export default {
  name: "Projects"
};
</script>

<style lang="scss" scoped>
</style>