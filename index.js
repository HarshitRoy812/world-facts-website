function searchPage()
{
    var ele = document.getElementById('text');

    if (!ele.value.length)
    {
        alert('Please provide a link !');
    }
    else 
    {
        var url = ele.value;
        window.open(url);
    }
}