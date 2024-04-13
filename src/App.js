import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// html 코드를 작성하려면 return()안에 작성
// css 를 사용하려면 위에 보이는 것처럼 import
// class -> className : 자바스크립트에 이미 class 라는 명령어가 있어서
// - 표시는 뺄셈으로 취급하기 때문에 대문자로 작성
// font-size ==> fontSize
// 변수를 사용할때 {} 로 사용
// style은 object 자료형으로 작성
// return() 안에 가장 바깥에는 하나의 태그만

// 리액트 : 변수가 바뀌면 화면이 바뀌는 state (웹 페이지를 다시 불러올 필요가 없음)   import React, {useState} from 'react';
// 리앧트는 화면에 보여줄값을 '변수'에 보관하지 않고 'state'에 보관
// 변수는 값이 변경되어도 화면에 반영되지 않지만, useState라는 것을 사용하면 값이 바뀌면 화면도 따라서 바뀜(데이터바인딩)
// 따라서, 변경될만한 값은 useState 로 보관하고, 변경이 안될 값은 변수에 보관

function App() {
  // 여기에 자바스크립트 작성 가능
  let 변수 = '블로그 글목록';      // html 안에서 사용하려며 {} 필요
  // useState 사용 이유 : 값 바뀌면 화면도 같이 바뀌게하려고
  let [title, setTitle] = useState(['제목1', '제목2', '제목3', '제목4']);
  let [dateTime, setDateTime] = useState(['2024.04.13', '2024.04.12', '2024.03.29', '2024.02.28']);
  let [score, setScore] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  // return 안에는 html 코드 (자바스크립트 작성하려면 {} 필요)
  let [idx,curIdx] = useState([]);

  return (
    <div className="App">
      <div className='black-nav'>
        <img src={logo} width={'100px'} height={'100px'} alt=""/>
        <br/>
        <h4 style={{color:'yellowgreen', fontSize:'20px'}}>{변수}</h4> {/* 여기를 수정했습니다 */}
      </div>

      {title.map((item, index) => (
        <div className='list' key={index}>
          <h4 onClick={() => setModal(true)}>
            {item}
            <span onClick={(e) => {
              e.stopPropagation();
              setScore(scores => {
                let newScores = [...scores];
                newScores[index] += 1;
                return newScores;
              });
            }}>💚</span>{score[index]}
          </h4>
          <p>{dateTime[index]} 작성</p>
        </div>
      ))}

      {modal === true ? <Modal idx={curIdx} title={title} date={dateTime}/> : null}
    </div>
  );
}


export default App;

// 모달 컴포넌트 분리
// 코드가 길어지면 별도의 함수로 분리해서 '컴포넌트'로 만들어준다
// return() 안에 html태그를 작성
// 사용하고자 하는 곳에 <함수명/>
// 컴퍼넌트로 사용할 함수는 대문자로 시작, 일반함수는 소수로 시작
function Modal(){
  return(
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>내용</p>
        <p>상세 내용</p>
      </div>

    </>
  )
}

// 리액트 빌드(리액트앱 배포)
// npm run build
// build라는 폴더가 생성되고 그안에 내용들을 배포하면 됨