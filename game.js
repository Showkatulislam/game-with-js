//////game-status win-status lost-status click-btn
document.getElementById('click-btn').addEventListener('click',function(){
    ///game status
    const gameStatus=document.getElementById('game-status')
    ////game win-status
    const winStataus=document.getElementById('win-status')
    const winStatausText=winStataus.innerText
    const winStatausNum=parseInt(winStatausText)
    ////game lost-status
    const lostStataus=document.getElementById('lost-status')
    const lostStatausText=lostStataus.innerText
    const lostStatausNum=parseInt(lostStatausText)
    ////create random number 1-------6
    const random=Math.round(Math.random()*6)
    console.log(random)
    if(random==6){
        gameStatus.innerText="You win game"
        //total win
        const TotalWin=winStatausNum+1
        winStataus.innerText=TotalWin
    }
    else{
        gameStatus.innerText="You lost game"
        const totalLost=lostStatausNum+1
        lostStataus.innerText=totalLost
    }
})