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
export default {
  components: {
    ImgDisplay: ImgDisplay,
    PhotoForm: PhotoForm
  },
  methods: {
    postCreate: function(payload) {
      // receive form data
      console.dir(payload);
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