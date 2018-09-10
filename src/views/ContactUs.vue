<template>
<div id='contact' class='contact-body'>
    <router-view></router-view>
    <div class='contact-header'>
    <Header />
    </div>
      <main class='contact-main'>
        <section class='contact-section'>
          <h1 class='contact-h1'>Contact Information</h1>
          <p class='contact-main-p'>For technical difficulties please contact Tom, R.J., Ryan or Natalie</p>
          <div class='contact-users'>
            <div class='contact-user'>
              <p class='contact-p-user'>Tom</p>
              <p class='contact-p-user'>thomas.clukies@gmail.com</p>
            </div>
            <div class='contact-user'>
              <p class='contact-p-user'>R.J.</p>
              <p class='contact-p-user'>rjkirkhope@gmail.com</p>
            </div>
            <div class='contact-user'>
              <p class='contact-p-user'>Ryan</p>
              <p class='contact-p-user'>ryanmccrory83@gmail.com</p>
            </div>
            <div class='contact-user'>
              <p class='contact-p-user'>Natalie</p>
              <p class='contact-p-user'>natalie.todd15@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
    <Nav class='contact-Nav'/>
</div>
    
</template>

<script scoped>
import Header from "@/components/Header";
import Nav from "@/components/Nav";
export default {
  name: "Contact-Us",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
  .contact-body{
    margin-top: -5vh;
    background: no-repeat;
    background-size: 100vw 100vh;
    background-image: url('http://eskipaper.com/images/monument-valley-4.jpg');
  }

  .contact-main{
    display: flex;
    flex-flow: column wrap;
  }
  
  .contact-h1{
    color: white;
  }

  .contact-main-p{
    color: white;
  }

  .contact-section{
    flex-flow: row wrap;
  }

  .contact-users{
    display: flex;
    flex-flow: column wrap;
    align-content: center;
  }

  .contact-user{
    display:flex;
    flex-flow: column wrap;
    border: 2px solid orange;
    width: 30vh;
    margin: 2vh 0vh 2vh 0vh;
  }

  .contact-p-user{
    margin: -.2vh 0vh -.2vh 0vh;
    color: white;
  }

  .contact-Nav{
    margin-top: 3vh;
    margin-bottom: 5vh;
  }
  .contact-header{
    display: flex;
    justify-content: center;
  }
</style>