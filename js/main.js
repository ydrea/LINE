const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-box");
const contactContent = document.querySelector("#contact-box");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "about",
    height: "300px",
    width: "300px",
    top: 0,
    left: 0,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("darkorange");
    },
    onblur: function () {
      this.setBackground("grey");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "contact",
    height: "300px",
    width: "300px",
    top: 300,
    left: 0,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("darkorange");
    },
    onblur: function () {
      this.setBackground("grey");
    },
  });
});
