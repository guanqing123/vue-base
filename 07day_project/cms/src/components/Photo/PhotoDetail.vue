<template>
    <div>
      <!--标题-->
      <nav-bar title="图文详情"/>
      <!--副标题-->
      <div class="photo-title">
        <p>{{photoInfo.title}}</p>
        <span>发起日期：{{photoInfo.createDate | convertTime('YYYY-MM-DD')}}</span>
        <span>{{photoInfo.reads}}次浏览</span>
        <span>分类：民生经济</span>
      </div>
      <!--9宫图-->
      <my-ul>
        <my-li v-for="(photo,index) in photos" :key="index">
          <img :src="photo.img_url" slot="icon" />
        </my-li>
      </my-ul>
      <!--预览-->
      <vue-preview :slides="imgs" @close="handleClose"></vue-preview>
      <!--详情-->
      <div class="photo-desc">
        <p v-html="photoInfo.content"></p>
      </div>
      <!--使用评论组件-->
      <comment :cid="$route.params.id"></comment>
    </div>
</template>

<script>
export default {
  name: 'photo-detail',
  data () {
    return {
      photoInfo: {}, // 图文详情
      photos: [{img_url: 'https://img.alicdn.com/bao/uploaded/i3/TB15eyhdbY1gK0jSZTENiRDQVXa_115539.jpg_640x640q30.jpg_.webp'},
        {img_url: 'https://img.alicdn.com/bao/uploaded/i8/TB1SU_ydRaE3KVjSZLeYWXsSFXa_110319.jpg_640x640q30.jpg_.webp'},
        {img_url: 'https://img.alicdn.com/bao/uploaded/i2/TB1D5owaRWD3KVjSZFs.sgqkpXa_020205.jpg_640x640q30.jpg_.webp'},
        {img_url: 'https://img.alicdn.com/bao/uploaded/i1/TB19Bx5dkL0gK0jSZFxgWNWHVXa_093919.jpg_640x640q30.jpg_.webp'},
        {img_url: 'https://img.alicdn.com/bao/uploaded/i5/TB1HAC.d79E3KVjSZFGJdA19XXa_112330.jpg_640x640q30.jpg_.webp'},
        {img_url: 'https://img.alicdn.com/bao/uploaded/i8/TB1SU_ydRaE3KVjSZLeYWXsSFXa_110319.jpg_640x640q30.jpg_.webp'}],
      imgs: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  created () {
    let pid = this.$route.params.id
    // 发起请求
    let self = this
    this.$axios.get(`/sellactivity/getSellActivity?id=${pid}&uid=180321105710`)
      .then(res => {
        self.photoInfo = res.data.data
      })
      .catch(console.log)
  },
  methods: {
    handleClose () {
      console.log('img close')
    }
  }
}
</script>

<style scoped>
.photo-title p {
  text-align: center;
  font-weight: bold;
}
.photo-desc >>> img {
  width: 100%;
}
</style>
