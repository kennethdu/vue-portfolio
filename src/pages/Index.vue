<template>
  <Layout>
    <Header/>
    <!-- <About/> -->
    <Journey/>
    <Hobbies/>
    <Projects/>
    <Contact/>
  </Layout>
</template>

<page-query>

query Content{
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
	tech: alltech{
    edges{
      node{
        title
        type
      }
    }
  }
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
import Header from "../components/Header";
import Journey from "../components/Journey";
import About from "../components/About";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Contact from "../components/ContactInfo";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    About,
    Contact,
    Projects,
    Journey,
    Hobbies,
    Header
  }
};
</script>

<style lang="css">
</style>
