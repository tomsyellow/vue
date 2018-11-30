<template>
  <div>
    <head-top signin-up="msite">
      <router-link class="link_search" slot="search">
        <svg width="100%" height="100%" version="1.1">
          <circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
          <line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>
      </router-link>
      <router-link class="msite_title">
          <span class="title_text ellipsis"></span>
      </router-link>
    </head-top>
    <nav class="msite_nav">
      <div class="swiper-container">
       <div class="swiper-wrapper">
          <div class="swiper-slide food_types_container">
            <router-link>
                <figure>
                  <img src="" alt="">
                  <figcaption></figcaption>
                </figure>
            </router-link>
          </div>
       </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="" alt="" class="f1_back animation_opactiy">
    </nav>
    <div class="shop_list_container">
      <header class="shop_header">
        <svg class="shop_icon">
          <use></use>
        </svg>
        <span class="shop_header_title">附近商家</span>
      </header>
      <shop-list></shop-list>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
export default {
  name: 'msite'
}
</script>

<style lang="scss" scoped>
  .link_search{
    left: .8rem;
  }
  .msite_title{
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -0.5rem;
    .title_text{
      text-align: center;
      display: block;
    }
  }
  .msite_nav{
    padding-top: 2.1rem;
    background-color: #fff;
    border-bottom: 0.025rem solid black;
    height: 10.6rem;
    .swiper-container{
      padding-bottom:0.6rem;
      .swiper-pagination{
      bottom: 0.2rem;
      }
    }
    .f1_back{

    }
  }
  .food_types_container {
    display: flex;
    flex-wrap: wrap;
    /* 有遗漏*/
  }
  .shop_list_container{
    margin-top: .4rem;
    border-top: 0.025rem solid black;
    background-color: #fff;
    .shop_header{
      .shop_icon{
        fill:#999;
        margin-left: 0.6rem;
        vertical-align: middle;
      }
      .shop_header_title{
        color: #999;
      }
    }
  }
</style>
