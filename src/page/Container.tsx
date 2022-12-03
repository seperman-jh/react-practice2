import React from "react";


function Container () {

    const list = [

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

    ]



    return (
        <>
            <ul className="Container">
                {
                    list.map((t, i) => (
                            <li key={i}>
                                {}
                                {t.datetime}
                            </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Container;