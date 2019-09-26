<template>
  <div>
    <!--Diálogo que muestra la comunicación con el Form por medio del store-->
    <!--Carga la lista de los usuarios desde el store y muestra cada usuario-->
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-content>
        <md-dialog-title>Usuarios</md-dialog-title>
        <md-tabs md-dynamic-height>
          <md-tab md-label="Información">
            <ul>
            <div v-for="user in allUsers"  :key="user.idNumber">
              <li>
                {{user}}
              </li>
            </div>
            </ul>
          </md-tab>
        </md-tabs>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Cerrar</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-button class="button-add md-raised" @click="open">Mostrar Usuarios</md-button>
  </div>
</template>

<script>
//Para usar el store
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'DialogCustom',
  data: () => ({
    showDialog: false
  }),
  methods: {
    //Acción a llamar del store
    ...mapActions('userModule',["getUsers"]),
    //Carga los usuarios y abre la ventana de diálogo
    open(){
      this.getUsers();
      this.showDialog = true;
    }
  },
  //Getter del store
  computed: mapGetters('userModule',["allUsers"])
};
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>