var num = (Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function findNumber()
{
    var numUser = parseInt(document.getElementById("n1").value);
    if(numUser == num)
    {
        document.getElementById("res").textContent = "Congratulations!!! You guessed the number in "+count+" tries.";
    }
    else if(numUser > num)
    {
        document.getElementById("res").textContent = "Try with the smaller number";
    }
    else
    {
        document.getElementById("res").textContent = "Try with the greater number";
    }
    document.getElementById("tries").textContent = count;
    count++;
}
