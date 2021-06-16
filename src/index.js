const init = () => {
    const inputForm = document.querySelector('label')
    inputForm.addEventListener("selected", (event) => {
        event.preventDefault()
    
    const selection = document.querySelector('select#breed-dropdown#option#value')


    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(response => response.json())
    .then(data => {
        const dogBreeds = document.querySelector('ul#dog-breeds')

        if (selection === data.breeds[0])
        {dogBreeds.innerText = data.breeds}
    })
    })
}

document.addEventListener('DOMContentLoaded', init);