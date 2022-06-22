<template>
    <div class="previewBox">
        <span class="eclipse"></span>
        <div class="firstLine">
            <img src="@/assets/logos_visual-studio-code.svg" alt='@/assets/no_image.png'>
            <div>
                <t1>{{ name }}</t1>
                <t2>{{ payd }}</t2>
            </div>
        </div>
        <div class="textBlock">
            <t2>{{ text }}</t2>
        </div>
        <div class="actionLine">
            <label class="likeBox">
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
            <button @click="visitTool">
                <t2>Visit</t2>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: ['tool'],
    data() {
        return {
            name: '',
            payd: '',
            text: '',
            ref: '',
        }
    },
    mounted() {
        if (this.tool != null) {
            const data = this.tool.data()
            this.name = this.tool.id
            this.payd = data.payd
            this.text = data.text
            this.ref = data.ref

        }

    },
    methods: {
        visitTool() {
            if (this.ref != '') {
                window.location.href = this.ref
            }


        }
    }
}
</script>

<style scoped>
.previewBox {
    position: relative;
    border-radius: 15px;
    padding: 30px;
    transition: all 0.5s;
    overflow: hidden;
}

.previewBox:hover {
    background: rgba(40, 48, 54, 0.6);
    transform: translateY(-10px);
    transition: all 0.5s;

}

.previewBox:hover .actionLine button {
    background: #FF6E30;
    transition: all 1s;
}

.previewBox:hover .actionLine button t2 {
    color: #FFFFFF;
    transition: all 0.5s;

}

.previewBox:hover .eclipse {
    background: rgba(255, 110, 48, 0.6);
    transition: all 2s;
}

.previewBox div {
    background: none;
}

.firstLine {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.firstLine div {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.firstLine t1 {
    text-align: center;
    background: none;
}

.firstLine t2 {
    color: #FFA537;
}

.firstLine img {
    background: none;
}

.textBlock {
    margin-top: 30px;
    margin-bottom: 30px;
}

.actionLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.actionLine button {
    width: 106px;
    height: 42px;
    border-radius: 8px;
    border: none;
}

.actionLine t2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}

.likeBox {
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

}

.likeBox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background: url(@/assets/flat-color-icons_like_off.svg) no-repeat center;
}

.likeBox:hover input~.checkmark {
    background: url(@/assets/flat-color-icons_like_off.svg) no-repeat center #283036;
    box-shadow: 0px 5px 10px -3px rgba(18, 18, 18, 0.15);
    transition: all 250ms;
}

.likeBox input:checked~.checkmark {
    background: url(@/assets/flat-color-icons_like_on.svg) no-repeat center #283036;
    box-shadow: 0px 5px 10px -3px rgba(18, 18, 18, 0.15);
    transition: all 250ms;
}

.eclipse {
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    width: 65px;
    height: 65px;
    margin-right: 15px;
    margin-top: 5px;
    background: rgba(255, 110, 48, 0);
    filter: blur(50px);
    border-radius: 50%;
}
</style>