<template>
<div id='faq'>
    <router-view></router-view>
    <div class='faq-header'>
    <Header />
    </div>
    <Nav />
      <h1>Frequently Asked Questions</h1>
      <div >
        <p class='faq-question'>How do I change users?</p>
        <p class='faq-answer'>Click on the sign out button at the top of the page to take you to the login page.</p>
      </div>
      <div>
        <p class='faq-question'>How do I input a new location with activities on my map?</p>
        <p class='faq-answer'>Click on the input area named location and type in the country destination. After that, click on the text area named activities and input the desired activities to be accomplished.</p>
      </div>
      <div>
        <p class='faq-question'></p>
        <p class='faq-answer'></p>
      </div>
</div>
</template>

<script scoped>
import Header from "@/components/Header";
import Nav from "@/components/Nav";
export default {
  name: "FAQ",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
    body{
      background: cover;
    }

  .faq-question{
    color: red;
  }

  .faq-answer{
    color: black;
  }
  .faq-header {
    display: flex;
    justify-content: center;
  }

</style>
