<template>
  <div class="container">
    <header class="my-profile">
      <div class="profile-img__wrapper">
        <img src="../assets/profile_img.jpg" alt="">
      </div>
      <div class="profile-name">
        <div class="i">
          <h1 class="username">matej_duben</h1>
          <p class="short-bio">Matej Duben</p>
        </div>
      </div>
      <div class="profile-btn">
        <a href="#">Prepnúť</a>
      </div>
    </header>

    <section class="suggestions-body">
      <div class="s-h">
        <p>Návrhy pre vás</p>
        <a href="#">Zobraziť všetko</a>
      </div>
      <div class="suggestions-short-list">

        <div class="user-profile">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <div class="profile-name">
            <div class="i">
              <h1 class="username">test.user_12</h1>
              <p class="short-bio">Nový používateľ Instagramu</p>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#">Sledovať</a>
          </div>
        </div>
         <div class="user-profile">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <div class="profile-name">
            <div class="i">
              <h1 class="username">test.user_12</h1>
              <p class="short-bio">Nový používateľ Instagramu</p>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#">Sledovať</a>
          </div>
        </div>
         <div class="user-profile">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <div class="profile-name">
            <div class="i">
              <h1 class="username">test.user_12</h1>
              <p class="short-bio">Nový používateľ Instagramu</p>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#">Sledovať</a>
          </div>
        </div>
         <div class="user-profile">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <div class="profile-name">
            <div class="i">
              <h1 class="username">test.user_12</h1>
              <p class="short-bio">Nový používateľ Instagramu</p>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#">Sledovať</a>
          </div>
        </div>
         <div class="user-profile">
          <div class="profile-img__wrapper">
            <img src="../assets/profile_img2.jpg" alt="">
          </div>
          <div class="profile-name">
            <div class="i">
              <h1 class="username">test.user_12</h1>
              <p class="short-bio">Nový používateľ Instagramu</p>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#">Sledovať</a>
          </div>
        </div>

      </div>
    </section>
    <footer class="footer">
      <div class="wrapper">
        <p>
          Informácie . Pomoc . Tlačové . správy . API . Pracovné . príležitosti .Súkromie . Podmienky . Lokality . Najpopulárnejšie . účty . Hashtagy Jazyk . Slovenčina
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
name:'profilesBar'
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  top: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  position: fixed;
  margin-left: 25px;
  
  width: 300px;
  
}

.my-profile{
  display: grid;
  grid-template-columns: 62px 170px 70px;
  align-items: center;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0px;
}
.my-profile .profile-img__wrapper{
  display: block;
  height: 60px;
  width: 60px;
  background: red;
}
.my-profile .profile-img__wrapper img{
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 100%;
}
.my-profile .profile-name{
  margin: 0;
  text-align: left;
  
  
}
.i{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;

}
.username{
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  color: #262626;
}
.short-bio{
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  color: #8e8e8e;
}


.my-profile .profile-btn a{
  font: inherit;
  color: #0095f6;
  font-size: 12px;
  font-weight: bolder;
  text-decoration: none;
}


/* suggestions */
.suggestions-body{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  
}
.suggestions-body .s-h{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.suggestions-body .s-h p{
  font-size: 13px;
  color: #8e8e8e;
  font-weight: bolder;
}
.suggestions-body .s-h a{
  font-size: 12px;
  color: #262626;
  text-decoration: none;
  font-weight: bolder;
}

.suggestions-short-list{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 280px;
  
}
.suggestions-short-list .user-profile{
  display: grid;
  grid-template-columns: 45px 180px 75px;
   align-items: center;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0px;
}
.suggestions-short-list .user-profile .profile-img__wrapper{
  display: block;
  height: 40px;
  width: 40px;
  
}
.suggestions-short-list .user-profile .profile-img__wrapper img{
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 100%;
}
.suggestions-short-list .user-profile .profile-name{
  margin: 0;
  text-align: left;
}
.suggestions-short-list .user-profile .profile-name .i .username{
  font-size: 12px;
  display: inline-block;
}
.suggestions-short-list .user-profile .profile-name .i .short-bio{
  font-size: 12px;
}
.suggestions-short-list .user-profile .profile-btn a{
  font: inherit;
  color: #0095f6;
  font-size: 12px;
  font-weight: bolder;
  text-decoration: none;
  text-align: right;
}

/* footer */
.footer{

}
.footer .wrapper{
  text-align: left;
}
.footer .wrapper p{
  font-size: 12px;
  color: #c7c7c7;
  line-height: 20px;
}

</style>