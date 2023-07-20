function validateForm() {
    // მომხმარებელის სახელის მიმთითებელი
    var usernameInput = document.getElementById('username');
    var username = usernameInput.value;

    // სახელის ვალიდაცია რეგულარულ გამოყენებით
    var usernameRegex = /^[a-zA-Z]+$/; // მხოლოდ ასოების სიმრავლე

    if (!username.match(usernameRegex)) {
      alert("სახელი უნდა შეიცავდეს მხოლოდ ასოებს");
      return false; // ვერ გავაგრძელებთ ფორმის სასრულს
    }

    return true; // ვალიდაცია წარმოებულია, ფორმის შესრულება შესაძლებელია
  }