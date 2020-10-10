import React from 'react';
import { dummyData } from '../dummyData';

function sampleComponent ({propsTest, number}){
    const a = 1;
    const b = 1;
    const condition = a === b;
    return (
    <>
    {/*조건문*/}
    <div>
        {condition ? (
        <div>
            <input type="text"  placeholder="즐거운 리액트 스터디"/>
        </div>
        ) : (
        <span>스터디 bad</span>
        )}
    </div>
    {/* 반복문 */}
    <div>
        {/* {dummyData.map((item,index) => (
            <div key={item._id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
        ))} */}
    </div>
    {/* props */}
    <span>{propsTest}</span>

    {/* state */}
    <span>{number}</span>
    </>
    );
}

export default sampleComponent;