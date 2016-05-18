<style lang="stylus" src="./Project.styl"></style>

<template>
  <div>

    <header class="wrapper project-header" :style="{ backgroundColor: projectData.colors.background, color: projectData.colors.text }">
      <h2 class="project-header__title">{{ projectData.title }}</h2>
      <h3 class="project-header__subtitle">{{ projectData.subtitle }}</h3>
      <p class="project-header__description">{{ projectData.description }}</p>
      <div class="project-header__link-wrap">
        <div class="svg-wrap">
          <svg :style="{ fill: projectData.colors.text }">
            <use xlink:href="#icon-link"></use>
          </svg>
        </div>
        <a class="project-header__link" :href="projectData.url" :style="{ color: projectData.colors.text }" target="_blank">{{ projectData.url | shrinkUrl }}</a>
      </div>
    </header>

    <div class="project-content">
      <div class="wrapper">
        <section class="project-content-item" v-for="projectDetail of projectData.details">
          <div class="project-content-item__text" v-if="projectDetail.title || projectDetail.subtitle">
            <div>
              <h4 class="project-content-item__title" v-if="projectDetail.title">{{ projectDetail.title }}</h4>
              <h5 class="project-content-item__subtitle" v-if="projectDetail.subtitle">{{ projectDetail.subtitle }}</h5>
            </div>
            <p class="project-content-item__description">{{ projectDetail.description }}</p>
          </div>
          <div class="project-content-item__thumb lazyload" data-expand="-100" v-for="thumb of projectDetail.thumbnails">
            <img class="lazyload" :data-src="imgDetailSrc(thumb)" :alt="thumb">
          </div>
        </section>
      </div>
    </div>

  </div>
</template>

<script>

import projects from 'projects.json'

export default {

  data() {
    return {
      projectData: projects[this.$route.params.projectId]
    }
  },

  filters: {

    shrinkUrl(value) {
      return value.replace(/^https?\:\/\//i, '')
    }

  },

  methods: {

    imgDetailSrc(value) {
      return require(`images/projects/${value}`)
    }

  }

}

</script>