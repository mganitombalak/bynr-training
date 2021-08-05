<template>
<ul>
    <li v-for="(basketItem,index) in basketItems" :key="'basketItem-'+index">
        {{basketItem.Name}} - {{basketItem.Qty}}
    </li>
</ul>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            basketItems:[],
            hasError:false
        }
    },
    mounted(){
        axios.post('/basket',{headers:{'Authorization':'Bearer'+ localStorage.get('token')}})
        .then(result=>this.basketItems=result.data.items)
        .catch(e=>this.hasError=true);
    }
}
</script>
