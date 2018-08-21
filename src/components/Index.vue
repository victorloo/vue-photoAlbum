<template>
<div class="container">
  <div class="item-list" v-for="photo in photos">
    <itemListElement :isLogin="isLogin"/>
  </div>
</div>
</template>

<script>
import ItemListElement from "@/components/ItemListElement";
export default {
  data: function() {
    return {
      isLogin: false,
      photos: [1, 2, 3, 4, 5]
    };
  },
  components: {
    ItemListElement: ItemListElement
  },
  methods: {
    handleAuthState: function(payload) {
      var action = payload.action;
      if (action == "login") {
        this.isLogin = true;
      } else if (action == "logout") {
        this.isLogin = false;
      }
    }
  },
  created() {
    // listening the 'auth-stat' event
    this.$bus.$on("auth-state", this.handleAuthState);
    //check auth state form local storage
    var sessionData = JSON.parse(localStorage.getItem("photo-album-user"));
    if (!!sessionData) {
      this.handleAuthState({ action: "login" });
    } else {
      this.handleAuthState({ action: "logout" });
    }
  },
  beforeDestroy() {
    this.$bus.$off("auth-state", this.handleAuthState);
  }
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
}
.item-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin-bottom: 60px;
}
@media (max-width: 993px) {
  .photo-container-wrapper {
    width: 33.333%;
  }
}
@media (max-width: 769px) {
  .photo-container-wrapper {
    width: 50%;
  }
}
@media (max-width: 577px) {
  .photo-container-wrapper {
    width: 100%;
  }
}
</style>