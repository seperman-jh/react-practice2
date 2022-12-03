import React, {useState} from "react";

type list = {
    name        : string
    datetime    : string
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


    const likeHandler =  (i:number) => {
       let liked    = [...like];
       liked[i]     = liked[i] + 1;
       setLike( liked);
    }


    const listHandler = (name:string, i:number) => {
        let listed = [...list];
        listed[i]["name"] = name;

        setList(listed);
    }

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
                                    <span
                                        className="like"
                                        onClick={()=>likeHandler(i)}
                                    >
                                    👍
                                        <span className="like_count">{like[i]}</span>
                                    </span>
                                </div>
                            </li>
                        ))
                    : ""
                }
            </ul>

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