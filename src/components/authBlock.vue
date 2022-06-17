<template>
    <div class="container">
        <div class="auth">
            <div>
                <input type="radio" name="authRadio" value="auth" v-model="picked">
                <input type="radio" name="authRadio" value="registr" v-model="picked">
            </div>
            <div class="inputBlock">
                <t2>Email</t2>
                <input type="email" />
                <t2>Пароль</t2>
                <input type="password" />
            </div>
            <div>
                <input type="checkbox">
                <t2>Запомнить пароль</t2>
            </div>
            <button>
                <t2>Войти</t2>
            </button>
        </div>
    </div>
</template>

<script>


export default {
    data() {
         
        return {
            
            picked: ''
        }
    },
    mounted() {
        this.picked = this.authMod(this.$route)
    },
    watch: {
        picked: {
            handler(val) {
                if (val == 'auth') {
                    this.$router.push('/auth/sing')
                } else if (val == 'registr') {
                    this.$router.push('/auth/registration')
                }
            }
        },

        $route:{
            handler(newVal){
               this.picked = this.authMod(newVal)
            }

        },
    },
    methods:{
         authMod (router){
                let mod = ''
                if(router.path == '/auth/sing' ){
                    mod = 'auth'  
                }else if(router.path == '/auth/registration'){
                    mod = 'registr'
                }
                return mod
            }
    }




}
</script>

<style scoped>
.auth {
    position: relative;
    width: 300px;
    margin: auto;
    margin-top: 100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
}

.auth button {
    text-align: center;
    margin: auto;
}

.inputBlock {
    display: flex;
    flex-direction: column;
}
</style>