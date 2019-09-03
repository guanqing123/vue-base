import imgSrc from './myGirl.jpg'
export default {
    template:`
        <div>
           <img :src="imgSrc" />         
        </div>
    `,
    data(){
        return {
            imgSrc: imgSrc
        }
    }
};