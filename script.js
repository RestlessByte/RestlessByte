async function loadStack() {
  const container = document.getElementById('stack');
  try {
    const response = await fetch('stack.json');
    const data = await response.json();
    data.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'stack-item';
      item.style.animationDelay = `${i * 0.1}s`;
      item.textContent = name;
      container.appendChild(item);
    });
  } catch (err) {
    console.error('Failed to load stack', err);
  }
}

document.addEventListener('DOMContentLoaded', loadStack);
