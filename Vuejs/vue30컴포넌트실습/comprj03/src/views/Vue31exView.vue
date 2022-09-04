<style>
#app * {
    text-align: center;
    vertical-align: middle;
    line-height: 2em;
}

p {
    top: 50%;
    text-align: center;
    padding: 10px 0;
}

header {
    background-color: orange;
    margin: 10px 0;
    width: 100%;
    height: 60px;
}

footer {
    margin: 10px 0;
    background-color: lightblue;
    width: 100%;
    height: 50px;
    clear: both;
}
</style>

<template>
    <div id="app">
        <!-- component-header -->
        <Vue31exHeader></Vue31exHeader>

        <!-- component-content -->
        <Vue31exContent></Vue31exContent>

        <!-- component-footer -->
        <Vue31exFooter></Vue31exFooter>
    </div>
</template>

<script>
import Vue31exHeader from '../components/Vue31exHeader.vue';
import Vue31exContent from '../components/Vue31exContent.vue';
import Vue31exFooter from '../components/Vue31exFooter.vue';
export default {
    /* pdtmc^2w */
    props: [],
    data() {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {};
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
    },
    components: {
        Vue31exHeader: Vue31exHeader,
        Vue31exContent: Vue31exContent,
        Vue31exFooter: Vue31exFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
    },
    mounted() {
        console.log('mounted');
    },
    updated() {
        console.log('updated');
    }
};
</script>
