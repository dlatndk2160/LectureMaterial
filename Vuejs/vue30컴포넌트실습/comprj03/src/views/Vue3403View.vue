<template>
    <div id="app">
        자식 컴포넌트에서 받은 값: {{ mesg }}
        <!--자식에서 받은 건 나를 바꿔야함-->
        <child-component v-on:showLog="printText"></child-component>
    </div>
</template>

<script>
import Vue3403Comp from '../components/Vue3403Comp.vue';
export default {
    /* pdtmc^2w */
    props: [],
    data() {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            mesg: '부모에서 설정한 값'
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        printText(param1, param2) {
            //console.log(arguments); //arguments 한번에 받을수있다
            console.log(param1, param2);
            debugger;
            this.$data.mesg = `자식에서 받은 값: param1=${param1}, parma2=${param2}`;
        }
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
        'child-component': Vue3403Comp
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
