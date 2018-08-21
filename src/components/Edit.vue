<template>
<div class="edit">
  <div class="photo-container">
    <!--pass url to ImgDisplay-->
    <ImgDisplay 
      :url="'http://35.185.111.183'+photo.file_location.url" 
      v-if="photo.file_location" 
    />
  </div>
  <div class="main-container">
    <!--pass photo info to PhotoForm-->
    <PhotoForm 
      :title="photo.title"
      :description="photo.description"
      v-if="photo.title" 
    />
  </div>
</div>
</template>

<script>
import ImgDisplay from "@/components/ImgDisplay";
import PhotoForm from "@/components/PhotoForm";
import axios from "axios";
export default {
  components: {
    ImgDisplay: ImgDisplay,
    PhotoForm: PhotoForm
  },
  data: function() {
    return {
      photo: {}
    };
  },
  created() {
    var that = this;
    var id = this.$route.params.id;
    var url = "http://35.185.111.183/api/v1/photos/" + id;
    var token = JSON.parse(localStorage.getItem("photo-album-user")).authToken;
    var params = { auth_token: token };
    axios
      .get(url, { params })
      .then(function(res) {
        that.photo = res.data;
      })
      .catch(function(err) {
        console.error(err.response.data);
      });
  }
};
</script>

<style scoped>
.edit {
  display: flex;
  justify-content: center;
}
.photo-container {
  padding-top: 100px;
  margin-right: 50px;
}
.main-container {
  padding-top: 100px;
}
</style>