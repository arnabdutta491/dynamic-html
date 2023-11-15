
let data_base = [
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB3ZDeCMB1RdXHVctltcUpsGKVchetY_hWnoARdsnncpfqHyaxArcsceNcMFToiV9jYw&usqp=CAU",
        "Name":"AD",
        "Designsation":"Software Developer"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://miro.medium.com/max/1080/1*tTkMHwYrKqnoxoEzXhnhfw.png",
        "Name":"SM",
        "Designsation":"Software Developer"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jfHtUxcoiJNmTTDMdqiVg_3qMrEbnxf2tvABygZPPxNfzfHb4icSfGRul61yl74XCnE&usqp=CAU",
        "Name":"Kichu Akta",
        "Designsation":"Devops"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jfHtUxcoiJNmTTDMdqiVg_3qMrEbnxf2tvABygZPPxNfzfHb4icSfGRul61yl74XCnE&usqp=CAU",
        "Name":"Kichu Akta",
        "Designsation":"Devops"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jfHtUxcoiJNmTTDMdqiVg_3qMrEbnxf2tvABygZPPxNfzfHb4icSfGRul61yl74XCnE&usqp=CAU",
        "Name":"Kichu Akta",
        "Designsation":"Devops"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jfHtUxcoiJNmTTDMdqiVg_3qMrEbnxf2tvABygZPPxNfzfHb4icSfGRul61yl74XCnE&usqp=CAU",
        "Name":"Kichu Akta",
        "Designsation":"Devops"
    },
    {
        "CardText":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.`,
        "CardImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jfHtUxcoiJNmTTDMdqiVg_3qMrEbnxf2tvABygZPPxNfzfHb4icSfGRul61yl74XCnE&usqp=CAU",
        "Name":"Kichu Akta",
        "Designsation":"Devops"
    }
]
let container = document.querySelector('.boxes');
data_base.filter((content) =>{
    let card = document.createElement('div');
    card.classList.add('box');
    let image = document.createElement('img');
    let text = document.createElement('p');
    let name = document.createElement('p');
    let designation = document.createElement('p');
    
    image.src = content.CardImage;
    text.textContent = content.CardText;
    name.textContent = `Name: ${content.Name}`;
    designation.textContent = `Designation: ${content.Designsation}`;
    
    card.appendChild(image);
    card.appendChild(text);
    card.appendChild(name);
    card.appendChild(designation);

    
    container.appendChild(card);
})
