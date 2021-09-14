<template>
  <section>
    <div class="container" v-for="d in this.data" :key="d.id">
      <header class="profile-header">
        <div class="l-p-t">  <!-- left-profile-title -->
          <div class="p-i__w">
            <img v-bind:src="require('@/assets/'+d.userProfilePic)" alt="">
          </div>
          <h1 class="t username">
            {{d.userName}}
          </h1>
        </div>
        <div class="r-p-o post-options">
          <font-awesome-icon class="" :icon="['fas', 'ellipsis-h']" />
        </div>
      </header>
      <section class="post-sec">
        <div class="p-w">
          <img :src="require('@/assets/'+d.userPost)" alt="">
        </div>
      </section>
      <section class="s">
        <div class="user-btns__wrapper">
          <div class="l-m-s">
            <font-awesome-icon class="icon" @click="d.likes++" :icon="['fas', 'heart']" />
            <font-awesome-icon class="icon" :icon="['fas', 'comment']" />
            <font-awesome-icon class="icon" :icon="['fas', 'paper-plane']" />
          </div>
          <div class="save-btn__wrapper">
            <font-awesome-icon class="icon" :icon="['fas', 'bookmark']" />
          </div>
        </div>
        <div class="liked-sec">
          <p>
            <span>{{d.likes}}</span>
            Páči sa mi to
          </p>
        </div>
        <div class="des-sec " ref="desSection">
          <h1 class="username">{{d.userName}}</h1>
          <p class="post-description " ref="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem beatae totam nihil cupiditate fuga placeat esse odio itaque! Consectetur!</p>
          <p class="more-btn" v-if="isClosed" @click="openFunc()" ref="moreBtn">... <span>viac</span></p>
        </div>
      </section>
    </div>
  </section>
</template>

<script>

import {data} from '@/data.js'

export default {
name:'postsPreview',
data() {
  return {
    isClosed: true,
    data: data,
    iN: 'profile_img2.jpg'
  }
},
methods: {
  openFunc() {
    this.$refs.des.classList.add('is-opened');
    this.$refs.desSection.classList.add('is-opened');
    this.isClosed = false;
  },
},




}
</script>

<style scoped>
  .container{
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
  .profile-header{
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }
  .profile-header .l-p-t{
    display: flex;
    padding: 5px 15px;
  }
  .profile-header .l-p-t .t{
    font-size: 14px;
    margin-left: 15px;
    font-weight: bolder;
    color: #2c2c2c;
  }
  .profile-header .l-p-t .p-i__w{
    display: block;
    height: 40px;
    width: 40px;

  }
  .profile-header .l-p-t .p-i__w img{
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .profile-header .r-p-o{
    margin-right: 15px;
    font-size: 18px;
    color: #2c2c2c;
  }
  /* post sec */

  .post-sec{
    display: block;
    width: 100%;
    height: 650px;

  }
  .post-sec .p-w{
    height: 100%;
    width: 100%;
  }
  .post-sec .p-w img{
    height: 100%;
    width: 100%;
  }

  .s{
    height: auto;
  }
  .user-btns__wrapper{
    width: 95%;
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    margin: auto;
  }
  .user-btns__wrapper .l-m-s{
    display: flex;
    justify-content: space-between;
    width: 100px;
    
  }
  .user-btns__wrapper .l-m-s .icon, .user-btns__wrapper .save-btn__wrapper .icon{
    font-size: 24px;
    color: #2d2d2d;
  }
  .user-btns__wrapper .save-btn__wrapper{
    
  }
  .liked-sec{
    display: flex;
    width: 95%;
    margin: auto;
  }
  .liked-sec p{
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    color: #2c2c2c;
  }
  .des-sec{
    width: 95%;
    margin: 0 auto;
    display: flex;
    text-align: left;
    align-items: flex-start;
  }
  .des-sec.is-opened{
    flex-direction: column;
    
  }
  .des-sec .username{
    font-size: 14px;
  }
  .des-sec .post-description{
    font-size: 14px;
    margin-left: 10px;
    width: 180px;
    height: 16px;
    overflow: hidden;
  }
  .des-sec .post-description.is-opened{
    height: auto;
    width: 90%;
    margin: 0;
    padding: 0;
  }

  .more-btn{
    margin-left: 5;
    font-size: 14px;
    color: #2c2c2c;
  }
  .more-btn span{
    cursor: pointer;
    color: #bebebe;
  }
</style>