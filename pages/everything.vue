<template>
    <div class="somePadding">
        <gate>
            <v-data-table :headers="headers" :items="everyone" :loading="stillLoading" class='my-datatable'></v-data-table>
        </gate>
    </div>
</template>

<script>
    export default {
        data: function(){
            return({
            headers: [
                {
                    text: "id",
                    value: "id"
                },
                {
                    text: "Name",
                    value: "name"
                },
                {
                    text: "Phone Number",
                    value: "phone_number"
                },
                {
                    text: "National Id",
                    value: "national_id"
                },
                {
                    text: "Number Plate",
                    value: "number_plate"
                },
            ],
            everyone: [],
            stillLoading: false
            })
        },
        fetch: async function() {
            this.stillLoading = true;
            let response = await fetch('http://km.dev.localhost:5000/allUsers');
            let json = await response.json();
            this.everyone = json;
            this.stillLoading = false;
        }
    }
</script>

<style scoped>
    div.somePadding{
        margin: 50px 30px;
    }

    div.my-datatable{
        border-radius: 20px;
    }
</style>