<template>
    <div id="app">
        <h2>컴포넌트 등록</h2>
        <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
        <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
    </div>
</template>

<script>
import Vue3103Comp from '../components/Vue3103Comp.vue';
export default {
    /* pdtmc^2w */
    props: [], //받는것
    data() {
        //보관하는것
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            localmsg1: '부모에서 파일 컴포넌트로 넘겨진 메세지 1',
            localmsg2: '부모에서 파일 컴포넌트로 넘겨진 메세지 2'
        };
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        //'local-component': Vue3103Comp //상단에서 Vue3103 import 해줘야 사용가능
        Vue3103Comp: Vue3103Comp //상단에서 Vue3103 import 해줘야 사용가능
    }
};
</script>
