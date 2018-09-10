<template>
<div id='about' class='about'>
    <router-view></router-view>
    <div class='about-header'>
    <Header />
    </div>
    <Nav />
      <h1 class='about-h1'>About your friendly Travel Bug Developers</h1>
      <main class='about-main'>
        <section class='about-us-1'>
          <div class='about-div-1'>
            <h2 class='about-h2'>Thomas Clukies</h2>
            <img src='https://media.licdn.com/dms/image/C4E03AQGESCp6uZoaFQ/profile-displayphoto-shrink_800_800/0?e=1539820800&v=beta&t=zyZGBq9E3aH8H5SkhaAEmlURPlongDD3Jqk8SGLjAV8' class='about-img'>
            <p>Phone: (303)406-3835 </p>
            <p>Email: thomas.clukies@gmail.com</p>
            <a href = 'https://github.com/tclukies'>GitHub</a>
            <a href = 'https://www.linkedin.com/in/thomas-clukies/'>LinkedIn</a>
            <p class='about-p'>Thomas thomas ThOmAs</p>

          </div>
          <div class='about-div-2'>
            <h2 class='about-h2'>R.J. Kirkhope</h2>
            <img src='https://media.licdn.com/dms/image/C4E03AQG4ZM2q1Ite_Q/profile-displayphoto-shrink_800_800/0?e=1539820800&v=beta&t=jmVpGWBXklqJFnu7Eg7QGPwi12GpFUzbxk79KJWkYG8' class='about-img'>
            <p>Phone: (303) 717-3002 </p>
            <p>Email: rjkirkhope@gmail.com</p>
            <a href = 'https://github.com/rjkirkhope'>GitHub</a>
            <a href = 'https://www.linkedin.com/in/robert-kirkhope/'>LinkedIn</a>
            <p class='about-p'>R.J. r.j. R.j.</p>
          </div>
        </section>
        <section class='about-us-2'>
          <div class='about-div-3'>
            <h2 class='about-h2'>Ryan McCrory</h2>
            <img src='https://media.licdn.com/dms/image/C5603AQEydsW4sLA8bg/profile-displayphoto-shrink_800_800/0?e=1539820800&v=beta&t=Bej1VdnGOCKVUYp8zuv5NL4Kzaxp740nPz9LbnZV0qI' class='about-img'>
            <p>Phone: (303) 709-9989</p>
            <p>Email: ryanmccrory83@gmail.com</p>
            <a href = 'https://github.com/ryanmccrory83/'>GitHub</a>
            <a href = 'https://www.linkedin.com/in/ryan-mccrory83/'>LinkedIn</a>
            <p class='about-p'>Ryan ryan RyAn</p>
          </div>
          <div class='about-div-4'>
            <h2 class='about-h2'>Natalie Todd</h2>
            <img src='https://media.licdn.com/dms/image/C5603AQF4UW_luFwmXQ/profile-displayphoto-shrink_800_800/0?e=1539820800&v=beta&t=8HZh5_TybesLzGGGKYdTAN7SFETpW5pDpM6CpCVrf7g' class='about-img'>
            <p>Phone: (907) 317-7907 </p>
            <p>Email: natalie.todd15@gmail.com</p>
            <a href = 'https://github.com/natalie-todd'>GitHub</a>
            <a href = 'https://www.linkedin.com/in/natalie-todd/'>LinkedIn</a>
            <p class='about-p'>Natalie natalie NaTaLiE</p>
          </div>        
        </section>
      </main>
    

    </div>
    
</template>

<script>
import Header from "@/components/Header";
import Nav from "@/components/Nav";
export default {
    name: "About",
    components: {
        Header,
        Nav
    }
};
</script>

<style scoped>
.about {
    background: no-repeat;
    background-size: 100vw 100vh;
    background-image: url("http://goldwallpapers.com/uploads/posts/beautiful-sunrise-wallpaper/beautiful_sunrise_wallpaper_008.jpg");
}

.about-h1 {
    color: white;
}

.about-main {
    display: grid;
    flex-flow: row wrap;
}

.about-us-1 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.about-us-2 {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.about-div-1 {
    margin-left: 20px;
}

.about-div-2 {
    margin-left: -20px;
}

.about-div-3 {
    margin-left: 20px;
}

.about-div-4 {
    margin-left: -20px;
}
.about-h2 {
    color: red;
}

.about-img {
    height: 20vh;
    border-radius: 50%;
}

.about-p {
    color: white;
}
.about-header{
    display: flex;
    justify-content: center;
}
</style>
