<script>
function showPage(pageId) {
    document.querySelectorAll('.container').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    
    alert(`Thank you for your feedback, ${name}^-^`);
    
    document.getElementById('name').value = '';
    document.getElementById('feedback').value = '';
}
</script>