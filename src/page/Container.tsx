import React, {useRef, useState} from "react";

type list = {
    name        : string
    datetime    : any
}

interface pp {
    list : list[]
    current : number
    listed : (name:string, i:number) => void
}


function Container () {

    const dummy = [

        {
            "name" : "남자코트 추천",
            "datetime" : "10-01-2022 13:00:00"
        },

        {
            "name" : "강남 우동 맛집",
            "datetime" : "10-02-2022 15:00:00"
        },

        {
            "name" : "파이썬 독학",
            "datetime" : "10-03-2022 17:00:00"
        },

    ];

    const [modalOn, setModalOn] = useState(false);
    const [current, setCurrent] = useState(0);
    const [list, setList] = useState(dummy);
    const [like, setLike] = useState([0,1,2]);
    const inputRef = useRef <HTMLInputElement>(null);

    const [input, setInput] = useState("");


    const likeHandler =  (i:number) => {


        console.log(i);

       let liked    = [...like];

        liked[i] = liked[i]+1;
       //liked[i] = liked[i] ? liked[i] + 1 : 0;

        console.log(liked);

       setLike( liked);



    }


    const listHandler = (name:string, i:number) => {
        let listed = [...list];
        listed[i]["name"] = name;

        setList(listed);
    }


    const deleteListHandler = (i: number) => {
        //let listed = list.filter((list, seq)=> seq !== i );

        let listed = [...list];
        listed.splice(i,1);
        setList(listed);

    }

    const addListHandler = (data : string) => {

        let datetime  = new Date();


        let added : list = {name:data, datetime:datetime.getMilliseconds()};

        setList([added, ...list])
        setLike([0, ...like]);

    }

    // @ts-ignore

    return (

        <>


            <ul className="container">
                {
                    list ?
                        list.map((t:list, i) => (
                            <li key={i}>
                                <div
                                    className="name"
                                    onClick={()=>{
                                            setModalOn(true);
                                            setCurrent(i);
                                        }
                                    }
                                >
                                    {t.name}
                                    <br />
                                    {t.datetime}
                                    <span
                                        className="like"
                                        onClick={()=>likeHandler(i)}
                                    >
                                    👍
                                        <span className="like_count">{like[i]}</span>
                                    </span>

                                    <button
                                         onClick={()=>deleteListHandler(i)}
                                    > 삭제 </button>
                                </div>
                            </li>
                        ))
                    : ""
                }
            </ul>


            <input
                ref = {inputRef}
                onChange ={(e)=>setInput(e.target.value)}
            />
            <button

                onClick = {() => {

                    if(input != ""){
                        addListHandler(input);
                        //inputRef?.current.value
                    }else{
                        alert("한글자라도 입력")
                    }

                }}
            > button </button>



            { modalOn ?
                <Modal
                    list = {list}
                    current = {current}
                    listed = {(name:string, i:number) => listHandler(name, i)}
                /> : ""}

        </>
    )
}




function Modal ({list, current, listed} : pp)  {

    let aa = list.filter((item,i) => i == current);
    return (
        <>
            <div> {aa.map((item)=>item.name)}  </div>
            <div onClick={() => listed("123", current)}>change</div>
        </>

    );

}



export default Container;