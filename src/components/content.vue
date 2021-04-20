<template>
  <div>


  <v-data-table
    :items-per-page="10"
    class="elevation-1"
    :headers="fields" 
    :items="$store.state.items"
  >
  <template v-slot:item.actions="{ item }">
      <v-btn
      depressed
      color="primary"
      @click="showDialog(item)"
    >
      Show
    </v-btn>
    </template>
  
  </v-data-table>


   <v-dialog v-model="dialog" max-width="500px">
    <v-card v-if="activeItem">
      <v-card-title class="headline">{{activeItem.name}}</v-card-title>
      <v-container>
        <ul>
          <li><b>Author:</b>{{activeItem.author.name}}</li>
          <li><b>Date:</b>{{activeItem.date}}</li>
          <li><b>Description:</b>{{activeItem.description}}</li>
          <li><b>Publisher:</b><br><span>Username:{{activeItem.publisher.username}}</span><br>
          <span>Email: {{activeItem.publisher.email}}</span>
         </li>
         <li><b>Version:</b>{{activeItem.version}}</li>
        </ul>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>




<script>

  export default {  
  data: () => ({
        dialog: false,
        activeItem: null,
        fields: [
          {
             text:'Name',
             value: 'name'
          },
          {
             text:'Description',             
             value: 'description'
          },
          {
             text:'Action',
             value: 'actions'
          },
        ],
    }),
      methods:{
        showDialog(item){
          console.log(item);
          this.activeItem = item;
          this.dialog = true;
        },
        closeDialog(){
          this.activeItem = null;
          this.dialog = false
        }
      }
  }
</script>




