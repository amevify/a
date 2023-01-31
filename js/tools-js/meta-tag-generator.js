// select Elements 
const form = document.getElementById("form"),
    title = document.getElementById("title"),
    description = document.getElementById("description"),
    tags = document.getElementById("tags"),
    indexAllow = document.getElementById("index-allow"),
    contentType = document.getElementById("content-type"),
    language = document.getElementById("language"),
    author = document.getElementById("author"),
    result = document.getElementById("print-code"),
    copyBtn = document.getElementById("copy-btn"),
    followLink = document.getElementById("link-follow-allow");

const isName = (name) => {
    let tag = `<meta name="author" content="${name.value}">`;
    
    if(name.value !== "") {
        return tag;
    } else {
        return "";
    }
    
}
const printCode = () => {
    
    let titleVal = title.value.trim(),
        descriptionVal = description.value.trim(),
        tagsVal = tags.value.trim(),
        indexAllowVal = indexAllow.value,
        allowLink = followLink.value,
        contentTypeVal = contentType.value.toLowerCase(), 
        languageVal = language.value;
        authorName = isName(author);
        console.log(authorName);
    result.value = `
    <meta name="title" content="${titleVal}">
    <meta name="description" content="${descriptionVal}">
    <meta name="keywords" content="${tagsVal}">
    <meta name="robots" content="${indexAllowVal},${allowLink}">
    <meta http-equiv="Content-Type" content="text/html; charset=${contentTypeVal}">
    <meta name="language" content="${languageVal}">
    ${authorName}`
}

// metaTagGenerator function 
const metaTagGenerator = (event) => {
    event.preventDefault();
    printCode();
}
form.addEventListener("submit", metaTagGenerator);

// code copy function 

copyBtn.onclick = () => {
    result.select();
    document.execCommand("copy");
}