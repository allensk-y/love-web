document.addEventListener("DOMContentLoaded", () => {
  // Các message đầu tiên
  const messages = [
    document.getElementById("msg1"),
    document.getElementById("msg2"),
    document.getElementById("msg3"),
    document.getElementById("msg4"),
    document.getElementById("msg5"),
    document.getElementById("msg6")
  ];
  const memoryNote = document.getElementById("memoryNote");
  const memoryYes = document.querySelector(".memory-yes");
  const memoryNo = document.querySelector(".memory-no");
  const loveQuestion = document.getElementById("loveQuestion");
  const loveYes = document.querySelector(".love-yes");
  const loveNo = document.querySelector(".love-no");

  let current = 0;

  function showMessage(index) {
    const msg = messages[index];
    if (!msg) return;

    msg.classList.add("show");

    setTimeout(() => {
      msg.classList.add("fade-out");

      setTimeout(() => {
        msg.classList.remove("show", "fade-out");

        current++;
        if (current < messages.length) {
          showMessage(current);
        } else {
          setTimeout(() => {
            memoryNote.classList.remove("hidden");
            memoryNote.classList.add("fade-in-memory");
          }, 1000);
        }
      }, 1000);
    }, 4000);
  }

  // Nút của memory
  memoryYes.addEventListener("click", () => {
    showGift("https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif");
  });

  memoryNo.addEventListener("click", () => {
    showGift("https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif");
  });


function showGift(gifURL) {
  memoryNote.innerHTML = `
    <h2 class="final-note">🌟 Cảm ơn vì đã trả lời 🌟</h2>
    <img src="${gifURL}" alt="Gift cảm xúc" class="gift-img">
  `;

  setTimeout(() => {
    memoryNote.classList.add("fade-out-memory");
    
    setTimeout(() => {
      memoryNote.style.display = "none";
      showLoveQuestion(); // 💖 gọi ở đây là đúng thời điểm nhất
    }, 1000);

  }, 4000);
}

function showLoveQuestion() {
  loveQuestion.classList.remove("hidden");
  loveQuestion.classList.add("fade-in-memory");
}


  // Hiệu ứng nút "Có" né chuột
  loveYes.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - loveYes.offsetWidth);
    const y = Math.random() * (window.innerHeight - loveYes.offsetHeight);

    loveYes.style.position = "absolute";
    loveYes.style.left = `${x}px`;
    loveYes.style.top = `${y}px`;
  });

  // Modal phần thêm
  const modal = document.getElementById("loveModal");
  const modalText = document.getElementById("modalText");
  const closeBtn = document.querySelector(".close-btn");

  function showModal(message) {
    modalText.textContent = message;
    modal.classList.remove("hidden");
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Phản ứng khi bấm nút "Có" và "Không"
  loveNo.addEventListener("click", () => {
    showModal("Huhu tớ buồn á 😢 Nhưng mà vẫn quý cậu lắm đó nha...");
  });

  // 💖 Hiệu ứng né chuột cho nút "Có"
// 💖 Hiệu ứng né chuột trong khung trình duyệt (viewport) đẹp và giới hạn
  loveYes.addEventListener("mouseover", () => {
    const btnWidth = loveYes.offsetWidth;
    const btnHeight = loveYes.offsetHeight;
    const padding = 20; // Đệm cho đẹp nè

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Vị trí tối đa mà nút vẫn còn thấy được
    const maxX = viewportWidth - btnWidth - padding;
    const maxY = viewportHeight - btnHeight - padding;

    // Tọa độ ngẫu nhiên trong vùng an toàn
    const x = Math.floor(Math.random() * maxX) + padding / 2;
    const y = Math.floor(Math.random() * maxY) + padding / 2;

    loveYes.style.position = "fixed"; // đảm bảo nó không trôi khỏi trang
    loveYes.style.left = `${x}px`;
    loveYes.style.top = `${y}px`;
  });




  // Khởi động
  showMessage(current);
});
