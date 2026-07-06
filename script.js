console.log("سلام! جاوااسکریپت با موفقیت اجرا شد ✅");

// تغییر متن صفحه با کلیک
const box = document.querySelector(".box");
if (box) {
  box.addEventListener("click", () => {
    box.innerHTML = "<h2>عالی شد! ✨ جاوا هم کار می‌کنه</h2>";
  });
}
