<style lang="stylus" src="./Home.styl"></style>

<template>
  <div>

    <div class="home-about">
      <div class="wrapper">
        <h2 class="home-subtitle">À propos</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <ul class="home-about__links">
          <li><a target="_blank" href="http://linkedin.com/in/garreauvincent">LinkedIn</a></li>
          <li><a target="_blank" href="http://www.twitter.com/VincentGarreau">Twitter</a></li>
          <li><a target="_blank" href="http://vincentgarreau.com/mailto:vin.garreau@gmail.com">Email</a></li>
        </ul>
      </div>
    </div>

    <div class="wrapper">
      <h2 class="home-subtitle">Quelques projets</h2>
      <ul class="home-projects projects-list">
        <project-list-item v-for="(index, value) of projects" :project_id="index" :project_data="value"></project-list-item>
      </ul>
    </div>

  </div>
</template>

<script>

import projects from 'projects.json'
import projectListItem from 'ProjectListItem/ProjectListItem.vue'

export default {

  components: {
    'project-list-item': projectListItem
  },

  data() {
    return {
      projects
    }
  }

}

</script>