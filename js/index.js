document.querySelector("#start--btn").addEventListener("click", (event) => {
  event.preventDefault();

  const nameValue = document.querySelector("#user--fullname").value;
  const userValue = document.querySelector("#user--username").value;
  const ageValue = document.querySelector("#user--age").value;
  const emailValue = document.querySelector("#user--email").value;
  const phoneValue = document.querySelector("#user--phonenumber").value;
  const imgValue = document.querySelector("#user--img").value;
  const genderValue = document.getElementById("gender--select").value;

  if (
    !nameValue ||
    !userValue ||
    !ageValue ||
    !emailValue ||
    !phoneValue ||
    !imgValue ||
    !genderValue
  ) {
    alert("Iltimos, barcha maydonlarni to'ldiring.");
    return;
  }

  const block = document.querySelector(".block");

  block.innerHTML += `
  <img class="outImg" src="${imgValue}" alt="User image" width="100" onerror="this.src='fallback-image.jpg'; this.alt='Image not found';"/>
    <p>Ism: ${nameValue}</p>
    <p>Foydalanuvchi: ${userValue}</p>
    <p>Yosh: ${ageValue}</p>
    <p>Email: ${emailValue}</p>
    <p>Telefon raqami: ${phoneValue}</p>
    <p>Jinsi: ${genderValue}</p>
    
  `;
});
