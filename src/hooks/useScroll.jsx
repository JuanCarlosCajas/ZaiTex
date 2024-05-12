export function scrollToElement(elementSelector, instance = 0){
    console.log(elementSelector)
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

export default scrollToElement