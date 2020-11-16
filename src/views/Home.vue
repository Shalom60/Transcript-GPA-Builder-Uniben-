/*eslint-disable*/
<template>
  <div class="home-container">
  
   <h1> Welcome To This Transcript Builder </h1>
   <p> Please provide all necessary data </p>

   <b-jumbotron>

   <b-form @submit.prevent="handleSubmit" >

      <b-form-group
        id="input-group-1"
        label="Full Name:"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter your names"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label=" Matriculation Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.matno"
          required
          placeholder="Enter mat. number"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-3" label="Faculty:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="formData.faculty"
          required
          placeholder="your faculty"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-4" label="Department:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="formData.department"
          required
          placeholder="your department"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-5" label="Course Level:" label-for="input-5">
           <b-form-select
          id="input-5"
          v-model="formData.level"
          :options="levels"
          required
        ></b-form-select>
      </b-form-group>

     <b-button type="submit" variant="primary">Submit</b-button> 
      </b-form></b-jumbotron>
      <div> name:{{formFin.level}} </div>
      <Transcript 
        v-if = "showNext"
       :formFin = "formFin"
      />
 
  </div>
  
</template>

<script>
import { mapActions} from 'vuex'
import Vue from 'vue'
import Transcript from '../views/Transcript.vue'

export default {
  components: {
    Transcript
  },
  data () {
    return {
      formFin: {i: 0},
      showNext: false,
      formData: {
        name: '',
        faculty: '',
        department: '',
        matno: '',
        level: null
      },
      levels: [{ text: 'select course study duration', value: null }, 1, 2, 3, 4, 5, 6, 7]
    }
  },
  computed: {
    ...mapActions([
      'userData'
    ]),
    form() {
      const { name, faculty, department, matno, level } = this.formData
      const payload = {
        Data: {
        name,
        faculty,
        department,
        matno,
        level
        } 
      }
      //this.userData(payload)
        Vue.set(this.formFin,  ('name', 'faculty', 'department', 'matno', 'level'), payload.Data)
    }
  },
  methods: {
    handleSubmit() {
      this.showNext = true
      //return this.$router.push('/trsct')
    }
  }
}
</script>

<style scoped>
.form{
  margin: 20%;
}
.jumbotron{
  margin: 20%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 5%;
}
h1{
   color: #42b983;
}
</style>
 