<template>
  <div>
    <section class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="header">
          <div data-aos="zoom-up" class="center-text title">
            <h1>Hello, welcome to my website!</h1>
            <h1>I am a Junior Web Developer</h1>
            <h2>My name is Kenneth Du!</h2>
          </div>
          <img src="../images/Profile.jpg" alt="Profile" id="profile">
          <h2
            class="center-text subtitle is-9"
            data-aos="zoom-in-down"
          >I am hardworking web developer, who is motivated to self-development in order to deliver results. I consider traveling to be a passion in my life, so being flexible is one of the skills that I have acquired. It has changed my perspective on the world and has allowed me to become personable to naturally excel in unfamiliar situations. I enjoy experiencing and embracing other cultures and believe in the importance of cultural diversity.</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="css" scoped>

#profile {
  width: 200px;
  height: 150px;
  transform: rotate(90deg);
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* padding: 10px; */
  margin-bottom: 2rem;
  margin-top: 1rem;
  /* display: inline; */
}


</style>