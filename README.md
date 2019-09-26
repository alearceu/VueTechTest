# testvue
Prueba técnica: FrontEnd para Huli
Alejandro Arce Ulloa. Septiembre 2019
## Project setup
```
@testvue folder:
$ vue create .
$ npm install vuex
$ npm install vue-material --save
$ npm install vuelidate --save
$ npm i @fortawesome/fontawesome-svg-core --save
$ npm i @fortawesome/free-solid-svg-icons --save
$ npm i @fortawesome/vue-fontawesome --save
```
$ npm run serve
```
##
-Para el diseño utilicé Vue Material y fontawesome (íconos)
-Creo el store userModule donde guardo una lista con los usuarios creados
-Uso Local Storage para guardar la lista con los usuarios creados (key = users)
-Componentes creados: PersonalData (es el form donde se ingresan los datos del usuario) y
                     Dialog (es un mensaje de diálogo que muestra cierta de info de los usuarios existentes).
                     PersonalData agrega la información al store y Dialog lee la información del store.
-Utilizo la librería vuelidate para validar que el campo de Nombre sea requerido,
                                            que el correo tenga formato email y
                                            que el formato de los teléfonos sea válido para CR y MX