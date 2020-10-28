function showNotification(options) {
  let div = document.createElement("div");
  document.body.append(div);
  div.classList.add("notification");
  let notification = document.querySelector(".notification");

  for (let key in options) {
    if (key in notification.style) {
      notification.style[key] = options[key] + "px";
    } else if (key === "html") {
      notification.textContent = options[key];
    } else if (key === "className") {
      notification.classList.add(options[key]);
    }
  }

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

// shows an element with the text "Hello" near the right-top of the window
showNotification({
  top: 10, // 10px from the top of the window (by default 0px)
  right: 10, // 10px from the right edge of the window (by default 0px)
  html: "Hello!", // the HTML of notification
  className: "welcome", // an additional class for the div (optional)
});
