<template>
    <gate>
    <div class="somePadding">
        <v-data-table :headers="headers" :items="datapoints" class="datatablemine"></v-data-table>
    </div>
    </gate>
</template>

<script>
    export default {
        data: function(){
            return({
            headers: [
                {
                    text: 'id',
                    value: 'id'
                },
                {
                    text: 'Status',
                    value: 'checkin_status'
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
                    text: 'Number Plate',
                    value: 'number_plate'
                },
                {
                    text: 'Phone Number',
                    value: 'phone_number'
                },
                {
                    text: 'Timestamp In',
                    value: 'timestamp'
                },
                {
                    text: 'Timestamp Out',
                    value: '-' //timestamp_checkout
                },
            ],
            datapoints: []
            })
        },
        fetch: async function(){
            let res = await fetch('http://km.dev.localhost:5000/mycheckins')
            let json = await res.json();
            this.datapoints = json;
            console.log(json)
        }
    }
</script>

<style scoped>
div.somePadding{
    margin: 50px 30px;
}

div.datatablemine{
    border-radius: 20px;
}
</style>