
console.log(JSON.parse(localStorage.getItem('Blog'))[0])

document.getElementById("singleblog").innerHTML=`<div class="blog-col">
<img src=${JSON.parse(localStorage.getItem('Blog'))[0]?.blogImage}>
<h3>${JSON.parse(localStorage.getItem('Blog'))[0]?.title}</h3>
<h4>${JSON.parse(localStorage.getItem('Blog'))[0]?.subtitle}</h4>
<p><h3>${JSON.parse(localStorage.getItem('Blog'))[0]?.content}</h3></p>
</div>

`