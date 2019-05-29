<template>
  <div class="container">
    <nav class="navbar is-white">
      <div class="navbar-brand">
        <strong>
          <g-link class="button" to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end navbar-menu" id="navbarBasicExample">
        <a class="button navbar-item" to="/">Home</a>
        <a class="button navbar-item" v-scroll-to="'#journey'">Journey</a>
        <a class="button navbar-item" v-scroll-to="'#projects'">Projects</a>
        <a class="button navbar-item" v-scroll-to="'#hobbies'">Hobbies</a>
        <a class="button navbar-item" v-scroll-to="'#contact'">Contact Me</a>
      </div>
    </nav>
    <slot/>
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
.center-text {
  text-align: center;
}

/* .nav__link {
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
} */
</style>
