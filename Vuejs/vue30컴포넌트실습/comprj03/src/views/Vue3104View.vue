<template>
    <div id="app">
        <p>
            <button v-on:click="clickAddBox">박스 추가</button>
        </p>
        <p>
            <b v-for="(val, i) in arr" v-bind:key="i">
                {{ val }}
                <component-box v-bind:num="val"></component-box>
            </b>
        </p>
    </div>
</template>

<script>
import Vue3104Counter from '../components/View3104Counter.vue';
export default {
    /* pdtmc^2w */
    props: [],
    data() {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            arr: [1, 2, 3, 4, 5]
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        clickAddBox() {}
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */

        'component-box': Vue3104Counter
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
