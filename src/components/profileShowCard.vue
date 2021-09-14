<template>
  <div class="container" :style="`transform:translate(${this.positionX}px, ${this.positionY}px);`">
    <header class="profile">
      <div class="profile-img__wrapper">
        <img src="../assets/profile_img2.jpg" alt="">
      </div>
      <div class="profile-short-bio">
        <h1 class="title">test.user_92</h1>
        <p>Test User 92 bio</p>
      </div>
    </header>
    <section class="s-m">
      <div class="profile-numbers">
        <div class="w-n">
          <p class="n-t">Prispevky:</p>
          <p class="n">23</p>
        </div>
        <div class="w-n">
          <p class="n-t">Sledovatelia:</p>
          <p class="n">1,220</p>
        </div>
        <div class="w-n">
          <p class="n-t">sledovne:</p>
          <p class="n">43</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name:'profileShowCard',
props: {
  positionX: Number,
  positionY: Number,
},


}
</script>

<style scoped>
.container{
  position: fixed;
  width: 400px;
  height: auto;
  background: #fff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  top: 0;
  left: 0;
  transform: translate(1070px, 400px);
}

.profile{
  display: flex;
  border-bottom: 1px solid #bebebe;
  padding: 20px;
}
.profile-img__wrapper{
  display: block;
  width: 80px;
  height: 80px;

}
.profile-img__wrapper img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.profile-short-bio{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
}
.profile-short-bio .title{
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: #262626;
}
.profile-short-bio p{
   margin: 5px 0;
  padding: 0;
  font-size: 13px;
  color: #8e8e8e;
}
.s-m{
  
  width: 100%;
  height: 100%;
}
.profile-numbers{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #bebebe;
}
.w-n{
  align-items: center;
  
}
.n-t{
  margin: 0;
  padding: 0;
  color: #8e8e8e;
  font-size: 14px;
}
.n{
  color: #262626;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  font-size: 14px;
}

</style>