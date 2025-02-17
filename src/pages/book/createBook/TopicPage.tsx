import { InfoHeader, Rerollplay } from "@/widgets";
import { Button, InputContainer, MainContainer } from "@/entities";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_URL } from "@/shared";
import { on } from "events";

const SubContainer = styled.div`
    height: 90vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        margin-top: 20px;
    }
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const MainTitle = styled.h1`
    margin-bottom: 0px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
const SubTitle = styled.h3`
    margin-top: 0px;
    @media (max-width: 768px) {
        margin-top: 5px;
        font-size: 1.15rem;
    }
`;

const CustomButton = styled(Button)`
    width: 80px;
    height: 40px;
    background-color: #F3E71E;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    color: black;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 20px;
    width: 80%;
    
    > button {
        flex: 1 1 calc(33.33% - 10px);
        margin: 5px;
    }
`;

const TopicPage = () => {
    const navigate = useNavigate();
    const [topic, setTopic] = useState<string[]>(["우정", "사랑", "용기", "배려", "협력", "가족", "꿈", "여행", "감사"]);
    const [curTopic, setCurTopic] = useState<string>("");
    
    const onReroll = () => {
        setCurTopic("");
    };
    
    const onPlay = () => {
        navigate(PAGE_URL.BookPhoto);
    };
    return (
        <MainContainer>
            <InfoHeader type="나만의 동화 만들기" />
            <SubContainer>
                <TitleContainer>
                    <div>
                        <MainTitle>새로운 이야기가 떠올랐어요!</MainTitle>
                        <SubTitle>새로운 이야기는 어떤 내용인가요?</SubTitle>
                    </div>
                </TitleContainer>
                <InputContainer 
                    placeholder="원하는 주제 입력하기"
                    value={curTopic} 
                    onChange={(e) => setCurTopic(e.target.value)}
                />
                <ButtonContainer>
                    {topic.map((topic) => (
                        <CustomButton key={topic} onClick={() => setCurTopic(topic)}>{topic}</CustomButton>
                    ))}
                </ButtonContainer>
                <Rerollplay onReroll={onReroll} onPlay={onPlay}/>
            </SubContainer>
        </MainContainer>
    )
}

export default TopicPage;