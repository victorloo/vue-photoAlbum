<template>
<div class="create">
  <div class="photo-container">
    <ImgDisplay />
  </div>
  <div class="main-container">
    <PhotoForm @photo-form-submit="postCreate" />
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
  methods: {
    postCreate: function(payload) {
      var that = this;
      var createUrl = "http://35.185.111.183/api/v1/photos";
      var token = JSON.parse(localStorage.getItem("photo-album-user"))
        .authToken;
      // pack params using FormData
      var params = new FormData();
      params.append("auth_token", token);
      params.append("title", payload.title);
      params.append("date", payload.date);
      params.append("description", payload.description);
      params.append("file_location", payload.file_location);
      console.log(params);
      // get data from api
      axios
        .post(createUrl, params, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(res) {
          that.$router.push("/photos/" + res.data.result.id);
        })
        .catch(function(err) {
          console.error(err.response.data);
        });
    }
  }
};
</script>

<style scoped>
.create {
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