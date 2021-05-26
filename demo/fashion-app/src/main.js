import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import root from './pages/Root';
import HomePage from './pages/home/Home';
import NotFound from './common/components/NotFound';
import '../src/assets/css/style.css';

const shopPage = ()=> import('./pages/shop/Shop.vue'); // LAZY LOAD

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',component:HomePage},
        { path: '/shop', component: shopPage ,children:[
            { path: ':id', component: shopPage,props:true }
        ]},
        { path: '/:notfound(.*)', component: NotFound },
    ],
    linkActiveClass:'active',
    scrollBehavior(to,from) {
        console.log(from);
        console.log(to);
        // if(savedPosition){
        //     return savedPosition;
        // } else
        return {left:0,top:0};
    },
});

// router.beforeEach((to,from,next)=>{
//     console.log(from);
//     console.log(to);
//     next(false);
// });

let app = createApp(root);
app.use(router);
app.mount('#app')


// //modal.js
// <p>Nbr?</p>
// close(){
//     modali kapat
// }
// show(){
//     modali goster
// }
// this.okButton.addEventlistener('click',()=>this.close());
// export default modal;




// // shop.js
// //import modal from 'modal';
// <div>afjkghakfghkjkhakfhg>afgjkhafkghakfghjkafhgkhakfjg
// <button id="hizlibak">Bak</button>
// </div>

// document.QuerySelector("#hizlibak").addEventlistener('click',()=>{
    
//     import('modal.js').then(m=>{
//         import('my.csss');
//         m.show();
//     })
// });
