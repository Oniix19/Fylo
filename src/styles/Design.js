import styled from "styled-components";

export const Design = styled.div`
    background-color: hsl(217, 28%, 15%);  
    font-family: roboto;
    color: white;
    z-index: 1;

    .header{
        padding: 0 50px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headerImg{
        height: 50px;
        width: 150px;
    }
    .headerBtn{
        background: transparent;
        border: none;
        color: white;
        width: 80px;
        margin: 5px;
    }
    .headerBtn:hover{
        text-decoration: underline;
        font-weight: bold;
    }




    .main{
        
        padding: 50px;
        text-align: center;
    }
    .div1{
        background-image: url("https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/bg-curvy-desktop_brxt40.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        margin: 0 -50px;
        padding: 0 120px;
    }
    .divMain{
        background-color: hsl(218, 28%, 13%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        margin: 0px -50px;
        padding: 0 120px;
    }
    .div1H1{
        font-size: 40px;
        margin: 30px 100px;
        padding: 0 60px;
    }
    .div1P{
        margin: 30px 310px;
    }
    .div1Btn{
        background-color: hsl(198, 60%, 50%);
        border: none;
        border-radius: 15px;
        color: white;
        padding: 10px 50px;
        font-weight: 700;
        margin: 20px 0 40px 0;
    }
    .div1Btn:hover{
        background-color: hsl(176, 68%, 64%);
    }
    
    
    .div2{       
        margin: 0px 70px;
    }
    .divCont{
        display: flex;
        justify-content: space-between;
    }
    .divDetail{
        width: 45%;
        margin: 1%;
        padding: 5px 55px;
    }
    .imgDetail{
        height: 40px;
        width: 40px;
    }



    .div3{        
        display: flex;
        align-items: center;
        text-align: left;
        margin-bottom: 100px;
    }
    .pLink{
        color:hsl(198, 60%, 50%);;
        text-decoration: underline;
    }
    .pLink:hover{
        text-decoration: underline;
        font-weight: bold;
        color: white;
    }



    .div4{
        background-image: url("https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/bg-quotes_jy1xi5.png");
        background-size: 6%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    .cont{
        background-color: rgb(33,41,60);
        border-radius: 5px;
        padding-bottom: 15px;
        margin: 40px 15px 15px 15px;
    }
    .pCont{
        padding: 5px 25px;
    }
    .profile{
        display: flex;
        padding: 5px 25px;
    }
    .profileImg{
        height: 30px;
        width: 30px;
        margin-right: 5px;
        border-radius: 100%;
    }
    .hProfile{
        margin: 0;
    }



    .div5{
        position: relative;
        z-index: 2;
        background-color: hsl(217, 28%, 15%);  
        border-radius: 5px;
        padding: 30px;
        margin: 100px 150px 0 50px;
    }
    .pDiv5{
        padding: 0 120px;
    }
    .inputdiv5{
        width: 600px;
        margin: 0 20px 0 0;
        border: none;
        border-radius: 25px;
        height: 40px;
        background-color: white;
    }
    .inputdiv5::-webkit-input-placeholder{
        padding-left: 35px;
    }
    .div5Btn{
        background-color: hsl(198, 60%, 50%);
        width: 160px;
        border: none;
        border-radius: 25px;
        height: 40px;
        color: white;
        font-weight: 700;
    }
    .div5Btn:hover{
        background-color: hsl(176, 68%, 64%);
    }


    footer{
        z-index: 1;
        background-color: hsl(216, 53%, 9%);
        margin: -170px 0;
        padding: 200px 50px 0 50px;
        height: 200px;
    }
    .footerDiv{
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
    .footerImg{
        width: 100%;
    }
    .footerdiv1{
        width: 350px;
        display: flex;
        margin: 0px;
    }
    .footerdiv2{
        display: flex;
        align-items: center;
    }
    .pFooter{
        margin: 10px 0;
    }
    


    .icon{
        font-size: 50px;
        margin: 0 10px;
        padding: 0;
    }
    .icon1{
        font-size: 20px;
        margin: 0 10px;
        padding: 0;
    }
    .icon2{
        font-size: 20px;
        margin: 0 4px;
        padding: 5px;
        border: solid 1px;
        border-radius: 100%;
    }
    .icon2:hover{
        color: hsl(198, 60%, 50%);
    }
`