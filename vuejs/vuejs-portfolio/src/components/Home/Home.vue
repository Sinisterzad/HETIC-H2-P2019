<style lang="stylus" src="./Home.styl"></style>

<template>
  <div>

    <div class="home-about">
      <div class="wrapper">
        <h2 class="home-subtitle">À propos</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <img v-if="gravatarProfile" class="home-about__picture" :src="`${gravatarProfile.thumbnailUrl}?s=160`" alt="">
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
      projects,
      email: 'vin.garreau@gmail.com',
      gravatarProfile: null
    }
  },

  ready() {

    this.getGravatarProfile()
    .then(response => {
      console.log(response)
      // this.gravatarProfile = response
    })
    .catch(response => {
      console.error('Error request - Gravatar', response)
    })

  },

  methods: {

    getGravatarProfile() {

      return new Promise((resolve, reject) => {

        // Avec vue-resource
        this.$http.jsonp(`https://www.gravatar.com/${md5(this.email)}.json`).then(response => {
          if (response.data.entry) resolve(response.data.entry[0])
          else reject(response.data)
        }, response => {
          reject(response.data)
        })

        // Avec jQuery
        // $.ajax({
        //   url: `https://www.gravatar.com/${md5(this.email)}.json`,
        //   dataType: 'jsonp',
        //   success(data) {
        //     if (data.entry) resolve(data.entry[0])
        //     else reject(data)
        //   },
        //   error(data) {
        //     reject(data)
        //   }
        // })

      })

    }

  }


}

</script>