// function to fetch short url from tinyurl.com API
async function shortURL() {
    const Url = document.getElementById("long_url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
    if (response.ok) {
        const data = await response.text();
        document.getElementById('short_url').value = data;
    }
    else{
        document.getElementById('short_url').value = "ERROR! Please try again."
    }
}

// Copy to clipboard btn function
let cpyBtn = document.getElementById('copy');
cpyBtn.addEventListener('click', function() {
    var copyText = document.getElementById('short_url');
    copyText.select();
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
});
