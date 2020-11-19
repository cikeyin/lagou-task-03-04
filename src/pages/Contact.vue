<template>
  <Layout>
    <input
      v-model="form.name"
      type="text"
      class="form-control"
      placeholder="Name"
      id="name"
      required
      data-validation-required-message="Please enter your name."
    />

    <input
      v-model="form.email"
      type="email"
      class="form-control"
      placeholder="Email Address"
      id="email"
      required
      data-validation-required-message="Please enter your email address."
    />

    <input
      v-model="form.phone"
      type="tel"
      class="form-control"
      placeholder="Phone Number"
      id="phone"
      required
      data-validation-required-message="Please enter your phone number."
    />

    <textarea
      v-model="form.message"
      rows="5"
      class="form-control"
      placeholder="Message"
      id="message"
      required
      data-validation-required-message="Please enter a message."
    ></textarea>

    <button
      type="submit"
      class="btn btn-primary"
      id="sendMessageButton"
      @click.prevent="onSubmit"
    >Send</button>
  </Layout>
</template>


<script>
import axios from "axios";
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await axios({
          method: "POST",
          url: "http://localhost:1337/contacts",
          data: this.form
        });
        window.alert("发送成功");
      } catch (e) {
        alert("发送失败，请稍后重试");
      }
    }
  }
};
</script>


<style>
</style>
