<template>
    <div class="container">
        <div class="auth">
            <div>
                <input type="radio" name="authRadio" value="auth" v-model="picked">
                <input type="radio" name="authRadio" value="registr" v-model="picked">
            </div>
            <div class="inputBlock">
                <t2>Email</t2>
                <input type="email" v-model="email" />
                <t2>Пароль</t2>
                <input type="password" v-model="password" />
            </div>
            <div>
                <input type="checkbox">
                <t2>Запомнить пароль</t2>
            </div>
            <button @click="login">
                <t2>{{ btntext }}</t2>
            </button>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

export default {
    data() {

        return {
            picked: '',
            btntext: 'Войти',
            email: '',
            password: '',
        }
    },
    mounted() {
        this.picked = this.authMod(this.$route)
    },
    watch: {
        picked: {
            handler(val) {
                this.password = '';
                if (val == 'auth') {
                    this.$router.push('/auth/sing')
                    this.btntext = 'Войти'
                } else if (val == 'registr') {
                    this.$router.push('/auth/registration')
                    this.btntext = 'Зарегистрироваться'
                }
            }
        },
        $route: {
            handler(newVal) {
                this.picked = this.authMod(newVal)
            }

        },
    },
    methods: {
        authMod(router) {
            let mod = ''
            if (router.path == '/auth/sing') {
                mod = 'auth'
            } else if (router.path == '/auth/registration') {
                mod = 'registr'
            }
            return mod
        },
        login() {
            if (this.picked == 'registr') { this.register() }
            else if (this.picked == 'auth') { this.singIn() }


        },
        register() {
            const auth = getAuth()
            if (this.control()) {
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then(() => {
                        console.log("регистрация успешна");
                        sendEmailVerification(auth.currentUser).then(() => console.log('email send'))
                    })
                    .catch(() => console.log("Ошибка регистрации"))
            }

        },
        singIn() {
            const auth = getAuth()
            if(this.control){
                signInWithEmailAndPassword(auth,this.email,this.password)
                .then(()=>{console.log("вход успешен")})
                .catch(() => {console.log("ошибка")})
            }
        },

        control() {
            if ((this.email == '') || (this.picked == '')) {
                return false
            } else return true
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