import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const StyledTodoContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정

  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: '영화보기',
      done: false,
    },
    {
      id: 2,
      todo: '주말 산책',
      done: true,
    },
    {
      id: 3,
      todo: 'ES6 학습',
      done: false,
    },
    {
      id: 4,
      todo: '잠실 야구장',
      done: false,
    },
  ]);

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('TodoContainer >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('TodoContainer >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('TodoContainer >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );
  const callbackClearAll = useCallback(
    (param) => {
      // state 변경
      debugger;

      // 직접 코드를 완성하시오.
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      // todoItems = [];
      setTodoItems([]);
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackDoneToggle = useCallback(
    (id) => {
      // state 변경
      //debugger;

      // 직접 코드를 완성하시오.
      // setTodoItems 는  todoItems 상태를 바꾸기 위한 setter 메서드
      // todoItems = [];

      const newTodos = todoItems.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }

        return item;
      });
      setTodoItems(newTodos); //todoItems = newTodos;
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
      //setTodoItems 입력시 바로위쪽에 있는것 입력시
      //해당부분 set빼고 대문자소문자로 바꾸고 작성해줘야함
    ],
  );

  const callbackRemoveTodo = useCallback(
    (id) => {
      // 이벤트 핸들러는 화살표 함수로 만든다
      //debugger;

      const newTodos = todoItems.filter((item) => {
        if (item.id === id) {
          return false; //제외
        } else {
          return true; //포함
        }
      });
      setTodoItems(newTodos); //todoItems = newTodos;
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
      //setTodoItems 입력시 바로위쪽에 있는것 입력시
      //해당부분 set빼고 대문자소문자로 바꾸고 작성해줘야함
    ],
  );

  const callbackAddTodo = useCallback(
    (value) => {
      // 이벤트 핸들러는 화살표 함수로 만든다
      debugger;

      // ap03-11.객체배열.html 참조
      // map과 reduce 를 사용하여 max id 구하기 ==> newid 만들기
      const maxid =
        todoItems && //배열이아닌경우 문제회피할 수 있음 (에러안남)
        todoItems
          .map((item) => {
            return item.id;
          }) // [1,2,3,4]
          .reduce((pvalue, cvalue) => {
            return pvalue > cvalue ? pvalue : cvalue;
          }, 0); //4

      // todoItems 추가할 객체 만들기
      const newTodo = {
        id: maxid + 1,
        todo: value,
        done: false,
      };

      // 배열에 추가. todoItems = [...todoItems, newTodo];

      setTodoItems([...todoItems, newTodo]); //todoItems = [...todoItems, newTodo];
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
      //setTodoItems 입력시 바로위쪽에 있는것 입력시
      //해당부분 set빼고 대문자소문자로 바꾸고 작성해줘야함
    ],
  );
  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <div id="app">
        {/* <!-- TodoHeader --> */}
        <TodoHeader></TodoHeader>

        {/* <!-- TodoInput --> edit > toggle line */}
        <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>

        {/* <!-- TodoList --> */}
        <TodoList
          todoItems={todoItems}
          callbackDoneToggle={callbackDoneToggle}
          callbackRemoveTodo={callbackRemoveTodo}
        ></TodoList>

        {/* <!-- TodoHeader --> */}
        <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
      </div>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
