function computerPlay(){
    let computerChoice = ['Rock', 'Paper', 'Scissors']
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)]

    console.log(randomChoice)
}computerPlay()
