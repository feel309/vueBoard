<template>
  <div class="debug">
    <p>✅ 현재 읽음 상태: <strong>{{ readState ? '읽음' : '안 읽음' }}</strong></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['readState'])
  }
}
</script>

<style scoped>
.debug {
  margin-top: 20px;
  padding: 10px;
  background: #eee;
  border-radius: 8px;
  font-size: 0.9em;
}
</style>