<template>
  <div class="container">
    <hooper class="stories-preview__hooper" :itemsToShow="7.3" :itemsToSlide="4" :infiniteScroll="false">
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img3.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img3.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img3.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img3.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      <slide class="stories-preview__slide">
        <div class="preview-profile__wrapper">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <p class="preview-UserName">test.user_</p>
        </div>
      </slide>
      
      

      <hooper-navigation slot="hooper-addons" class="stories-preview-navigation"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import {Hooper, Slide, Navigation} from 'hooper'

export default {
  name: 'storiesPreview',
  components: {
    Hooper,
    Slide,
    'hooper-navigation':Navigation
  }

}
</script>

<style scoped>
.container{
  display: block;
  margin: 25px 0;
  width: 100%;
  height: 120px;
  border: solid 1px #dbdbdb;
  border-radius: 5px;
  overflow: visible;
}
</style>

<style>

.stories-preview__hooper{
    
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .stories-preview__slide{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 0;
    list-style: none;
    
  }
  .hooper-track{
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: auto;
  }

  .stories-preview__slide .preview-profile__wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;    
  }
  .stories-preview__slide .preview-profile__wrapper .profile-img__wrapper{
    display: block;
    height: 60px;
    width: 60px;
    
  }
  .stories-preview__slide .preview-profile__wrapper .profile-img__wrapper img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .stories-preview__slide .preview-profile__wrapper .preview-UserName{
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-top: 10px;
  }

  .stories-preview-navigation{
    display: flex;
    justify-content: space-between;
    position: absolute;
    
    width: 650px;
  }
  .stories-preview__hooper .stories-preview-navigation .hooper-prev{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -75px;
    left: 5px;
    background: #fff;
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  .stories-preview__hooper .stories-preview-navigation .hooper-prev.is-disabled,.stories-preview__hooper .stories-preview-navigation .hooper-next.is-disabled{
    display: none;
  }
  .stories-preview__hooper .stories-preview-navigation .hooper-next{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -75px;
    right: 5px;
    background: #fff;
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  .icon-arrowRight{
    
  }
 
</style>