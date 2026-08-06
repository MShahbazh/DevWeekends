import {useState } from "react"

function Tiles({value,func}){
    return (
        <div onClick={func} className={`cursor-pointer w-25 h-25 text-3xl border flex items-center justify-center ${value=='_'?"bg-purple-100 ":"bg-red-100 text-red-950"} border-purple-800  `}>
            {value!='_'? value:""}
        </div>
    )
}


function Grid(){
    const [turn,setTurn]=useState(true)
    const [board,setBoard]=useState(Array(9).fill('_'))
    
    function checkWinner(){
        for(let i=0;i<3;i++){
            if(board[0+3*i]!='_'&&board[0+3*i]==board[1+3*i]&&board[0+3*i]==board[2+3*i]){
                return `${board[0+3*i]} Win!`
            }
        }
        for(let i=0;i<3;i++){
            if(board[0+3*i]!='_'&&board[0+3*i]==board[3+3*i]&&board[0+3*i]==board[6+3*i]){
                return `${board[0+3*i]} Win!`
            }
        }
        if(board[0]!='_'&&board[0]==board[4]&&board[0]==board[8]) return `${board[0]} Win!`
        if(board[2]!='_'&&board[2]==board[4]&&board[2]==board[6]) return `${board[0]} Win!`

        for(let i=0;i<9;i++) if(board[i]=='_') return ''
        return 'Draw !'
    }

    const result=checkWinner()

    function clicked(index){
        if(board[index]!='_' || result) return;
        const b=[...board]
        b[index]= turn? 'X':'O'
        setBoard(b)
        setTurn(!turn)
    }

    return(
        <>
        <div className="w-full text-3xl flex flex-col items-center justify-center bg-purple-800 text-white font-bold">
            <div className="w-full h-20 flex items-center justify-center">
                Simple Tic Tac Toe
            </div>
            <div className="flex justify-around items-center w-full h-10 p-10 border-t-2 ">          
            {
            result&&
                <>
                <div className="text-4xl font-bold ">
                    {result}
                </div>
                <div onClick={()=>{
                    setBoard(Array(9).fill('_'))
                }} className="bg-purple-500 text-3xl px-6 py-3 cursor-pointer hover:scale-105 transform duration-300">
                    Reset
                </div>
                </>
            }
                </div>
            
        
        </div>
        
        <div className="w-full  p-10 flex items-center justify-center ">
            <div className="flex items-center justify-center flex-col border-2 border-purple-800">
            {
                Array.from({length:3}).map((_,i)=>{
                    return(
                        <div key={i} className="grid grid-cols-3">
                            {
                                Array.from({length:3}).map((_,j)=>{
                                    return <Tiles key={j} value={board[j+3*i]} func={()=>{clicked(j+3*i)}} />
                                })
                            }   
                        </div>
                    )
                })
            }
            
            </div>
        </div>
        
        </>
    )
}


export default Grid