<template>
<div>
    <slot v-if="loggedin">  
    </slot>

    <login v-else/>
</div>
</template>

<script>
import getCookie from '../assets/getCookie';

export default {
    data:function(){
        return {
            loggedin: false,
            userStat: {
                status: true
            }
        }
    },
    mounted: async function(context){
        let cookie = getCookie("session_id");

        console.log(cookie);
        console.log(document.cookie);
        console.log(context);

        if (cookie === null || cookie.length <= 0 ) {
            console.log('Going to Login');
            //this.$router.push({path: '/login'});
            return;
        }

        let res = await fetch(`http://km.dev.localhost:5000/authed/${cookie}`);
        let text = await res.json();
        
        console.log(text);

        if (text.session_id === cookie) {
            this.loggedin = true;
        }
        return;
    }
}
</script>