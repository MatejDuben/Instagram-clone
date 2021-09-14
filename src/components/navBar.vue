<template>
  <div class="container">
    <div class="wrapper">
      <div class="logo">
        <div class="logo__wrapper">
          <img src="../assets/Instagram_logo.svg" alt="">
        </div>
      </div>
      <div class="search__bar">
        <form action="" method="post">

          <div class="active-search" v-if="activeSearchBar">
            <input type="text" name="" class="search-inp" id="search-inp" v-model="search" placeholder="Hľadať">
            <font-awesome-icon @click="openSearchBar()" class="close-btn" :icon="['fas', 'times-circle']" />
          </div>

          <div class="noactive-search " @click="openSearchBar()" v-if="deactiveSearchBar">
              <div class="wrapper">
                <span><font-awesome-icon class="s-i" :icon="['fas', 'search']" /></span>
                <span>{{this.search}}</span>
              </div>
          </div>

        </form>
      </div>
      <div class="icon__links">
        <font-awesome-icon class="icon" :icon="['fas', 'home']" />
        <font-awesome-icon class="icon" :icon="['fas', 'paper-plane']" />
        <font-awesome-icon class="icon" :icon="['fas', 'compass']" />
        <font-awesome-icon class="icon" :icon="['fas', 'heart']" />
        <div class="profile">
          <img src="../assets/profile_img.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      activeSearchBar: false,
      deactiveSearchBar: true,
      search: 'Hľadať'
    }
  },
  methods: {
    openSearchBar() {
      if (this.deactiveSearchBar){
        this.deactiveSearchBar = false;
        this.activeSearchBar = true;
      }
      else{
        this.deactiveSearchBar = true;
        this.activeSearchBar = false;
      }
    }
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue === '') {
        newValue = 'Hľadať'
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  background: #fff;
  border: solid 1px #dbdbdb;
  z-index: 99;
}
.container .wrapper{
  padding: 10px 0;
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
}



.logo__wrapper{
  height: 40px;
  width: 120px;
}
.logo__wrapper img{
  height: 100%;
  width: 100%;
}

.search__bar{
  width: 120px;
}
.search__bar form{
  display: flex;
  align-items: center;
  width: 200px;
}
.search__bar form .active-search{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.search-inp{
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-align: left;
  padding: 5px 10px;
  padding-left: 20px;
  background: #fafafa;
  color: #8e8e8e;
}
.search-inp.active{
  display: block;
}
#search-inp:focus{
  outline: none;
}
.input-visible{
  
}
.close-btn{
  position: relative;
  left: -20px;
  font-size: 14px;
  color: #dbdbdb;
}


.search__bar form .noactive-search{
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  text-align: left;
  padding: 5px 10px;
  padding-left: 20px;
  background: #fafafa;
  width: 80%;
}
.noactive-search .wrapper{
  position: relative;
  left: 50%;
  display: flex;
  justify-content: center;

  padding: 0;
  transform: translateX(-50%);
}
.noactive-search .wrapper span{
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-right: 4px;
  color: #8e8e8e;
}
.s-i{
  font-size: 11px;
}


/* links right */
.icon__links{
  width: 200px;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  color: rgb(20, 20, 20);
}
.profile{
  display: inline-block;
  height: 25px;
  width: 25px;
  cursor: pointer;
}
.profile img{
  height: 100%;
  width: 100%;
  border-radius: 100%;
}

.icon{
  cursor: pointer;
}

</style>
