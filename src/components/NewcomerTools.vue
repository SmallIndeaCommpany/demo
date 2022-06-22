<template>
    <div class="container">
        <div class="tools">
            <div class="texttools">
                <t3>Newcomer Tools</t3>
                <t2>Wow! see the latest update of the most<br>recommended tools from reliable designers<br>and
                    developers</t2>
                <button>
                    <t2>Explore more</t2>
                </button>
            </div>
            <div class="newPreview">
                <div v-for="tool in newTools" :key="tool.id">
                    <ToolPreviewVue :tool="tool"></ToolPreviewVue>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import store from '@/store';
import ToolPreviewVue from './toolPreview.vue';

export default {
    components: { ToolPreviewVue },
    computed: {
        newTools: function () {
            return store.getters.getNewTools
        }
    }
}
</script>

<style scoped>
.tools {
    display: flex;
    flex-direction: row;
    gap: 15%;
    margin-top: 200px;
}

.texttools {
    width: 35%;
    display: flex;
    flex-direction: column;
    -moz-user-select: none;
    user-select: none;
}

.texttools t3 {
    margin-bottom: 30px;
}

.texttools button {
    width: 198px;
    height: 58px;
    margin-top: 60px;
    background: #FF6E30;
    border-radius: 8px;
}

.texttools button t2 {
    color: #fff;
}

.newPreview {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>