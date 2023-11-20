const ctx = document.getElementById('canvas');
const year = document.getElementById('yearChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Like',
            data: [4000, 3500, 4300, 2500, 2000, 3500, 2700],
            backgroundColor: '#FF66C4',
            borderColor: '#FF66C4',
        },
        {
            label: 'Comments',
            data: [1600, 1900, 3000, 2000, 2100, 3900, 3500],
            backgroundColor: '#FE934E',
            borderColor: '#A175FE',
        },
        {
            label: 'Follower',
            data: [1000, 2900, 1000, 3000, 1500, 3900, 3900],
            backgroundColor: '#FE934E',
            borderColor: '#FE934E',
        }]
    },

    options: {
        plugins:{
            legend:{
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: 'white',
                    boxWidth: 5,
                    boxHeight: 5
                }
            }
        },

        scales: {
            x:{
                ticks:{
                    color: 'white'
                },
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color:'white',
                    stepSize: 1000,
                },
            }
        }
    }
});


new Chart(year, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'This Year',
            data: [40, 75, 43, 25, 20, 65, 85],
            backgroundColor: '#5569CC',
            borderColor: '#5569CC',
        },
        {
            label: 'Last Year',
            data: [16, 29, 30, 50, 21, 39, 35],
            backgroundColor: '#E8E8E8',
            borderColor: '#E8E8E8',
        }]
    },

    options: {
        plugins:{
            legend:{
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: '',
                    boxWidth: 5,
                    boxHeight: 5,
                    font: {
                        size: 14
                    }
                }
            }
        },

        scales: {
            x:{
                ticks:{
                    color: ''
                },
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color:'',
                    stepSize: 25,
                },
            }
        }
    }
});