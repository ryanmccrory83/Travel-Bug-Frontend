<template>
<div id='first'>
    <router-view></router-view>
    <div class='front-header'>
    <Header />
    </div>
        <Modal />
    <Nav />
    </div>
    
</template>

<script>
import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
export default {
  name: 'first',
  components: {
    Modal,
    Nav,
  },
};
</script>

<style>
template {
  min-height: 100%;
}

#first{
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
}
.front-header {
  display: flex;
  justify-content: center;
}
</style>
