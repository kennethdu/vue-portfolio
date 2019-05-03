<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="button" to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link button" to="/">Home</g-link>
        <!-- <g-link class="nav__link button" to="/journey">My Journey</g-link>
        <g-link class="nav__link button" to="/about">About Me</g-link>
        <g-link class="nav__link button" to="/projects">Projects</g-link> -->
        <g-link class="nav__link button" to="/contact">Contact Me</g-link>
      </nav>

    </header>
    <slot/>

    <!-- <div class="footer-section">
      <footer>test footer</footer>
    </div> -->
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.footer-section{
  border: red;
  border-top: red;
  border-bottom: red;
  background-color: blue;
  height: 80px;
  display: flex;
}
.center-text{
  text-align: center;
}

.nav__link {
  margin-left: 20px;
}

.button{
  background-color: black;
  color: white;
  border-radius: 8px;
  border: 4px solid black;
  cursor: pointer;
}

.button:focus {
  outline:0;
}

.button:hover {
  background-color: white;
  color: black;
}

.button:active {
  background-color: black;
  color: white;
  box-shadow: 0 3px #666;
  transform: translateY(2px);
}
</style>
