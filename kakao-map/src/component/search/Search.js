import React, { useState } from 'react'
import MapWrap from '../Map/MapWrap'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchHistory } from '../../reducers/history';
import {useSelector } from 'react-redux'

export const Search = () => {
  const [inputVal, setInputVal] = useState();
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  const test = useSelector((state)=>state.search.value)
  const histroy = useSelector((state)=>state.search.history)
  const onChange = (e)=>{
    setInputVal(e.target.value)
  }
  const onSubmit = (e)=>{
    e.preventDefault(); // 새로고침 막기
    setKeyword(inputVal);
    setInputVal("");
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput onChange={onChange} value={inputVal}/>
        <SearchBtn onClick={()=>dispatch(searchHistory(inputVal))}>검색</SearchBtn>
      </SearchForm>
        <SearchHistory>
          {histroy.map((item,index)=>{
            return <SearchHistoryValue>{item}</SearchHistoryValue>
          })} 
        </SearchHistory>
      <MapWrap searchKeyword={keyword}/>
    </>
  )
}

const SearchForm = styled.form`
  position: relative;
  margin : 0 auto;
  width: 50%;
`
const SearchInput = styled.input.attrs({placeholder : "키워드를 입력해주세요."})` //place holder 설정법
  margin : 0 auto;
  margin-left: 0.5vh;
  background-color: lightgray;
  border : none;
  border-radius: 5px;
`

const SearchBtn = styled.button`
  border-radius: 10px;
  border : 1px solid;
`

const SearchHistory = styled.div`
  width: 84%;
  margin: 15px auto 0;
  text-align: center;
  &:before {
    content: "최근검색어 : ";
  }
`
const SearchHistoryValue = styled.div`
  display: inline-block;
  margin: 5px 5px;
  padding: 4px 12px;
  border: 1px solid #dedfe0;
  border-radius: 20px;
`;