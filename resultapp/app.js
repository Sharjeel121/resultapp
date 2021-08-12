var arr = [
    {
        name:'Ali',
        age: 22,
        school: 'abcd',
        result: 0,
        rollno:1
    }
,
    {
        name:'sharjeel',
        age: 22,
        school: 'abcd',
        result: 1,
        rollno:2
    },
    {
        name:'yahya',
        age: 22,
        school: 'abcd',
        result: 1,
        rollno:3
    },
    {
        name:'boss',
        age: 22,
        school: 'abcd',
        result: 0,
        rollno:4
    },
    {
        name:'hammad',
        age: 22,
        school: 'abcd',
        result: 1,
        rollno:5
    },
    {
        name:'ahmed',
        age: 22,
        school: 'abcd',
        result: 0,
        rollno:6
    },
    {
        name:'anwar',
        age: 22,
        school: 'abcd',
        result: 0,
        rollno:7
    },
    {
        name:'kashan',
        age: 22,
        school: 'abcd',
        result: 1,
        rollno:8
    },
    {
        name:'hamza',
        age: 22,
        school: 'abcd',
        result: 0,
        rollno:9
    },
    {
        name:'mohsin',
        age: 22,
        school: 'abcd',
        result: 1,
        rollno:10
    }
]

var inp = document.getElementById('rollnum')
var myh1 = document.getElementById('name')
var myh2 = document.getElementById('result')
var myh22 = document.getElementById('roll')



function searchRes(){
for(var i =0; i<10;i++)
{
    if(arr[i].rollno==inp.value)
    {
        if(arr[i].result)
        {
            myh1.innerHTML=arr[i].name
            myh2.innerHTML='PASS'
        }
        else
        {
            myh1.innerHTML=arr[i].name
            myh2.innerHTML='fail'
        }
    }
}



}