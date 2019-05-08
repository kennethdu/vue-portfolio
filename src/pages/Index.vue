<template>
  <Layout>
    <!-- Start of Header -->

    <h1 class="center-text">Hello, welcome to my website!</h1>

    <h1 class="center-text">I am a Junior Web Developer</h1>

    <img src="../images/Profile.jpg" alt="Profile" id="profile">

    <h3 class="center-text">My name is Kenneth Du!</h3>
    <p class="center-text" >I am hardworking web developer, who is motivated to self-development in order to deliver results. I consider traveling to be a passion in my life, so being flexible is one of the skills that I have acquired. It has changed my perspective on the world and has allowed me to become personable to naturally excel in unfamiliar situations. I enjoy experiencing and embracing other cultures and believe in the importance of cultural diversity.</p>
    <!-- End of Header -->

    <!-- Start of About Me (Journey, Hobbies) -->
    <div class="about-section">
      <h2 class="center-text">Get to know more about me!</h2>
      <!-- Add known technolgies -->
      <h3 class="tech-section">Here is a list of technolgies that I have practice with:</h3>
      <ul v-for="tech in $page.tech.edges" :key="tech.id">
        <ul>
          <li>Name: {{ tech.node.title }}</li>
          <li>Technology Type : {{ tech.node.type }}</li>
        </ul>
      </ul>
      <!-- Journey -->
      <h3 class="center-text journey-section">Get to know my journey!</h3>

      <p>I am a recent graduate of a 7 month long intensive programming bootcamp called Epicodus. I also recently completed an internship at a software company called Soro, where I assisted with Front End Development of an internal web application. I love to learn and implement new technologies. Nowadays, you can find me trying to stay on top of technologies by listening to podcasts and reading new articles. I am a big fan of Javascript. I strive to mentor those around me and push to deliver the best possible work</p>
      <!-- Hobbies -->
      <h3 class="center-text hobbies-section">Here are a few of my hobbies</h3>
      <ul v-for="hobbies in $page.hobbies.edges" :key="hobbies.id">
        <ul>
          <li>Hobby: {{ hobbies.node.title }}</li>
          <li>Description : {{ hobbies.node.description }}</li>
        </ul>
      </ul>
    </div>
    <!-- End of About Me (Journey, Hobbies) -->

    <!-- Start of Projects -->
    <div class="project-section">
      <h2 class="center-text">Check out some of my projects!</h2>
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
    </div>
    <!-- End of Projects -->

    <!-- Start of Contact -->
    <div class="contact-section">
      <h2 class="center-text">Contact Me!</h2>
      <h2 class="center-text">These are the best ways to get into contact!</h2>
      <ul class="contact-details contact-section">
        <li>
          <a href="mailto:kennethdu3@gmail.com">kennethdu3@gmail.com</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kenneth-du/" target="_blank" rel="noopener">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/kennethdu" target="_blank" rel="noopener">Github</a>
        </li>
      </ul>
    </div>
    <!-- End of Contact -->
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
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="css">
#profile {
  width: 25%;
  height: 25%;
  transform: rotate(90deg);
  margin-left: 18rem;
}

.contact-section {
  list-style-type: none;
}

.contact-details {
  /* margin-right: 10em; */
  /* justify-content: left; */
  /* display: flex; */
}
</style>
