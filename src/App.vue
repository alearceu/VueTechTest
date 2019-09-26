<template>
  <div id="app">
    <div class="centered-container">
      <md-content class="md-elevation-3">
        <PersonalData />
        <Dialog />
      </md-content>
    <div class="background" />
    </div>
  </div>
</template>

<script>
//import both components to the main App
import PersonalData from './components/PersonalData.vue'
import Dialog from './components/Dialog.vue'

export default {
  name: 'app',
  components: {
    PersonalData,
    Dialog
  }
}
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding:50px;
  .actions {
    .md-button {
      margin: 0;
    }
  }
}

.form {
  margin-bottom: 60px;
}
  
.md-content {
  z-index: 1;
  width: 100%;
  max-width: 800px;
  position: relative;
}

.md-card{
  width: -webkit-fill-available;
}

.md-subheading{
  font-weight: bold !important;
}

.button-add {
  color:darkturquoise !important;
}
</style>
