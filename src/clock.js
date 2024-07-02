// bottom taskbar clock function
export function updateClock() {
  const clockEl = document.querySelector(".taskbar_clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  clockEl.textContent = `${formattedHours}:${formattedMinutes} ${ampm}`;
}
