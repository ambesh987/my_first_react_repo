import React from 'react'

const Vegetables=()=> {
    //for tomatoes
    const [Count,setCount]=React.useState(0);
    function add(){
        setCount(Count+1);
    }
    function sub(){
        setCount(Count-1);
    }
    //for potatoes
    const [Count1,setCount1]=React.useState(0);
    function add1(){
        setCount1(Count1+1);
    }
    function sub1(){
        setCount1(Count1-1);
    }
    //for carrots
    const [Count2,setCount2]=React.useState(0);
    function add2(){
        setCount2(Count2+1);
    }
    function sub2(){
        setCount2(Count2-1);
    }
    //for onions

    const [Count3,setCount3]=React.useState(0);
    function add3(){
        setCount3(Count3+1);
    }
    function sub3(){
        setCount3(Count3-1);
    }

  return (
      <>
    <h1>Vegetables</h1>
    <div>tomatoes-{10+Count} Kgs</div>
    <button onClick={add}>+</button> &nbsp;&nbsp;
    <button onClick={sub}>-</button><br />


    <div>potatoes-{8+Count1} Kgs</div>
    <button onClick={add1}>+</button>&nbsp;&nbsp;
    <button onClick={sub1}>-</button><br />

    <div>carrots-{5+Count2} Kgs</div>
    <button onClick={add2}>+</button>&nbsp;&nbsp;
    <button onClick={sub2}>-</button><br />


    <div>onions-{7+Count3} Kgs</div>
    <button onClick={add3}>+</button>&nbsp;&nbsp;
    <button onClick={sub3}>-</button><br />
    </>
  )
}

export { Vegetables}