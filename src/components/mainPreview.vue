<template>
    <div class="container">
        <div class="head">
            <h3>Most Popular Tools</h3>
            <h2>Tools for the best Designers and Developers<br />most popularly used in the world</h2>
        </div>
        <div class="mainContent">
            <div v-for="tool in toolsList" :key="tool.id">
                <ToolPreviewVue :tool="tool"></ToolPreviewVue>
            </div>

        </div>
        <div class="loadBtn">
            <button @click="updateList">
                <h2 class="orangeText">Load More</h2>
            </button>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import ToolPreviewVue from './toolPreview.vue';
export default {
    components: { ToolPreviewVue },
    computed: {
        toolsList: function () {
            return store.getters.getPopularTools
        },
    },
    methods:{
        updateList(){
            store.commit('setLastId')
        }
    }
}
</script>

<style scoped>
.head {
    display: flex;
    flex-direction: column;
    text-align: center;
    -moz-user-select: none;
    user-select: none;
}

.container {
    margin-top: 200px;
}

.loadBtn {
    text-align: center;
}

.loadBtn button {
    width: 184px;
    height: 64px;
    background: #1E252B;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.orangeText {
    color: #ff6e30;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
}


.mainContent {
    display: grid;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 100px;
    column-gap: 20px;
}
</style>