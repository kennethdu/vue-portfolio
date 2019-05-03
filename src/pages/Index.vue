<template>
  <Layout>

    <!-- Start of Header -->
    
    <h1 class="center-text">Hello, welcome to my portfolio page!</h1>

    <img src="../images/Profile.jpg" alt="Profile" id="profile">
   
    <h2 class="center-text">
      Thank you for stopping by! My name is Kenneth Du!
    </h2>


    <p class="center-text">I am hardworking web developer, who is motivated to self-development in order to deliver results. I consider traveling to be a passion in my life, so being flexible is one of the skills that I have acquired. It has changed my perspective on the world and has allowed me to become personable to naturally excel in unfamiliar situations. I enjoy experiencing and embracing other cultures and believe in the importance of cultural diversity.</p>

    <!-- End of Header -->
  
    <!-- Start of About Me (Journey, Hobbies) -->

    <div class="about-section">
      <h2 class="center-text">Get to know more about me!</h2>
    

      <!-- Add known technolgies -->

      <h3 class="tech-section">Here is a list of technolgies that I have practice with:</h3>

      <ul>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
      </ul>

      <!-- Journey -->

      <h3 class="center-text journey-section">Get to know my journey!</h3>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

      

      <!-- Hobbies -->
      <h3 class="center-text hobbies-section">Hobbies</h3>
      <ul>
        <li>Travel</li>
        <li>Basketball</li>
        <li>Food & Cooking</li>
      </ul>
    </div>

    <!-- End of About Me (Journey, Hobbies) -->

    <!-- Start of Projects -->

    <div class="project-section">
      <h2 class="center-text">Check out some of my projects!</h2>
      <ul>
        <li v-for="projects in $page.projects.edges" :key="projects.id">
          <g-link :to="projects.node.path"> {{ projects.node.title }} </g-link>
          <ul>
            <li>{{ projects.node.title }}</li>
            <li>{{ projects.node.description }}</li>
            <li>{{ projects.node.tech }}</li>
            <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- End of Projects -->

    <!-- Start of Contact -->

  <div class="contact-section center-text">
   <h2>Contact Me!</h2>
      <h2>These are the best ways to get into contact!</h2>
      <ul class="contact-details contact-section">
        <li><a href="mailto:kennethdu3@gmail.com">kennethdu3@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/kenneth-du/" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="https://www.github.com/kennethdu" target="_blank" rel="noopener">Github</a></li>
      </ul>
    </div>

    <!-- End of Contact -->


  </Layout>
</template>

<page-query>

query{
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
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>


#profile {
  width: 25%;
  height: 25%;
  transform: rotate(90deg);
  margin-left: 18rem;
}

.contact-section{
  list-style-type: none;
}

.contact-details{
  /* margin-right: 10em; */
  /* justify-content: left; */
  /* display: flex; */
}

</style>
