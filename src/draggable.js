// make ui draggable

// support for mouse and touch capabilities
export function makeDraggable(element, handle) {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  function startDragging(event) {
    isDragging = true;
    startX = event.clientX || event.touches[0].clientX;
    startY = event.clientY || event.touches[0].clientY;
    const rect = element.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", stopDragging);

    event.preventDefault();
  }

  function dragElement(event) {
    if (isDragging) {
      const deltaX = (event.clientX || event.touches[0].clientX) - startX;
      const deltaY = (event.clientY || event.touches[0].clientY) - startY;
      element.style.left = `${startLeft + deltaX}px`;
      element.style.top = `${startTop + deltaY}px`;
    }
  }

  function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", stopDragging);
  }

  function onMouseMove(event) {
    dragElement(event);
  }

  function onTouchMove(event) {
    dragElement(event);
  }

  handle.addEventListener("mousedown", startDragging);
  handle.addEventListener("touchstart", startDragging);
}
