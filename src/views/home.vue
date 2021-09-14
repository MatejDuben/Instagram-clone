<template>
  <div class="home">
    <nav-bar> </nav-bar>
    <main class="body-container">
      <section class="body__section">
        <div class="left-side">
          <stories-preview></stories-preview>
          <div class="main-content__wrapper">
            <posts-preview></posts-preview>
          </div>
        </div>
        <div class="right-side">
          <profiles-bar> </profiles-bar>
        </div>
      </section>
    </main>

    <profile-show-card class="main-component__profile-show-card" v-if="profileShowCardIsVisible" :positionX="positionX" :positionY="positionY"  /> 

  </div>
</template>

<script>
import navBar from '@/components/navBar';
import storiesPreview from '@/components/storiesPreview';
import ProfilesBar from '@/components/profilesBar';
import postsPreview from '@/components/postsPreview';
import profileShowCard from '@/components/profileShowCard';


export default {
  name: 'Home',
  components: {
    'nav-bar':navBar,
    'stories-preview': storiesPreview,
    'profiles-bar':ProfilesBar,
    'posts-preview': postsPreview,
    'profile-show-card': profileShowCard,
  },
  data() {
    return {
      positionX: 0,
      positionY: 0,
      profileShowCardIsVisible: false
    }
  },
  methods: {
    
  },
  mounted () {
   
    let userNames = document.querySelectorAll('.username');
    userNames.forEach(userName => {
      userName.addEventListener('mouseover', (e)=>{
        this.profileShowCardIsVisible = true;
        this.positionX = e.clientX;
        this.positionY = e.clientY;
      })
      userName.addEventListener('mouseout',()=>{
        this.profileShowCardIsVisible = false;
      })
    });
  },


}
</script>

<style>
  .body-container{
    margin-top: 50px;
    display: flex;
    align-items: center;  
    justify-content: center;
  }
  .body-container .body__section{
    display: grid;
    height: 100%;
    width: 65%;

    grid-template-columns: 650px 300px;
  }
  .main-content__wrapper{
    width: 650px;
    height: auto;
  }
  .username{
    cursor: pointer;
  }
  .username:hover{
    text-decoration: underline;
  }
  .main-component__profile-show-card{
    z-index: 9999;
  }


</style>