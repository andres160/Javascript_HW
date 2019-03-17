// from data.js
var tableData = data;


function renderTable(filter_text) {
    if (filter_text.length == 0) {
        data.forEach(element => {
            let newTr = d3.select('table').append('tr')
            newTr.append('td').text(element.datetime)
            newTr.append('td').text(element.city)
            newTr.append('td').text(element.state)
            newTr.append('td').text(element.country)
            newTr.append('td').text(element.shape)
            newTr.append('td').text(element.durationMinutes)
            newTr.append('td').text(element.comments)
        })
    } else {
        d3.selectAll('tr').remove()
        let vals = data.filter(x => x.datetime == filter_text)
        vals.forEach(element => {
            let newTr = d3.select('table').append('tr')
                newTr.append('td').text(element.datetime)
                newTr.append('td').text(element.city)
                newTr.append('td').text(element.state)
                newTr.append('td').text(element.country)
                newTr.append('td').text(element.shape)
                newTr.append('td').text(element.durationMinutes)
                newTr.append('td').text(element.comments)   
        })
    }
}

renderTable('');
d3.select("#datetime").on('keyup', () => {
    let searchTerm = d3.event.target.value;
    renderTable(searchTerm);
})

// YOUR CODE HERE!

