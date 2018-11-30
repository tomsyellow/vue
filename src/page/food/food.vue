<template>
  <div class="food_container">你好啊我叫陈西南
    <head-top></head-top>
      <section class="sort_container">
        <!-- 分类-->
        <div class="sort_item">
          <div class="sort_item_container">
            <div class="sort_item_border">
              <span></span>
              <!--<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">-->
                <!--<polygon points="0,3 10,3 5,8"/>-->
              <!--</svg>-->
            </div>
          </div>
          <transition name="showlist">
            <section class="category_container sort_detail_type">
              <section class="category_left">
                <ul>
                  <li class="category_left_li">
                    <section>
                      <img src="" alt="" class="category_icon">
                      <span></span>
                    </section>
                    <section>
                      <span class="category_count"></span>
                      <!--<svg v-if="index" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" class="category_arrow" >-->
                        <!--<path d="M0 0 L6 4 L0 8"  stroke="#bbb" stroke-width="1" fill="none"/>-->
                      <!--</svg>-->
                    </section>
                  </li>
                </ul>
              </section>
              <section class="category_right">
                <ul>
                  <li class="category_right_li">
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </section>
            </section>
          </transition>
        </div>
        <!-- 排序-->
        <div class="sort_item">
          <div class="sort_item_container">
            <div class="sort_item_border">
              <span>排序</span>
              <!--<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">-->
                <!--<polygon points="0,3 10,3 5,8"/>-->
              <!--</svg>-->
            </div>
          </div>
          <transition name="showlist">
            <section class="sort_detail_type">
              <ul class="sort_list_container">
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                  </svg>
                  <p>
                    <span>智能排序</span>
                    <!--<svg v-if="sortByType == 0">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                  </p>
                </li>
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                  </svg>
                  <p>
                    <span>距离最近</span>
                    <!--<svg v-if="sortByType == 5">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                  </p>
                </li>
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                  </svg>
                  <p></p>
                  <span>销量最高</span>
                  <!--<svg v-if="sortByType == 6">-->
                    <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                  <!--</svg>-->
                </li>
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                  </svg>
                  <p>
                    <span>起送价最低</span>
                    <!--<svg v-if="sortByType == 1">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                  </p>
                </li>
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                  </svg>
                  <p>
                    <span>配送速度最快</span>
                    <!--<svg v-if="sortByType == 2">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                  </p>
                </li>
                <li class="sort_list_li">
                  <svg>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                  </svg>
                  <p>
                    <span>评分最高</span>
                    <!--<svg v-if="sortByType == 3">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                  </p>
                </li>
              </ul>
            </section>
          </transition>
        </div>
        <!-- 筛选-->
        <div class="sort_item">
          <div class="sort_item_container">
            <span>筛选</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
          <transition name="showlist">
            <section class="sort_detail_type filter_container">
              <section style="width: 100%">
                <header class="filter_header_style">配送方式</header>
                <ul class="filter_ul">
                  <li class="filter_li">
                    <!--<svg :style="{opacity: (item.id == 0)&&(delivery_mode !== 0)? 0: 1}">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="delivery_mode == item.id? '#selected':'#fengniao'"></use>-->
                    <!--</svg>-->
                    <soan></soan>
                  </li>
                </ul>
              </section>
              <section style="width: 100%;">
                <header class="filter_header_style">商家属性(可以多选)</header>
                <ul class="filter_ul" style="padding-bottom: .5rem">
                  <li class="filter_li">
                    <!--<svg v-show="support_ids[index].status" class="activity_svg">-->
                      <!--<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>-->
                    <!--</svg>-->
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </section>
              <footer class="confirm_filter">
                <div class="clear_all filter_button_style">清空</div>
                <div class="confirm_select filter_button_style">确定</div>
              </footer>
            </section>
          </transition>
        </div>
      </section>
      <transition name="showlist">
        <div class="back_cover"></div>
      </transition>
      <section class="shop_list_container">
        <shop-list></shop-list>
      </section>
  </div>
</template>
<script>
export default {
  name: 'food'
}
</script>
<style lang="scss" scoped>
  /*@import "src/style/mixin";*/
  .food_container {
    padding-top: 3.6rem;
  }
  .sort_container {
    background-color: #fff;
    border-bottom: 0.025rem solid #f1f1f1;
    position: fixed;
    top: 1.95rem;
    right: 0;
    width: 100%;
    display: flex;
    z-index: 13;
    box-sizing: border-box;
    .sort_item {
      /*<!--@include sc(0.55rem, #444);-->*/
      /*<!--@include wh(33.3%, 1.6rem);-->*/
      text-align: center;
      line-height: 1rem;
      .sort_item_container {
        /*<!--@include wh(100%, 100%);-->*/
        position: relative;
        z-index: 14;
        background-color: #fff;
        box-sizing: border-box;
        padding-top: 0.3rem;
        .sort_item_border {
          height: 1rem;
          border-right: 0.025rem solid black;
        }
      }
      .sort_icon {
        vertical-align: middle;
        transition: all 0.3s;
        fill: #666;
      }
    }
    .choose_type {
      .sort_item_container {
        .category_title {
          color: blue;
        }
        .sort_icon {
          transform: rotate(180deg);
          fill: blue;
        }
      }
    }
    .showlist-enter-active,
    .showlist-leave-active {
      transition: all 0.3s;
      transform: translateY(0);
    }
    .showlist-enter,
    .showlist-leave-active {
      opacity: 0;
      transform: translateY(-100%);
    }
    .sort_detail_type {
      width: 100%;
      position: absolute;
      display: flex;
      top: 1.6rem;
      left: 0;
      border-top: 0.025rem solid black;
      background-color: #fff;
    }
    .category_container {
      .category_left {
        flex: 1;
        background-color: #f1f1f1;
        height: 16rem;
        overflow-y: auto;
        span {
          /*<!--@include sc(0.5rem, #666);-->*/
          line-height: 1.8rem;
        }
        .category_left_li {
          //@include fj;
          padding: 0 0.5rem;
          .category_icon {
            /*<!--@include wh(0.8rem, 0.8rem);-->*/
            vertical-align: middle;
            margin-right: 0.2rem;
          }
          .category_count {
            background-color: #ccc;
            /*<!--@include sc(0.4rem, #fff);-->*/
            padding: 0 0.1rem;
            border: 0.025rem solid #ccc;
            border-radius: 0.8rem;
            vertical-align: middle;
            margin-right: 0.25rem;
          }
          .category_arrow {
            vertical-align: middle;
          }
        }
        .category_active {
          background-color: #fff;
        }
      }
      .category_right {
        flex: 1;
        background-color: #fff;
        padding-left: 0.5rem;
        height: 16rem;
        overflow-y: auto;
        .category_right_li {
          //@include fj;
          height: 1.8rem;
          line-height: 1.8rem;
          padding-right: 0.5rem;
          border-bottom: 0.025rem solid black;
          span {
            color: #666;
          }
        }
        .category_right_choosed {
          span {
            color: blue;
          }
        }
      }
    }
    .sort_list_container {
      width: 100%;
      .sort_list_li {
        height: 2.5rem;
        display: flex;
        align-items: center;
        svg {
          /*<!--@include wh(0.7rem, 0.7rem);-->*/
          margin: 0 0.3rem 0 0.8rem;
        }
        p {
          line-height: 2.5rem;
          flex: auto;
          text-align: left;
          text-indent: 0.25rem;
          border-bottom: 0.025rem solid black;
          //@include fj;
          align-items: center;
          span {
            color: #666;
          }
        }
        .sort_select {
          span {
            color: blue;
          }
        }
      }
    }
    .filter_container {
      flex-direction: column;
      align-items: flex-start;
      min-height: 10.6rem;
      background-color: #f1f1f1;
      .filter_header_style {
        /*<!--@include sc(0.4rem, #333);-->*/
        line-height: 1.5rem;
        height: 1.5rem;
        text-align: left;
        padding-left: 0.5rem;
        background-color: #fff;
      }
      .filter_ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.5rem;
        background-color: #fff;
        .filter_li {
          display: flex;
          align-items: center;
          border: 0.025rem solid #eee;
          /*<!--@include wh(4.7rem, 1.4rem);-->*/
          margin-right: 0.25rem;
          border-radius: 0.125rem;
          padding: 0 0.25rem;
          margin-bottom: 0.25rem;
          svg {
            /*<!--@include wh(0.8rem, 0.8rem);-->*/
            margin-right: 0.125rem;
          }
          span {
            /*<!--@include sc(0.4rem, #333);-->*/
          }
          .filter_icon {
            /*<!--@include wh(0.8rem, 0.8rem);-->*/
            font-size: 0.5rem;
            border: 0.025rem solid black;
            border-radius: 0.15rem;
            margin-right: 0.25rem;
            line-height: 0.8rem;
            text-align: center;
          }
          .activity_svg {
            margin-right: 0.25rem;
          }
          .selected_filter {
            color: blue;
          }
        }
      }
      .confirm_filter {
        display: flex;
        background-color: #f1f1f1;
        width: 100%;
        padding: 0.3rem 0.2rem;
        .filter_button_style {
          /*<!--@include wh(50%, 1.8rem);-->*/
          font-size: 0.8rem;
          line-height: 1.8rem;
          border-radius: 0.2rem;
        }
        .clear_all {
          background-color: #fff;
          margin-right: 0.5rem;
          border: 0.025rem solid #fff;
        }
        .confirm_select {
          background-color: #56d176;
          color: #fff;
          border: 0.025rem solid #56d176;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .showcover-enter-active,
  .showcover-leave-active {
    transition: opacity 0.3s;
  }
  .showcover-enter,
  .showcover-leave-active {
    opacity: 0;
  }
  .back_cover {
    position: fixed;
    /*<!--@include wh(100%, 100%);-->*/
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
