document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.querySelector('book-register-div button[type="button"]');
  registerButton.addEventListener('click', registerBook);
  
});

function registerBook() {

  const category = document.getElementById('category').value.trim();
  const bookname = document.getElementById('bookname').value.trim();
  const bookprice = document.getElementById('bookprice').value.trim();

  // 유효성 검사
  if (!category) {
    alert('카테고리를 선택해주세요.');
    return;
  }
  if (!bookname) {
    alert('도서명을 입력해주세요.');
    return;
  }
  if (!bookprice) {
    alert('올바른 가격을 입력해주세요.');
    return;
  }

  // 기존 도서 중복 확인
  const tbody = document.getElementById('book-list-tbody');
    for(let row of tbody.rows) {
      const categoryCell = row.cells[1].textContent.trim();
      const booknameCell = row.cells[2].textContent.trim();

      if (categoryCell === category && booknameCell === bookname) {
        alert('같은 카테고리 안에 동일한 책이 중복되어 있습니다.');
        return;
      }
    }


  const newRow = document.createElement('tr');

  const bookIdCell = document.createElement('td');
  bookIdCell.textContent = tbody.children.length + 1;

  const categoryCell = document.createElement('td');
  categoryCell.textContent = category;

  const booknameCell = document.createElement('td');
  booknameCell.textContent = bookname;

  const priceCell = document.createElement('td');
  priceCell.textContent = bookprice;

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.addEventListener('click', function() {
    tbody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);

  newRow.appendChild(bookIdCell);
  newRow.appendChild(categoryCell);
  newRow.appendChild(booknameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(deleteCell);

  tbody.appendChild(newRow);

  document.getElementById('category').value = '';
  document.getElementById('bookname').value = '';
  document.getElementById('bookprice').value = '';

  alert('도서가 성공적으로 등록되었습니다.');
}