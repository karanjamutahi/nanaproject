<template>
  <div class="container vert">
        <div class="login-form">
        <v-tabs>
            <v-tab>
                Check In
            </v-tab>
            <v-tab>
                Check Out
            </v-tab>

            <v-tab-item :key="1">
                <v-card>
                    <v-card-text>
                        <v-container>
                        <v-row>
                            <v-col cols="12" md = "12" lg="12">
                            <v-text-field
                                label="Number Plate*"
                                required
                                v-model="checkinUser.numberPlate"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="12" lg="12">
                            <v-text-field
                                label="Time In"
                                required
                                v-model="checkinUser.timeIn"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        color="blue"
                        :loading="studentPushLoading"
                        :disabled="studentPushLoading"
                        >
                        <span class="white--text">Check In</span> 
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-tab-item>

            <v-tab-item key="2">
                <v-card>
                    <v-card-text>
                        <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4" lg = "6">
                            <v-text-field
                                label="Number Plate"
                                hint="KAS001A"
                                required
                                v-model="checkoutUser.numberPlate"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="6">
                            <v-text-field
                                label="Phone Number*"
                                hint="0700800500"
                                required
                                v-model="checkoutUser.phoneNumber"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md = "6" lg="6">
                            <v-text-field
                                label="Amount"
                                :type="'text'"
                                required
                                v-model="checkoutUser.amount"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md = "6" lg="6">
                            <v-text-field
                                label="Time Out"
                                :type="'text'"
                                required
                                v-model="checkoutUser.timeOut"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                        color="blue"
                        :loading="studentPushLoading"
                        :disabled="studentPushLoading"
                        >
                        <span class="white--text">Check Out</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-tab-item>
        </v-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
            return {
                tab: null,
                items: [
                    "Check In", "Check Out"
                ],
                checkoutUser: {
                    phoneNumber: "",
                    numberPlate: "",
                    amount: "",
                    timeOut: this.getTimeNow() 
                },
                checkinUser: {
                    numberPlate: "",
                    timeIn: this.getTimeNow()
                },
                studentPushLoading: false,
                addUserModal:true,
            }
        },
    methods: {
        getTimeNow: function() {
            let d = new Date();
            console.log(`Lenght of hours: ${d.getHours() === 17 }`);
            let hours = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
            let minutes = d.getMinutes()  > 9 ? d.getMinutes() : '0' + d.getMinutes();
            return `${hours}:${minutes}`;
        }
    }
}
</script>

<style scoped>
    div.login-form {
        border-radius: 10px;
        border: 2px solid white;
        min-width: 500px;
        max-width: 60%;
    }

    div.vert {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 700px;
    }
</style>