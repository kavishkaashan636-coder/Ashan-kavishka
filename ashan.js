document.addEventListener('DOMContentLoaded', function () {
    // --- Sales Chart (Line Chart) ---
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2300, 3100, 4000],
                backgroundColor: 'rgba(74, 105, 189, 0.2)',
                borderColor: 'rgba(74, 105, 189, 1)',
                borderWidth: 2,
                tension: 0.4, // Makes the line curvy
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // --- Traffic Sources Chart (Doughnut Chart) ---
    const trafficCtx = document.getElementById('trafficChart').getContext('2d');
    const trafficChart = new Chart(trafficCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct', 'Referral', 'Social', 'Organic Search'],
            datasets: [{
                label: 'Traffic Source',
                data: [55, 25, 15, 5],
                backgroundColor: [
                    '#4a69bd',
                    '#6a89cc',
                    '#82a0d8',
                    '#a8c0e5'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
});
