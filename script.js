const video = document.getElementById('mirror');
const compliment = document.getElementById('compliment');

const lies = [
"I was going to give you a nasty look… but you already have one.",
"your face  would makes onions cry",
"You're proof that evolution can go in reverse.",
"That face could stop traffic. For safety reasons.",
"You're like a cloud… when you disappear, it’s a beautiful day!",
"You bring everyone so much joy… when you leave the room.",
"You’re not stupid—you just have bad luck thinking.",
"Your brain has left the chat,please wait while we reconnect",
"You're like a software update—nobody asked for it, and it takes too long to understand.",
"You're so sweet, you give me cavities just by talking.",
"You're not lazy, you're just on energy-saving mode."
];

function newCompliment() {
  const randomIndex =Math.floor(Math.random() * lies.length);
  compliment.textContent = lies[randomIndex];
  compliment.style.animation = 'none'; // reset animation
  void compliment.offsetWidth; // reflow
  compliment.style.animation = 'fadeIn 1s ease';
}

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      compliment.textContent = "Oops! The mirror refuses to lie without your camera.";
    });
}

startCamera();
