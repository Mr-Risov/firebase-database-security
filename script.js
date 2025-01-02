document.getElementById('add-folder').addEventListener('click', () => {
  const folderContainer = document.getElementById('folder-container');
  const folderCount = folderContainer.children.length + 1;
  const folderInput = document.createElement('div');
  folderInput.classList.add('folder-input');
  folderInput.innerHTML = `
    <label for="folder-${folderCount}">Folder Name:</label>
    <input type="text" id="folder-${folderCount}" name="folder[]" placeholder="Enter folder name">
  `;
  folderContainer.appendChild(folderInput);
});

document.getElementById('generate-rules').addEventListener('click', () => {
  const folderInputs = document.querySelectorAll('input[name="folder[]"]');
  const rules = {
    rules: {}
  };

  folderInputs.forEach(input => {
    const folderName = input.value.trim();
    if (folderName) {
      rules.rules[folderName] = {
        ".read": "true",
        ".write": "true"
      };
    }
  });

  document.getElementById('output').textContent = JSON.stringify(rules, null, 2);
});
