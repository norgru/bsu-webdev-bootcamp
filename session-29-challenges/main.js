//TASK 1


//TASK 3
function addPara(){

    //Create the <p>
    const para = document.createElement('p');
    
    //Create text node with the lorem
    const lorem = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem maiores et officia non laboriosam, molestiae esse quia alias pariatur iure odio repudiandae eum velit aliquam tenetur, error, totam obcaecati?");

    para.innerText = lorem;

    document.getElementById("paraBox").appendChild(lorem);

    
}