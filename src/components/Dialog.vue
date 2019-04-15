<template>
<!-- 公告中的展示页 -->
    <mu-container>
  <mu-dialog width="360" transition="slide-bottom" fullscreen :open="parentmsg">
    <mu-appbar color="primary" :title="tranlist.item">
      <mu-button slot="left" @click.stop="closeFullscreenDialog">
        <mu-icon value="close"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div style="padding: 24px;">
      <Show v-bind:userShowId="tranlist.id"></Show>
    </div>
  </mu-dialog>
</mu-container>
</template>

<script>
import Show from '@/components/Show'

export default {
  props:["parentmsg","tranlist"],
  data () {
    return { 
    };
  },
  methods: {
    closeFullscreenDialog () {
     this.$emit("fun", false)
    }
  },
  components:{
    Show
  }
};
</script>