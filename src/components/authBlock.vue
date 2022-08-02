<template>
    <div class="container">
        <div class="auth">
            <div class="radioblock">
                <label class="radioSelect">
                    <input type="radio" name="authRadio" value="auth" v-model="picked" />
                    <span class="cheakmark">
                        <h2>Sing up</h2>
                    </span>
                </label>
                <label class="radioSelect">
                    <input type="radio" name="authRadio" value="registr" v-model="picked" />
                    <span class="cheakmark">
                        <h2>Registration</h2>
                    </span>
                </label>

            </div>
            <div class="inputBlock">
                <h2>Email</h2>
                <input type="email" v-model="email" />
                <template v-if="picked == 'registr'">
                    <h2>Nickname</h2>
                    <input type="text" v-model="nickname" />
                </template>
                <h2>Password</h2>
                <input type="password" v-model="password" />
                <template v-if="picked == 'registr'">
                    <h2>Repeat password</h2>
                    <input type="password" v-model="repeatPassword" />
                </template>
            </div>
            <div class="passrem">
                <label>
                    <input type="checkbox">
                    <span>
                        <h2>Remember me</h2>
                    </span>
                </label>
            </div>
            <div class="authBtn">
                <button @click="login">
                    <h2>{{ btntext }}</h2>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import store from '@/store';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'

export default {
    data() {

        return {
            picked: '',
            btntext: 'Sing up',
            email: '',
            nickname: '',
            password: '',
            repeatPassword: '',
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
                    this.btntext = 'Sing up'
                } else if (val == 'registr') {
                    this.$router.push('/auth/registration')
                    this.btntext = 'Registration'
                }
            }
        },//отслеживание по изменению radiobutton
        $route: {
            handler(newVal) {
                this.picked = this.authMod(newVal)
            }

        },//отслеживание по изменению пути
    },// отслеживание изменений вкладок регистрации и аунтефикации
    methods: {
        authMod(router) {
            let mod = ''
            if (router.path == '/auth/sing') {
                mod = 'auth'
            } else if (router.path == '/auth/registration') {
                mod = 'registr'
            }
            return mod
        },//метод отслеживания изменений вкладок регистрации и аунтефикации

        login() {
            if (this.picked == 'registr') { this.register() }
            else if (this.picked == 'auth') { this.singIn() }
        },//метод вызываемый при клике на кнопку аунтефикации/регистрации

        register() {
            const auth = getAuth()
            if (this.controlRegistr()) {
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then(() => {
                        updateProfile(auth.currentUser,{displayName: this.nickname}).then(() => store.commit('setLogin',auth.currentUser));
                        sendEmailVerification(auth.currentUser).then(() => console.log('email send'));
                        console.log("регистрация успешна");
                        this.$router.push('/')
                    })
                    .catch(() => console.log("Ошибка регистрации"))
            }
        },//метод регистрации в firebase с отправкой верефикационного письма

        singIn() {
            const auth = getAuth()
            if (this.controlSing) {

                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then(() => {
                        store.commit('setLogin',auth.currentUser)
                        this.$router.push('/');
                    })
            }
        },//метод аунтефикации

        controlSing() {
            if ((this.email == '') || (this.password == '')) {
                return false
            } else return true
        }, //метод проверки данных введеных пользователем при аунтефикации
        controlRegistr() {
            if ((this.email == '') || (this.password == '') || (this.nickname == '')) {
                return false
            } else if (this.password != this.repeatPassword) {
                return false
            } else if ((this.email.length - this.email.replace(/@/g, "").length) != 1) {
                return false
            } else return true
        }, //метод проверки данных введеных пользователем при регистрации
     
    }
}
</script>

<style scoped>
* {
    background: none;
}

.auth {
    position: relative;
    width: 300px;
    margin: auto;
    margin-top: 100px;
    border-radius: 20px;
    padding-bottom: 20px;
    background: rgba(40, 48, 54, 0.6);
}

.radioSelect {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.radioSelect input {

    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.auth button {
    text-align: center;
    margin: auto;
}

.cheakmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 100%;
    text-align: center;
    justify-content: center;
    background-color: #1e252b;
}

.radioSelect input:checked~.cheakmark {
    background: none;
}

.radioblock {
    display: flex;
    width: 100%;
    height: 100%;
}

.inputBlock {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.inputBlock input {
    border: none;
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    background-color: none;

    color: rgba(255, 255, 255, 0.9);
}

.passrem {
    
    margin-left: 10px;
}

.passrem input {
    
    margin-right: 5px;
}

.authBtn {
    width: 100%;
    margin-top: 30px;
    text-align: center;
}

.authBtn button {
    background: #FF6E30;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    border: none;
}

.authBtn h2 {
    color: #fff;
}
</style>