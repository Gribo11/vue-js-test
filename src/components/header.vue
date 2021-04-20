<template>
  <div>
    <v-alert
      v-if="error"
      dense
      outlined
      type="error"
    >
     Error, something went wrong! try again later
    </v-alert>

    <v-text-field
      label="search all of npm"
      hide-details="auto"
      v-model="search"
      :rules="rules"
    ></v-text-field>
   
  </div>
</template>

<script>
export default {
   data: () => ({
    search:null,
    error:false,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  watch:{
    search(value){
      this.getData(value);
    }
  },
   methods:{
    getData(value){
      this.$store.commit('itemClear');
      axios.get('https://registry.npmjs.com/-/v1/search',{params:{text:value}}).then(r => {
        r.data.objects.forEach(item => {
          this.$store.commit('itemPush',item.package);
        });
      }).catch(e => {
      this.error = true
      });
    },
   }
 
}
</script>



