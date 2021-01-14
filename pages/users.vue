<template>
    <div class="somePadding">
        <v-data-table :headers="userHeaders" :items="Myitems" :loading="this.$fetchState.loadingState" class="mak-data-table"></v-data-table>
    </div>
</template>

<script>
    export default {
        data: function(){
            return ({
        headers: [
            {
                name: "id",
                value: "id"
            },
            {
                name: "Check In Status",
                value: "checkin_status"
            },
            {
                name: "Number Plate",
                value: "number_plate"
            },
            {
                name: "Time In",
                value: "timestamp"
            },
            {
                name: "Time Out",
                value: "timestamp_out"
            },
            {
                name: "id",
                value: "id"
            },
        ],
        userHeaders: [
            {
                text: 'id',
                value: 'id'
            },
            {
                text: 'Name',
                value: 'name'
            },
            {
                text: 'National ID',
                value: 'national_id'
            },
            {
                text: 'Phone Number',
                value: 'phone_number'
            },
            {
                text: "Timestamp",
                value: 'timestamp'
            }
        ],
        Myitems: []
    })
    },
    fetch: async function() {
        let res = await fetch('http://km.dev.localhost:5000/allmyusers')
        let json = await res.json();
        console.log(json);
        this.Myitems = json;
    }  
    }
</script>

<style scoped>

div.somePadding {
    margin: 50px 30px;
}

div.mak-data-table {
    border-radius: 20px;
}
</style>