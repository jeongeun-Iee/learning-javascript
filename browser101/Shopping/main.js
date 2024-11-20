const items = document.querySelector('.list-items');
const input = document.querySelector('.inputField');
const addBtn = document.querySelector('.addBtn');


// 1. input 텍스트 받아오기  ㅇㅋ
// 2. 받아온 텍스트로 새로운 아이템 줄 만들기  ㅇㅋ
// 3. 만든 아이템줄 추가  ㅇㅋ
// 4. 추가하고 나면 input 초기화, 포커싱 ㅇㅋ
// 5. 체크박스 클릭하면 언더라인 생기기 스타일 추가

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return; //아직까진 이해가 되지 않는다 이부분이,,,
    }
    console.log(text);

    const item = createItem(text);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

addBtn.addEventListener('click', () => {
    onAdd();
})


function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item-row');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'check-box');
    checkBox.addEventListener('click', () => span.classList.toggle('checked'));

    const span = document.createElement('span');
    span.setAttribute('class', 'item-name');
    span.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.addEventListener('click',()=> {
        items.removeChild(itemRow)
    })

    const devider = document.createElement('div');
    devider.setAttribute('class', 'devider');

    itemRow.appendChild(checkBox);
    itemRow.appendChild(span);
    itemRow.appendChild(deleteBtn);
    itemRow.appendChild(devider);

    return itemRow;  // return 하는 이유가 뭐지......??
}

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        onAdd();
    } else {
        return;
    }
})
