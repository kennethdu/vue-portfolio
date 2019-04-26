<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    
    <h1 class="center-text">Hello, welcome to my portfolio page!</h1>

    <img src="../images/Profile.jpg" alt="Profile" id="profile">
   
    <p class="center-text">
      Thank you for stopping by!
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

.center-text{
  text-align: center;
}

#profile {
  width: 25%;
  height: 25%;
  transform: rotate(90deg);
  margin-left: 18rem;
}
</style>
