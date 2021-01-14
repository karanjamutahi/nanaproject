<template>
    <div class="container vert">
        <div class="login-form">
        <v-tabs>
            <v-tab>
                Login
            </v-tab>
            <v-tab>
                Sign Up
            </v-tab>

            <v-tab-item :key="1">
                <v-card>
                    <v-card-text>
                        <v-container>
                        <v-row>
                            <v-col cols="12" md = "12" lg="12">
                            <v-text-field
                                label="Phone Number*"
                                required
                                v-model="loginUser.phoneNumber"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="12" lg="12">
                            <v-text-field
                                label="Password*"
                                required
                                :type="`password`"
                                v-model="loginUser.password"
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
                        @click="loginMyUser"
                        >
                        <span class="white--text">Login</span> 
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
                                label="Name*"
                                hint="Pauline Nana"
                                required
                                v-model="newStudent.name"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="6">
                            <v-text-field
                                label="Phone Number*"
                                hint="0700800500"
                                required
                                v-model="newStudent.phoneNumber"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12" md = "6" lg="12">
                            <v-text-field
                                label="Password*"
                                :type="`password`"
                                required
                                v-model="newStudent.password"
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
                        @click="sendRecord"
                        >
                        <span class="white--text">Sign Up</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-tab-item>
        </v-tabs>
        </div>
    </div>
</template>

<script>

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

    export default {
        data: function() {
            return {
                tab: null,
                items: [
                    "Sign In", "Sign Up"
                ],
                newStudent: {
                    phoneNumber: "",
                    name: "",
                    password: "",
                },
                loginUser: {
                    phoneNumber: "",
                    password: ""
                },
                studentPushLoading: false,
                addUserModal:true,
            }
        },
        props: {
            myvar: Object
        },
        methods: {
            sendRecord: async function() {
                console.log(this.newStudent);
                let res = await fetch(`http://km.dev.localhost:5000/signup/${this.newStudent.phoneNumber}/${this.newStudent.password}/${this.newStudent.name}`);
                    if(!res.ok){
                    console.log('RES WAS NOT OKAY!!!!');
                    alert("Error");
                    return;
                }
                let js = await res.text();
                console.log(js)
                if(res.ok) { 
                    //alert(`${this.newStudent.phoneNumber} ${this.newStudent.password} -- ${this.newStudent.name}`);
                    alert('Sign Up Successful. You can now Log In');
                }
                this.newStudent = {};
            },
            loginMyUser: async function() {
                console.log(this.loginUser);
                //alert(`${this.loginUser.phoneNumber} -- ${this.loginUser.password}`);
                let res = await fetch(`http://km.dev.localhost:5000/loginMyUser/${this.loginUser.phoneNumber}/${this.loginUser.password}`, {credentials: 'include'});
                if(!res.ok) {
                    alert("Error!");
                    return;
                }
                //let js = await res.text();
                let js = await res.json(); 
                //alert(js)
                console.log(js);
                console.log(getCookie("session_id"));
                console.log(res.headers);
                this.loginUser = {};
                console.log("Pushing to Home");
                //this.$router.push({path: '/'});
                this.myvar.status = true;
                
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