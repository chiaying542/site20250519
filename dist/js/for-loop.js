function x(maxi, maxj) {
    console.log(maxi, maxj);
    for (let i = 1; i <= maxi; i++) {
        for (let j = 1; j <= maxj; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

/**
 * 介面設計 OK
 * 1. 第一數值輸入框
 * 2. 第二數值輸入框
 * 3. 計算按鈕
 * 4. 使用 table 顯示結果
 */

/**
 * 功能設計
 * 1. 抓取 DOM
 * 2. 當按鈕被點擊時，抓取輸入框的值
 * 3. 進行乘法函數呼叫
 * 4. 將結果顯示在 table 中
 */

let dom = {
    maxi: document.querySelector("#max-i"),
    maxj: document.querySelector("#max-j"),
    run: document.querySelector("#run"),
    result: document.querySelector("#result"),
    xTable: document.querySelector("#x-table"),
};

console.log(dom);

dom.run.addEventListener("click", () => {
    // initResultDOM();
    console.log("run!");

    let num1 = dom.maxi.value;
    let num2 = dom.maxj.value;

    console.log(num1, num2);
    if (num1 <= 0 || num2 <= 0) {
        alert("請輸入數字");
        return;
    }
    x(num1, num2);
});
