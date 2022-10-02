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

const StyledTodoInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */

  button {
    border-style: groove;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #62acde;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #62acde;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

function TodoInput({ callbackAddTodo }) {
  //{}안에 값 넣으면 proptypes, defaultprops에 값 넣어줘야함
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isShowModal, setIsShowModal] = useState(false);
  //true면 실행하자마자 모달창 뜸
  // 상태값이 기본타입인 경우
  const [state, setState] = useState({
    id: 0,
    name: '',
    age: 0,
  }); // 상태값이 참조타입 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => {
      return {
        ...oldvalue,
        ...newvalue,
      };
    },
    {
      id: 0,
      name: '',
      age: 0,
    },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();
  const refInputTodo = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('TodoInput >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('TodoInput >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('TodoInput >> componentWillUmount');
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

  // 이벤트 핸들러 작성.
  const handlerShowModal = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
    // isShowModal === true  ===> isShowModal = false
    // isShowModal === false ===> isShowModal = true

    //setIsShowModal(!isShowModal);
    setIsShowModal(false);
  };
  const handlerAddTodo = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
    e.stopPropagation();
    e.preventDefault();

    // input 에 입력된 값을 가져오기. 어떻게 해야 하나? ==> ref명.current.value
    const value = refInputTodo.current.value; //current 붙여줘야함 왜인지는 모르신다고 함

    // input 태그에 빈 문자열이나 공백이 입력 되는 경우는 modal 창이 출력되게
    if (!value || !value.trim()) {
      setIsShowModal(true);
      return; // 함수 실행을 멈춘다.
    }
    // TodoContainer 의 callbackAddTodo 메서드 호출 기능 추가
    callbackAddTodo(value);

    // add 후에 input 태그의 입력 값 지우기.
    refInputTodo.current.value = '';
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoInput>
      <div className="inputBox shadow">
        <input
          type="text"
          placeholder="Type what you have to do"
          ref={refInputTodo}
          onKeyUp={(e) => {
            return e.keyCode === 13 && handlerAddTodo(e);
          }}
        />
        엔터를 치거나 +버튼을 클릭하거나
        <span className="addContainer" onClick={handlerAddTodo}>
          <i aria-hidden="true" className="addBtn fas fa-plus"></i>
        </span>
        {isShowModal && (
          <div className="modal-mask">
            <div className="modal-wrapper">
              <div className="modal-container">
                <div className="modal-header">
                  <h3 slot="header">경고</h3>
                </div>

                <div className="modal-footer" onClick={handlerShowModal}>
                  <span>
                    할 일을 입력하세요.
                    <i
                      className="closeModalBtn fas fa-times"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </StyledTodoInput>
  );
}

TodoInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackAddTodo: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackAddTodo: () => {},
  // 인자명: [],
};

export default React.memo(TodoInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
