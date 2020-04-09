import Vue from "vue";
import Vuex from "vuex";

import actions from "store/actions";
import mutations from "store/mutations";
import getters from "store/getters";
Vue.use(Vuex);

const state = {
  // cartList: [];
  cartList: [
    {
      count: 2,
      iid: "1lxjr56",
      img:
        "//s5.mogucdn.com/mlcdn/c45406/180506_203fc31e9d6ekikc8i922i7kbgdbk_640x960.jpg",
      title:
        "2018新款早春款韩版百搭宽松体恤刺绣字母圆领短袖T恤女学生上衣服洋气小衫",
      desc:
        "基础款的短袖T恤，这样的百搭款，即使多备上几件都穿得上宽松直筒的衣身设计，藏肉又显瘦，慵懒又随意不论是内搭还是单穿都很好穿，整个人看上去格外小巧微微落肩的设计，巧妙地模糊了肩线，不显肩宽又能显得手臂纤细柔滑细滑的棉质面料，细密紧实的织面，上身亲肤又舒适基础的小圆领也是好穿不挑人，很显年轻",
      price: "¥39.90",
      realPrice: "39.90",
      isChecked: true
    },
    {
      count: 2,
      iid: "1m76pms",
      img:
        "//s5.mogucdn.com/mlcdn/c45406/180815_7ff4fbk769cc2d1c2l494ie7j5jke_640x908.jpg",
      title: "2018秋新款韩版时尚简约系带显瘦条纹系带西服套装女",
      desc: "新款",
      price: "¥108.00",
      realPrice: "108.00",
      isChecked: true
    },
    {
      count: 2,
      iid: "1lwwv1g",
      img:
        "//s11.mogucdn.com/mlcdn/c45406/180814_4j9hdlgjl0jeai2akhf150g1gdge6_640x960.jpg",
      title: "2018新款女装秋装简约衬衫女长袖雪纺上衣百搭纯色韩范打底衬衣女",
      desc:
        "店主推荐：简约气质的衬衫，小翻领设计，胸前画出V字，修饰脸型的同时也能显得精神奕奕，面料亲肤透气，厚度应付得初秋的凉意，合身的版型足够舒适自在，可以在洒下暖阳的日子里给春天一个大大的拥抱，百搭的基础款，无需费心搭配，和初秋的毛衣，针织背心切磋都游刃有余，搭配裤装或裙装都不会显得枯燥！",
      price: "¥56.00",
      realPrice: "56.00",
      isChecked: true
    },
    {
      count: 2,
      iid: "1m8vlly",
      img:
        "//s11.mogucdn.com/mlcdn/c45406/180922_05jafg8g5k7flkj35icg400b0l4k7_800x1200.jpg",
      title: "2018秋新款飞鹰烫金印花字母纯棉潮牌情侣小脚裤男女同款",
      desc:
        "潮牌时尚情侣款，尺码宽松，小店衣服都是情侣款，男女同款的，只是模特是女生，不知道选尺码咨询客服",
      price: "¥158.00",
      realPrice: "158.00",
      isChecked: true
    },
    {
      count: 2,
      iid: "1m3djgk",
      img:
        "//s11.mogucdn.com/mlcdn/c45406/180605_2e2k3g0bd704jdk2kjddj0habg8k5_900x1200.jpg",
      title:
        "宽松白色短袖T恤女韩版半袖上衣印花2018夏季女装新款班服ins时尚百搭学生衣服大码体恤",
      desc: "宽松白色短袖T恤女",
      price: "¥29.90",
      realPrice: "29.90",
      isChecked: true
    },
    {
      count: 1,
      iid: "1klchjq",
      img:
        "//s11.mogucdn.com/mlcdn/c45406/170924_152hjhlji2bfh01ej874ihi32kjl8_640x960.jpg",
      title:
        "2018春秋季女装新款韩版女格子衬衫前短后长针织百搭开衫外套直筒牛仔裤两件套三件套时尚套装",
      desc:
        "宽松的版型，简约的设计 将简约美贯彻到底 短款的长度显瘦显高不挑人 上身很显气质 宽松的袖子将我们手臂的肉肉轻松遮住 面料同样是采用马海毛 特别又可爱",
      price: "¥59.00~¥178.00",
      realPrice: "59.00",
      isChecked: true
    },
    {
      count: 2,
      iid: "1m7fhog",
      img:
        "//s11.mogucdn.com/mlcdn/c45406/180819_2791931dhhb5h5bgik2cd6f4cc2ih_640x960.jpg",
      title:
        "2018秋装新款韩版时尚套装chic暗红显白BF宽松显瘦冲锋衣外套+条杠休闲运动裤女两件套",
      desc:
        "2018秋装新款韩版时尚套装chic暗红显白BF宽松显瘦冲锋衣外套+条杠休闲运动裤女两件套",
      price: "¥75.50~¥165.50",
      realPrice: "75.50",
      isChecked: true
    }
  ]
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

export default store;
