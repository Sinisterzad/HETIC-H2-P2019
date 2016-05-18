<style lang="stylus" src="./ProjectListItem.styl"></style>

<template>

  <li class="project-list-item" :style="{ backgroundImage: `url(${imgSrc})` }">
    <a class="project-list-item-wrap" v-link="{ name: 'project_component', params: { projectId: project_id } }">

      <div class="project-list-item__infos" :style="{ color: project_data.colors.text }">
        <h3 class="project-list-item__title">{{ project_data.title }}</h3>
        <h4 class="project-list-item__subtitle">{{ project_data.subtitle }}</h4>
        <p class="project-list-item__description">{{ project_data.description | truncate 180 }}</p>
      </div>

    </a>
  </li>

</template>

<script>

export default {

  props: ['project_id', 'project_data'],

  data() {
    return {
      imgSrc: require(`images/projects/${this.project_data.cover}`)
    }
  },

  filters: {

    truncate(value, limit) {
      return _.truncate(value, {
        length: limit,
        omission: '...',
        separator: /,? +/
      })
    }

  }

}

</script>