<template>
  <div style="height:100%">
    <iframe
      :src="vizUrl"
      width="100%"
      height="800px"
      frameborder="0"
      scrolling="no"
      allow="fullscreen"
    />
  </div>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      default: 'HelloWorld'
    }
  },
  data() {
    return {
      vizUrl: null
    }
  },

  created() {
    this.vizUrl = 'http://pigdigital.tnong.com:8088/viz/app.php?url=' + this.url
    console.log(this.vizUrl)
  }
}
</script>
