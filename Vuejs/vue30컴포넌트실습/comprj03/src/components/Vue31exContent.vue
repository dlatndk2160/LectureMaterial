<style scoped>
/* <div id="content-list"> */
#content {
    background-color: white;
    margin: 0 0 30px 0;
}

aside {
    background-color: gray;
    margin: 20px;
    width: calc(50% - 40px);
    height: 200px;
    float: left;
}

#content-list {
    background-color: gray;
    margin: 20px;
    width: calc(50% - 40px);
    float: right;
    height: 200px;
}

#content::after {
    clear: both;
    display: block;
    content: '';
}
</style>
<template>
    <div id="content">
        <p>Content</p>

        <!-- component-aside -->
        <Vue31exAside></Vue31exAside>

        <!-- component-content-list -->
        <Vue31exList></Vue31exList>
    </div>
</template>

<script>
import Vue31exAside from '../components/Vue31exAside.vue';
import Vue31exList from '../components/Vue31exList.vue';
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
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        Vue31exAside: Vue31exAside,
        Vue31exList: Vue31exList
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
