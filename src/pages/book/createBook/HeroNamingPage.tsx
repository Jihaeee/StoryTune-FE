import { MainContainer } from "@/entities";
import { PAGE_URL } from "@/shared";
import { InfoHeader } from "@/widgets";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 20px 0px 0px 20px;
`;
const Title = styled.h1`
    margin: 0px 0px 0px 0px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
const ImageBlock = styled.label`
    width: 170px;
    height: 200px;
    display: flex;
    background-color: transparent;
    border-radius: 10px;
    color: black;
    // overflow: hidden;
    position: relative;
    border: 1px solid #000000;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    @media (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-top: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ButtonSubContainer = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    white-space: pre-line;
`;
const SubContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NameContainer = styled.div`
    width: 165px;
    height: 20px;
    border-radius: 0px 0px 9px 9px;
    // box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-top: 1px solid #000000;
    padding: 10px 0px 10px 5px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: white;
    position: absolute;
    bottom: 0;
    @media (max-width: 768px) {
        width: 145px;
    }
`;

interface HeroNameProps {
    image: string;
    name: string;
}

const HeroNamingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [images, setImages] = useState<HeroNameProps[]>([
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
        {image: "../images/temp.svg", name: ""},
    ]);

    useEffect(() => {
        if (location.state) {
            const { index, name } = location.state;
            setImages((prevImages) => 
                prevImages.map((img, i) =>
                    i === index ? { ...img, name } : img
                )
            );
            // navigate(".", { replace: true });
        }
    }, [location.state]);

    return (
        <MainContainer>
            <InfoHeader type="나만의 동화 만들기" />
            <SubContainer>
                <TitleContainer>
                    <Title>등장인물의 이름이 궁금해요!</Title>
                    <Title>사진을 눌러 이름을 알려주세요!</Title>
                </TitleContainer>
                <ImageContainer>
                    {images.map((image, index) => (
                        <>
                        <ImageBlock key={index} onClick={() => {
                            navigate(PAGE_URL.Name, {state: {image: image.image, index: index}});
                        }}>
                            <Image src={image.image} />
                            {image.name.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <NameContainer>
                                    {image.name}
                                </NameContainer>
                            )}
                        </ImageBlock>
                        </>
                    ))}

                </ImageContainer>
                <ButtonContainer>
                        <ButtonSubContainer>
                            {`마음에 들지 않아요.
                            다시 이름을 알려줄게요!`}
                        </ButtonSubContainer>
                        <ButtonSubContainer onClick={() => navigate(PAGE_URL.Story)}>
                            {`마음에 들어요!
                            이어서 하기`}
                        </ButtonSubContainer>
                    </ButtonContainer>
            </SubContainer>
            <div style={{height: "50px"}}></div>
        </MainContainer>
    )
};
export default HeroNamingPage;