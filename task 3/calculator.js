const screen=document.getElementById('nums');

function insert_text(num)
{
    screen.value=screen.value+num;

}
function calculate()
{
    screen.value=eval(screen.value);
}
function clear_fun() {
    screen.value ='';

}