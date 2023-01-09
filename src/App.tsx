

import './App.css';

   function findPosition(x:Number, y:Number){
           let btn: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName('input');
             for(let i=0; i<btn.length; i++){
                 btn[i]?.setAttribute("style", "background:rgba(207, 158, 21, 0.63)");
             }
             let id : string= `(${x},${y})`;
             const ele : HTMLElement| null = document.getElementById(id);
              ele?.setAttribute("style","background:black")
             let X:any = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
             let Y:any = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
             for(let i=0; i<8; i++){
              let a:Number = x + X[i];
              let b:Number = y + Y[i];
              if(a>=0 && b>=0 && a<8 && b<8){
                let showId :string = `(${a},${b})`;
                const elemen : HTMLElement| null = document.getElementById(showId);
               // element.style.backgroundColor = "black"
               console.log(elemen);
               elemen?.setAttribute("style", "background:rgba(207, 21, 36, 0.63);");

              }
             }
   }
  

function App() {
  return (
    <> 
     <h2>Find the knight moves.</h2>
    <div className="App">
      
      
       <input type="button" id='(0,0)' onClick={()=>findPosition(0,0)}></input>
       <input type="button" id='(0,1)' onClick={()=>findPosition(0,1)}></input>
       <input type="button" id='(0,2)' onClick={()=>findPosition(0,2)}></input>
       <input type="button" id='(0,3)' onClick={()=>findPosition(0,3)}></input>
       <input type="button" id='(0,4)' onClick={()=>findPosition(0,4)}></input>

        <input type="button" id='(0,5)' onClick={()=>findPosition(0,5)}></input>
         <input type="button" id='(0,6)' onClick={()=>findPosition(0,6)}></input>

        <input type="button" id='(0,7)' onClick={()=>findPosition(0,7)}></input>
        
        <input type="button" id='(1,0)' onClick={()=>findPosition(1,0)}></input>
        <input type="button" id='(1,1)' onClick={()=>findPosition(1,1)}></input>
        <input type="button" id='(1,2)' onClick={()=>findPosition(1,2)}></input>
        <input type="button" id='(1,3)' onClick={()=>findPosition(1,3)}></input>
        <input type="button" id='(1,4)' onClick={()=>findPosition(1,4)}></input>
        <input type="button" id='(1,5)' onClick={()=>findPosition(1,5)}></input>
        <input type="button" id='(1,6)' onClick={()=>findPosition(1,6)}></input>
        <input type="button" id='(1,7)' onClick={()=>findPosition(1,7)}></input>
        
        <input type="button" id='(2,0)' onClick={()=>findPosition(2,0)}></input>
        <input type="button" id='(2,1)' onClick={()=>findPosition(2,1)}></input>
        <input type="button" id='(2,2)' onClick={()=>findPosition(2,2)}></input>
        <input type="button" id='(2,3)' onClick={()=>findPosition(2,3)}></input>
        <input type="button" id='(2,4)' onClick={()=>findPosition(2,4)}></input>
        <input type="button" id='(2,5)' onClick={()=>findPosition(2,5)}></input>
        <input type="button" id='(2,6)' onClick={()=>findPosition(2,6)}></input>
        <input type="button" id='(2,7)' onClick={()=>findPosition(2,7)}></input>
        
        <input type="button" id='(3,0)' onClick={()=>findPosition(3,0)}></input>
        <input type="button" id='(3,1)' onClick={()=>findPosition(3,1)}></input>
        <input type="button" id='(3,2)' onClick={()=>findPosition(3,2)}></input>
        <input type="button" id='(3,3)' onClick={()=>findPosition(3,3)}></input>
        <input type="button" id='(3,4)' onClick={()=>findPosition(3,4)}></input>
        <input type="button" id='(3,5)' onClick={()=>findPosition(3,5)}></input>
        <input type="button" id='(3,6)' onClick={()=>findPosition(3,6)}></input>
        <input type="button" id='(3,7)' onClick={()=>findPosition(3,7)}></input>
        
        <input type="button" id='(4,0)' onClick={()=>findPosition(4,0)}></input>
        <input type="button" id='(4,1)' onClick={()=>findPosition(4,1)}></input>
        <input type="button" id='(4,2)' onClick={()=>findPosition(4,2)}></input>
        <input type="button" id='(4,3)' onClick={()=>findPosition(4,3)}></input>
        <input type="button" id='(4,4)' onClick={()=>findPosition(4,4)}></input>
        <input type="button" id='(4,5)' onClick={()=>findPosition(4,5)}></input>
        <input type="button" id='(4,6)' onClick={()=>findPosition(4,6)}></input>
        <input type="button" id='(4,7)' onClick={()=>findPosition(4,7)}></input>
         
        <input type="button" id='(5,0)' onClick={()=>findPosition(5,0)}></input>
        <input type="button" id='(5,1)' onClick={()=>findPosition(5,1)}></input>
        <input type="button" id='(5,2)' onClick={()=>findPosition(5,2)}></input>
        <input type="button" id='(5,3)' onClick={()=>findPosition(5,3)}></input>
        <input type="button" id='(5,4)' onClick={()=>findPosition(5,4)}></input>
        <input type="button" id='(5,5)' onClick={()=>findPosition(5,5)}></input>
        <input type="button" id='(5,6)' onClick={()=>findPosition(5,6)}></input>
        <input type="button" id='(5,7)' onClick={()=>findPosition(5,7)}></input>
        
        <input type="button" id='(6,0)' onClick={()=>findPosition(6,0)}></input>
        <input type="button" id='(6,1)' onClick={()=>findPosition(6,1)}></input>
        <input type="button" id='(6,2)' onClick={()=>findPosition(6,2)}></input>
        <input type="button" id='(6,3)' onClick={()=>findPosition(6,3)}></input>
        <input type="button" id='(6,4)' onClick={()=>findPosition(6,4)}></input>
        <input type="button" id='(6,5)' onClick={()=>findPosition(6,5)}></input>
        <input type="button" id='(6,6)' onClick={()=>findPosition(6,6)}></input>
        <input type="button" id='(6,7)' onClick={()=>findPosition(6,7)}></input>
        
        <input type="button" id='(7,0)' onClick={()=>findPosition(7,0)}></input>
        <input type="button" id='(7,1)' onClick={()=>findPosition(7,1)}></input>
        <input type="button" id='(7,2)' onClick={()=>findPosition(7,2)}></input>
        <input type="button" id='(7,3)' onClick={()=>findPosition(7,3)}></input>
        <input type="button" id='(7,4)' onClick={()=>findPosition(7,4)}></input>
        <input type="button" id='(7,5)' onClick={()=>findPosition(7,5)}></input>
        <input type="button" id='(7,6)' onClick={()=>findPosition(7,6)}></input>
        <input type="button" id='(7,7)' onClick={()=>findPosition(7,7)}></input>
        
    </div></>
  );
}

export default App;
