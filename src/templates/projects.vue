<template>
  <layout>
    <div>
      <h1>{{ $page.projects.title }}</h1>
      <!-- <img :src="$page.page.featuredImage" alt="blog"> -->
      <div v-html="$page.projects.description" />
      <div v-html="$page.projects.github" />
      <div v-html="$page.projects.tech" />

    </div>
  </layout>
</template>

<page-query>
query projectDetails ($path: String!) {
  projects: projects(path: $path){
    id
    title
    github
    description
    tech
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.projects.title
    }
  }
}
</script>
