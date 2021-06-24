import { 
  useState

} from 'react'

const Calculator = () => {


  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [totalNum, setTotalNum] = useState(0)
  

  const sumNum = (e) => {
    let newSum = Number(numOne) + Number(numTwo)
    setTotalNum(newSum)
  }
  const subNum = (e) => {
    let newSub = Number(numOne) - Number(numTwo)
    setTotalNum(newSub)
  }
  const multiNum = (e) => {
    let newMulti = Number(numOne) * Number(numTwo)
    setTotalNum(newMulti)
  }
  const divNum = (e) => {
     let newDiv = Number(numOne) / Number(numTwo)
     setTotalNum(newDiv)
  }

    return (
      <div className="container">
        <h1>Math with React!</h1>

         <div className="math">
          <input type="number"
            name="numOne"
            placeholder="Enter your first number"
            value={numOne}
            onChange={ (e) => setNumOne(e.target.value) }
          />

          <span> and </span>

          <input type="number"
            name="numTwo"
            placeholder="Enter your second number"
            value={numTwo}
            onChange={ (e) => setNumTwo(e.target.value) }
          />


          <h3>{ totalNum }</h3>
       
          <button onClick={(e) => sumNum(e)}>+ =</button>
          <button onClick={(e) => subNum(e)}>- =</button>
          <button onClick={(e) => multiNum(e)}>* =</button>
          <button onClick={(e) => divNum(e)}>/ =</button>
        </div>
      </div>
    )
  
}

export default Calculator