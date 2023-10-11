/*********** 비밀번호 검사 *************************************/ 
// checkObj 추가 해야함!!!!

const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");
const pwMessage = document.getElementById("pwMessage");

// 비밀번호 입력 시 유효성 검사
memberPw.addEventListener("input", () => {

    // 비밀번호가 입력되지 않은 경우
    if(memberPw.value.trim().length == 0){
        memberPw.value = ""; // 띄어쓰지 못넣게 하기

        pwMessage.innerText = "영어,숫자,특수문자(!,@,#,-,_) 6~20글자 사이로 입력해주세요.";
        pwMessage.classList.remove("confirm", "error"); // 검정 글씨

        return;
    }


    // 정규 표현식을 이용한 비밀번호 유효성 검사

    // 영어,숫자,특수문자(!,@,#,-,_) 6~20글자 사이
    const regEx = /^[a-zA-Z0-9\!\@\#\-\_]{6,20}$/;

    // 입력한 비밀번호가 유효한 경우
    if(regEx.test(memberPw.value)){
        
        // 비밀번호가 유효하게 작성된 상태에서
        // 비밀번호 확인이 입력되지 않았을 때
        if(memberPwConfirm.value.trim().length == 0){

            pwMessage.innerText = "유효한 비밀번호 형식입니다";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
        
        }else{
            // 비밀번호가 유효하게 작성된 상태에서
            // 비밀번호 확인이 입력되어 있을 때

            // 비밀번호 == 비밀번호 확인  (같을 경우)
            if(memberPw.value == memberPwConfirm.value){
                pwMessage.innerText = "비밀번호가 일치합니다";
                pwMessage.classList.add("confirm");
                pwMessage.classList.remove("error");
                
            } else{ // 다를 경우
                pwMessage.innerText = "비밀번호가 일치하지 않습니다";
                pwMessage.classList.add("error");
                pwMessage.classList.remove("confirm");
            }
        }

        
    } else{ // 유효하지 않은 경우
        
        pwMessage.innerText = "비밀번호 형식이 유효하지 않습니다";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
    }
});


// 비밀번호 확인 유효성 검사
memberPwConfirm.addEventListener('input', ()=>{

          // 비밀번호 == 비밀번호 확인  (같을 경우)
        if(memberPw.value == memberPwConfirm.value){
            pwMessage.innerText = "비밀번호가 일치합니다";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");
            
        } else{ // 다를 경우
            pwMessage.innerText = "비밀번호가 일치하지 않습니다";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }

    
});

const test = document.getElementById("test");

test.addEventListener("click", () => {

    "popup.html".style.display = 'block';
    // window.open("popup.html");

})