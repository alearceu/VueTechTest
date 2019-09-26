<template>
  <div>
    <!--Empieza el Form-->
    <!--Los md-layout-item que necesitan ser responsive tienen su indicador de % tamaño para el de pantalla-->
    <!--getValidationClass agrega a los fields Nombre, Email, Teléfono su validación correspondiente-->
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card >
        <!--Header del primer Card (Datos Personales) del Form-->
        <md-card-header>
          <div class="md-subheading">Datos personales</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <!--Avatar para la foto del usuario-->
            <div class="md-layout-item md-size-15">
              <md-avatar class="md-avatar-icon md-large">
                  <font-awesome-icon icon="camera" />
              </md-avatar>
            </div>
            <!--Nombre-->
            <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100">
              <md-field :class="getValidationClass('firstName')">
                <md-input class="biggerLabel" id="name" placeholder="Nombre*" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">El nombre es requerido</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Nombre inválido</span>
              </md-field>
            </div>
            <!--Apellidos-->
            <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100">
              <md-field>
                <md-input class="biggerLabel" id="name" placeholder="Apellidos" v-model="form.lastName" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <!--Espacio para el avatar de la fila superior-->
            <div class="md-layout-item md-size-15"/>
            <!--RadioButtons para Género-->
            <div class="md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100">  
              <ul>
                <li>
                  <input type="radio" id="radioFem" v-model="form.gender"  value= "Femenino">
                  <label id="radioLabel" class="genderLabel" for="radioFem"><font-awesome-icon icon="female" /> Femenino</label>
                </li>
                <li>
                  <input type=radio id="radioMale" v-model="form.gender"  value= "Masculino">
                  <label id="radioLabel" class="genderLabel" for="radioMale"><font-awesome-icon icon="male" /> Masculino</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <!--Lista de Tipo de identificación cargada dinámicamente desde la variable selectOptions-->
            <div class="md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100">
              <md-field >
                <label for="idType">Tipo de identificación</label>
                <md-select id="idType" v-model="form.idType" md-dense :disabled="sending">
                <md-option v-for="selectOpt in selectOptions" :value="selectOpt.value" :key="selectOpt.value" >{{selectOpt.label}}</md-option>
                </md-select>
              </md-field>
              <!--visibility cambia luego de agregar un tipo de id para que el botón desaparezca-->
              <md-button v-bind:style="{visibility: hideButton}" class="button-add" @click="active = true" :disabled="sending">AGREGAR OTRA IDENTIFICACIÓN</md-button>
            </div>
            <!--Número de ID-->
            <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100">
              <md-field>
                <label for="idNumber">Número de identificación</label>
                <md-input id="idNumber" v-model="form.idNumber" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <!--Diálogo que se muestra para que el usuario pueda agregar un tipo de id-->
          <md-dialog-prompt
              :md-active.sync="active"
              v-model="value"
              md-title="Nuevo tipo de identificacioón"
              md-input-placeholder="Escriba el tipo de identificación..."
              md-confirm-text="Done"
              @md-confirm="addSelectOption" />
          <div class="md-layout">
            <!--RadioButtons para Tipo de Sangre-->
            <div class="md-layout-item md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100">
              <label id="labelfor" for="radioLabel">Tipo de sangre</label>
              <ul class="bloodList">
              <li> 
                <input type="radio" id="radioOPlus" v-model="form.bloodType" value="O+">
                <label id="radioLabel" for="radioOPlus">O+</label>
              </li>
              <li> 
                <input type="radio" id="radioOMinus" v-model="form.bloodType" value= "O-">
                <label id="radioLabel" for="radioOMinus">O-</label>
              </li>
              <li>
                <input type="radio" id="radioAPlus" v-model="form.bloodType" value= "A+">
                <label id="radioLabel" for="radioAPlus">A+</label>
              </li>
              <li>
                <input type="radio" id="radioAMinus" v-model="form.bloodType" value= "A-">
                <label id="radioLabel" for="radioAMinus">A-</label>
              </li>
              <li>
                <input type="radio" id="radioBPlus" v-model="form.bloodType" value= "B+">
                <label id="radioLabel" for="radioBPlus">B+</label>
              </li>
              <li>
                <input type="radio" id="radioBMinus" v-model="form.bloodType" value= "B-">
                <label id="radioLabel" for="radioBMinus">B-</label>
              </li>
              <li>
                <input type="radio" id="radioABPlus" v-model="form.bloodType" value= "AB+">
                <label id="radioLabel" for="radioABPlus">AB+</label>
              </li>
              <li>
                <input type="radio" id="radioABMinus" v-model="form.bloodType" value= "AB-">
                <label id="radioLabel" for="radioABMinus">AB-</label>
              </li>
              <li>
                <input type="radio" id="radioDesconocido" v-model="form.bloodType" value= "Desconocido">
                <label id="radioLabel" for="radioDesconocido">Desconocido</label>
              </li>
              </ul>
            </div>
          </div>
        </md-card-content>
      </md-card>
      <md-card>
        <!--Header del segundo Card (Datos de contacto) del Form-->
        <md-card-header>
          <div class="md-subheading">Datos de contacto</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout">
            <!--Tipo de teléfono, Código de área y número-->
            <div class="md-layout-item md-large-size-55 md-medium-size-55 md-small-size-55 md-xsmall-size-100">
              <label id="labelfor" for="menu">Teléfono</label>
              <md-field name="menu" id="menu" :class="getValidationClass('phoneNumber')"> 
                <md-menu md-direction="bottom-start" >
                  <md-button class="menuButton" md-menu-trigger >
                    <!--Si es móvil-->
                    <span v-if="form.phoneType === 'mobile'">
                      <span class="myIcons">
                        <font-awesome-icon  icon="mobile-alt"/>
                      </span>
                      <span class="myIcons">
                        <font-awesome-icon class="iconDown" icon="angle-down"/>
                      </span>
                    </span>
                    <!--Si es teléfono fijo-->
                    <span v-else>
                      <font-awesome-icon icon="tty"/><font-awesome-icon class="iconDown" icon="angle-down" />
                    </span>
                  </md-button>
                  <!--Contenido del menú-->
                  <md-menu-content v-model="form.phoneType">
                    <md-menu-item v-on:click="form.phoneType='mobile'">
                        <font-awesome-icon icon="mobile-alt" />
                    </md-menu-item>
                    <md-menu-item v-on:click="form.phoneType='home'">
                        <font-awesome-icon icon="tty" />
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
                <!--Menú de Código de Área-->
                <md-menu md-direction="bottom-start">
                  <md-button class="menuButton" md-menu-trigger>
                    <span v-if="form.phoneExtension === 'CR'">
                      +506<font-awesome-icon class="iconDown" icon="angle-down" />
                    </span>
                    <span v-else>
                      +52<font-awesome-icon class="iconDown" icon="angle-down" />
                    </span>
                  </md-button>
                  <!--Contenido del menú (CR, MX)-->
                  <md-menu-content v-model="form.phoneExtension" class="fa fa-angle-down">
                    <md-menu-item v-on:click="form.phoneExtension='CR'">+506</md-menu-item>
                    <md-menu-item v-on:click="form.phoneExtension='MX'">+52</md-menu-item>
                  </md-menu-content>
                </md-menu>
                <!--Número de teléfono. Validado por el método phonePatternCheck-->
                <md-input placeholder="Teléfono" name="phoneNumber" id="phoneNumber" v-model="form.phoneNumber" @blur="$v.form.phoneNumber.$touch()" :disabled="sending" />
                <span id="errorPhone" class="md-error" v-if="!$v.form.phoneNumber.phonePatternCheck">506 XXXX-XXXX / 52 XX-XXXX-XXXXX</span>
              </md-field>
            </div>
            <!--Correo electrónico-->
            <div id="emailDiv" class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Correo Electrónico</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.email">El correo electrónico es inválido</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <!--Botón para agregar otro número de teléfono-->
            <div class="md-layout-item md-large-size-40 md-medium-size-40 md-small-size-40 md-xsmall-size-100">
              <md-button class="button-add" @click="addNewPhoneNumber" :disabled="sending">AGREGAR OTRO TELÉFONO</md-button>
            </div>
          </div>
          <!--Botón para Guardar el usuario con layout a la derecha-->
          <div class="md-layout endlayout">
            <md-button type="submit" class="button-add endlayout" :disabled="sending">Guardar</md-button>
          </div>
        </md-card-content>
      </md-card>
      <!--Mensajes-->
      <md-snackbar :md-active.sync="userSaved">El usuario fue guardado!</md-snackbar>
      <md-snackbar :md-active.sync="addedPhone">El teléfono fue agregado!</md-snackbar>
    </form>
  </div>
</template>

<script>
  //Para validaciones
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  //Para el store
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  //Constantes para validar que el número de CR sea de tipo XXXX-XXXX
  //Constantes para validar que el número de MX sea de tipo XX-XXXX-XXXX
  const regexCR= /^[0-9]{4}-[0-9]{4}$/g;
  const regexMX= /^[0-9]{2}-[0-9]{4}-[0-9]{4}$/g;
  
  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data() {
      return{
        //Objeto Form contiene la información a guardar en la lista de usuarios
        form: {
          firstName: null,
          lastName: null,
          gender: null,
          idType: null,
          idNumber: null,
          bloodType: null,
          phones: [],
          phoneType: 'mobile',
          phoneExtension: 'CR',
          phoneNumber: null,
          email: null
        },
        //Variables bandera para guardar el usuario y agregar números de teléfono
        userSaved: false,
        addedPhone: false,
        sending: false,
        //Contiene las opciones default para el tipo de identificación
        selectOptions: [
          { value: 'nationalId', label: 'Cédula'},
          { value: 'passport', label: 'Pasaporte'}
        ],
        //Bandera y valor para el diálogo del tipo de identificación
        active: false,
        value: null,
        //Usado por el botón que agrega el tipo de identificación
        hideButton: 'visible',
      }
    },
    //Funciones del state y getter del store
    computed: {
      ...mapState('userModule', ['users']),
      ...mapGetters('userModule',["allUsers"])
    },
    //Funciones de las validaciones
    validations: {
      form: {
        firstName: {
          required
        },
        email: {
          email
        },
        phoneNumber: {
          //Valida el formato del número de teléfono
          phonePatternCheck(phoneNumber){
            let areaCode = this.form.phoneExtension;
            return(
              /CR/.test(areaCode) && regexCR.test(phoneNumber) ||
              /MX/.test(areaCode) && regexMX.test(phoneNumber)
            )
          }
        }
      }
    },
    methods: {
      //Actions del store
      ...mapActions('userModule', ['register', 'getUsers']),
      //Agrega un nuevo tipo de identificación al menú
      addSelectOption(){
        if(this.value === null || this.value === ''){
          alert("Tipo de identificación vacío");
        }else{
          this.hideButton = "hidden";
          this.selectOptions.unshift({value: this.value, label: this.value});
        }
      },
      //Revisa que sea válido y agrega un nuevo número de teléfono
      addNewPhoneNumber(){
        this.$v.form.phoneNumber.$touch()
        if (!this.$v.form.phoneNumber.$invalid) {
          let type = this.form.phoneType;
          let extension = this.form.phoneExtension;
          let number = this.form.phoneNumber;
          let newPhone = [type,extension,number];
          //Si el teléfono no fue agregado a la lista de teléfonos, lo agrega
          if(this.form.phones.every(i => newPhone.includes(i))){
            this.form.phones.unshift(newPhone);
            this.addedPhone = true;
          }
        }
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      //Limpia el form
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.gender = null
        this.form.idType = null
        this.form.idNumber = null
        this.form.bloodType = null
        this.form.phones = []
        this.form.phoneType = 'mobile'
        this.form.phoneExtension = 'CR'
        this.form.phoneNumber = null
        this.form.email = null
      },
      //Llama a registrar el form en el store
      saveUser () {
        this.addNewPhoneNumber();
        this.sending = true;
        this.register(this.form);
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      },
      validateUser () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },
    //Carga los usuarios existentes del local storage
    created(){
      this.getUsers();
    }
  };
</script>

<style lang="scss" scoped>

  .md-card{
    padding-bottom: 16px;
  }
  .md-card-content:last-of-type{
      padding-bottom: 0px;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin-bottom: 0px;
  }
  li {
    display: inline-block;
  }
  ul.bloodList li{
    padding: 1px;
    width: min-content;
    padding-bottom: 10px;
  }

  input[type=radio] {
    display:none;
  }

  #radioLabel {
    cursor: pointer;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
    color: gray;
  }

  input[type=radio]:checked + #radioLabel {
    background: darkturquoise;
    color: white;
    border: none;
  }

  #labelfor{
    color: gray;
  }

  .genderLabel{
    margin-right: 5px;
  }

  .normal-case{
    text-transform: none;
  }

  .md-field{
    margin-bottom: 0px;
    margin-top: 0px;
    max-width: 411px;
  }
  .md-button{
    margin-top: 0px;
    width: fit-content;
    min-width: 20px;
  }

 .md-menu-content{
    max-width: 60px;
    height: fit-content;
  }

  #emailDiv{
    align-self: flex-end;
  }

  #errorPhone {
    top:0px;
  }

  .endlayout{
    align-content: flex-end;
    justify-content: flex-end;
  }

  .iconDown{
    margin-left: 5px;
  }

  .md-avatar{
    display: flex;
  }

  .menuButton{
    font-size: 16px;
  }

  .biggerLabel {
    font-size: 28px !important;
  }
  #name::-webkit-input-placeholder {
    font-size: 28px !important;
  }
  #name::-moz-placeholder {
    font-size: 28px !important;
  }
  #name:-ms-input-placeholder {
    font-size: 28px !important;
  }
  #name::placeholder{
    font-size: 28px !important;
  }
</style>