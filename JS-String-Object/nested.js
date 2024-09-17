const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 february'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.color = 'red'
console.log (college.unique.color)

console.log(college)

college.events[1] = '16 dec'
console.log (college.events[1])