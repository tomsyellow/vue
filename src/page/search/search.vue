<template>
    <div class="paddingTop search_page">
      <head-op head-title="搜索" goBack="true"></head-op>
      <form class="search_form">
        <input type="search" class="search_input">
        <input type="submit" class="search_submit">
      </form>
      <section>
        <h4 class="title_restaurant">商家</h4>
        <ul class="list_container">
          <router-link class="list_li">
          <section class="item_left">
            <img src="" alt="" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span></span>
                <!--<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="14" class="pay_icon">-->
                  <!--<polygon points="0,14 4,0 24,0 20,14" style="fill:none;stroke:#FF6000;stroke-width:1" />-->
                  <!--<line x1="1.5" y1="12" x2="20" y2="12" style="stroke:#FF6000;stroke-width:1.5"/>-->
                  <!--<text x="3.5" y="9" style="fill:#FF6000;font-size:9;font-weight:bold;">支付</text>-->
                <!--</svg>-->
              </p>
              <p>月售单</p>
              <p>元起送/距离</p>
            </div>
            <ul class="item_right_detail">
              <li>
                <span class="activities_icon"></span>
                <span></span>
                <span class="only_phone">(手机客户端专享)</span>
              </li>
            </ul>
           </section>
          </router-link>
        </ul>
      </section>
      <section class="search_history">
        <h4 class="title_restaurant"></h4>
          <ul>
            <li class="history_list">
              <span class="history_text ellipsis"></span>
              <!--<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="delete_icon" @click="deleteHistory(index)">-->
                <!--<line x1="8" y1="8" x2="18" y2="18" style="stroke:#999;stroke-width:3" />-->
                <!--<line x1="18" y1="8" x2="8" y2="18" style="stroke:#999;stroke-width:3" />-->
              <!--</svg>-->
            </li>
          </ul>
        <footer class="clear_history">清空搜索历史</footer>
      </section>
      <div class="search_none">很抱歉!无搜索结果</div>
      <foot-guide></foot-guide>
    </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="scss" scoped>
  .search_page{
    margin-bottom: 2rem;
  }
  .search_form{
    background-color: #fff;
    padding: 0.5rem;
    display: flex;
    input{
      height: 1.5rem;
    }
    .search_input{
      flex:4;
      border: 0.025rem solid black;
      border-radius: 0.125rem;
      background-color: #f2f2f2;
      font-weight: bold;
      padding: 0 0.25rem;
    }
    .search_submit{
      flex: 1;
      border: 0.025rem solid blue;
      margin-left: .2rem;
      border-radius: 0.125rem;
      background-color: blue;
      font-weight: bold;
      padding: 0 0.25rem;
    }
  }
  .title_restaurant{
    font-size: 0.6rem;
    line-height: 2rem;
    text-indent: 0.5rem;
    font-weight: bold;
    color:#666;
  }
  .list_li{
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-bottom: 0.025rem solid black;
    .item_left{
      margin-right: 0.25rem;
      .restaurant_img{
      }
    }
    .item_right{
      font-size: 0.55rem;
      flex: 1;
      .item_right_text{
        padding-bottom: 0.25rem;
        border-bottom: 0.025rem solid black;
        p{
          line-height: .9rem;
        }
        .pay_icon{
          margin-bottom: -0.08rem;
        }
      }
      .item_right_detail{
        margin-top: 0.25rem;
        li{
          font-size: 0;
          span{
            font-size: .5rem;
            vertical-align: middle;
            display: inline-block;
            margin-bottom: 0.2rem;
          }
          .activities_icon{
            font-weight: bold;
            padding: .04rem;
            border-radius: 0.15rem;
            margin-right: 0.125rem;
          }
          .only_phone{
            color: #ff6000;
          }
        }
      }
    }
  }
  .search_history{
    .history_list{
      background-color: #fff;
      border-bottom: 0.025rem solid black;
      padding: 0 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .history_text{
        display: inline-block;
        width: 80%;
      }
      .delete_icon{
      }
    }
    .clear_history{
      background-color: #fff;
      color: blue;
      font-weight: bold;
      text-align: center;
    }
  }
  .search_none{
    margin: 0 auto;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: 0.125rem;
  }
</style>
