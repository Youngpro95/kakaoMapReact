import React, { useState } from 'react'
import MapWrap from '../Map/MapWrap'
import styled from 'styled-components';

export const Search = () => {
  const [inputVal, setInputVal] = useState();
  const [keyword, setKeyword] = useState();

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
        <SearchBtn>검색</SearchBtn>
      </SearchForm>
      <MapWrap searchKeyword={keyword}/>
    </>
  )
}

const SearchForm = styled.form`
  width : 100vh;
  margin : 0 auto;
`
const SearchInput = styled.input.attrs({placeholder : "키워드를 입력해주세요."})`
  width : 20vh;
  margin-left: 0.5vh;
  background-color: lightgray;
  border : none;
  border-radius: 5px;
`

const SearchBtn = styled.button`
  border-radius: 10px;
  border : 1px solid;
`