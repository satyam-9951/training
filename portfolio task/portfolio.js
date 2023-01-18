
document.querySelector(".submit").addEventListener("click", submit)

function submit() {
    var name = document.querySelector(".name").value;
    var company = document.querySelector(".company").value;
    var service = document.querySelector(".service").value;
    var phone = document.querySelector(".phone").value;
    var mail = document.querySelector(".mail").value;
    localStorage.setItem(`${name}`, `${mail}`);
}
