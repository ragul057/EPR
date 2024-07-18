document.addEventListener('DOMContentLoaded', () => {
    const hodForm = document.getElementById('add-hod-form');
    const hodList = document.getElementById('hod-list');
    
    hodForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const hodName = document.getElementById('hod-name').value;
        if (hodName) {
            const listItem = document.createElement('li');
            listItem.textContent = hodName;
            listItem.addEventListener('click', () => {
                hodList.removeChild(listItem);
            });
            hodList.appendChild(listItem);
            hodForm.reset();
        }
    });
});
