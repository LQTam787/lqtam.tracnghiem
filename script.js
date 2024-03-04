document.addEventListener('DOMContentLoaded', function () {
    // Mock data for exams
    const exams = [
        { name: 'Luyện tập', status: 'Có thể truy cập tự do' },
        { name: 'Giữa kỳ', status: 'Yêu cầu thời gian cụ thể' },
        { name: 'Cuối kỳ', status: 'Có thể truy cập tự do' },
        // Add more exams as needed
    ];

    const examList = document.getElementById('exam-items');
    const filterInput = document.getElementById('filter');

    // Function to render exam items
    function renderExams(exams) {
        examList.innerHTML = '';

        exams.forEach(exam => {
            const li = document.createElement('li');
            li.textContent = `${exam.name} - ${exam.status}`;
            examList.appendChild(li);

            li.addEventListener('click', () => {
                // Add logic to start the selected exam
                alert(`Bắt đầu làm bài thi: ${exam.name}`);
            });
        });
    }

    // Initial rendering
    renderExams(exams);

    // Event listener for filtering exams
    filterInput.addEventListener('input', function () {
        const searchTerm = filterInput.value.toLowerCase();
        const filteredExams = exams.filter(exam => exam.name.toLowerCase().includes(searchTerm) || exam.status.toLowerCase().includes(searchTerm));
        renderExams(filteredExams);
    });
});
