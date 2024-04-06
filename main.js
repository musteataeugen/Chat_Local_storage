let messages = JSON.parse(localStorage.getItem("messages"))
    
const badWords = ['sh!t', 'fu!k', 'di!k']

const render = (messages) => {
    let list = document.getElementById('message-list')
    list.innerHTML = ``
    messages.forEach(message => {
        let li = document.createElement('li')

        //-------preprocess render text----------
        //---------String.replace----------
        message = message.replace(":)", `<img src="images/Emoji-Blushing-icon.png">`)

        li.innerHTML = message
        list.appendChild(li)
    });
}

const send = () => {
    let input = document.getElementById('message-input')
    let message = input.value

    // HW1: validate input -> not empty,remove white spaces
    if (input.value === '')
        return false

    //HW2: check if badWords are present in text
    //     for/loop ---> badWords->String.methods...?
    //      if included in text
    //      if a bad wor found -----> do not render that message
    //     instead render  ---> "[censored]"
    for (let i = 0; i < badWords.length; i++) {
        if (message.includes(badWords[i])) {
            // message = message.replace(badWords[i], "[censored]") ---->doar cuvintul il inlocuieste
            message = '[censored]'
        }
    }
    messages.unshift(message.trim())

    // HW3: keep it 10 messages
    //      QUEUE
    if (messages.length > 10) {
        messages.pop(message)
    }
    //---------data store-------------
    localStorage.setItem("messages", JSON.stringify(messages))
    input.value = ''

    // HW4*: reverse message order
   
}

render(messages)