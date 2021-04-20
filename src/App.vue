<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
           <SearchPanel/>
            <Content/>
            <Footer/>
        </v-container>
      </v-main>
    </v-app>  
 
  </div>
</template>

<script>

import SearchPanel from '@/components/header'
import Footer from '@/components/footer'
import Content from '@/components/content'

export default {
  name: 'App',
  components: {
    SearchPanel,
    Footer,
    Content
  },
}

</script>

