import styled from "styled-components";

type Props = {
    display: string;
}

export const Climate = styled.div`
    width: 100%;
    text-align: center;

    h2{
        padding: 10px;
        font-size: 30px;
        margin: 20px 0;
    }
    input{
        width: 250px;
        border-radius: 20px;
        border: 0;
        padding: 10px 15px;
        font-size: 20px;
    }
    button{
        margin-left: 20px;
        padding: 10px 15px;
        border: 0;
        border-radius: 20px;
        font-size: 20px;
        font-weight: bold;
        background-color: #D97925;
        color: #f2e2ce;
    }
    button:hover{
        background-color: #D9A577;
    }
`;

export const Info = styled.div<Props>`
    width: 400px;
    margin: auto;
    background-color: #663333;
    margin-top: 40px;
    padding: 20px;
    border: 2px solid #D97925;
    border-radius: 20px;
    box-shadow: 0 0 1em #D9A577;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
`;

export const AreaLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AreaRight = styled.div`
    img{
        width: 120px;
        height: 120px;
    }
`;

export const Alert = styled.div<Props>`
    width: 400px;
    margin: auto;
    background-color: #663333;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    padding: 20px;
    border: 2px solid #D97925;
    border-radius: 20px;
    box-shadow: 0 0 1em #D9A577;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
`;

export const City = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const Temp = styled.div`
    margin: 5px;
    display: flex;
`;

export const TempTitle = styled.div`
    font-size: 20px;
`;

export const TempInfo = styled.div`
    margin-left: 5px;
    font-size: 18px;
`;

export const Wind = styled.div`
    margin: 5px;
    display: flex;
`;

export const WindTitle = styled.div`
    font-size: 20px;
`;

export const WindInfo = styled.div`
    margin-left: 5px;
    font-size: 18px;
`;

export const Humidity = styled.div`
    margin: 5px;
    display: flex;
`;

export const HumidityTitle = styled.div`
    font-size: 20px;
`;

export const HumidityInfo = styled.div`
    margin-left: 5px;
    font-size: 18px;
`;