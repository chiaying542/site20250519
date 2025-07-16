/**
 * 1. 按下按鈕時執行
 * 2. 取得 DOM 元素
 * 3. 取得年齡數值
 * 4. 判斷年齡是否大於等於 18
 * 5. 如果不符合，則顯示 "您未滿 18 歲，不能投票"
 * 6. 如果符合，則顯示 "您已滿 18 歲，可以投票"
 * 7. 如果年齡為空，則顯示 "請輸入年齡"
 * 8. 將顯示區塊顯示出來
 */

let ageDOM = document.querySelector("#age");
let runDOM = document.querySelector("#run");
let resultDOM = document.querySelector("#result");

console.log(ageDOM, runDOM, resultDOM);

const initResultDOM = () => {
    resultDOM.classList.remove("success");
};

runDOM.addEventListener("click", () => {
    console.log("run!");
    initResultDOM();

    let age = ageDOM.value;

    if (!age) {
        resultDOM.textContent = "請輸入年齡";
        ageDOM.focus();
    } else {
        if (age >= 18) {
            resultDOM.textContent = "您已滿 18 歲，可以投票";
            resultDOM.classList.add("success");
        } else {
            resultDOM.textContent = "您未滿 18 歲，不能投票";
            ageDOM.focus();
        }
    }

    resultDOM.classList.add("show");
});
