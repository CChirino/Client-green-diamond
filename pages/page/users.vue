<template>
    
</template>
<script>
import { axios } from 'axios'

export default {
    name: 'Users',
    data(){
        return{
            users: []
        }
    },
    mounted(){
        axios.axios.get ('207.244.228.155/api/admin/users')
        .then( function(response){
            console.log(response)
        })
    }

};

</script>